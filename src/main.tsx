import "./main.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeConnector } from "@wagmi/connectors/safe";
import { InjectedConnector } from "@wagmi/core";
import { providers } from "ethers";
import { Flowbite } from "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import FlowbiteTheme from "../flowbite.config";
import App from "./App";
import DarkThemeToggle from "./components/DarkThemeToggle";
import CustomRpc from "./components/Profile/CustomRpc";
import {
  DEFAULT_CHAIN,
  FEATURE_FLAGS,
  WALLETCONNECT_PROJECT_ID,
} from "./constants";
import Error from "./Error";

const queryClient = new QueryClient();

/**
 * Custom wrapper to replace the wagmi RPC provider with a batched one...
 */
function customProvider(chain) {
  const rpcUri = CustomRpc.getRpc();

  const wagmiProvider = jsonRpcProvider({
    rpc: () => ({ http: rpcUri }),
  })(chain);

  if (FEATURE_FLAGS.includes("no-batch-rpc-calls")) {
    return wagmiProvider;
  }

  return {
    ...wagmiProvider,
    provider: () =>
      new providers.JsonRpcBatchProvider(rpcUri, {
        ensAddress: chain.contracts?.ensRegistry?.address,
        chainId: chain.id,
        name: chain.network,
      }),
  };
}

const { chains, provider } = configureChains([DEFAULT_CHAIN], [customProvider]);
export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        // @ts-ignore
        name: "Browser Wallet",
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLETCONNECT_PROJECT_ID,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "GOVNFT",
        jsonRpcUrl: CustomRpc.getRpc(),
      },
    }),
    new SafeConnector({
      chains,
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Flowbite theme={{ ...FlowbiteTheme, dark: DarkThemeToggle.isDarkMode() }}>
      {/* @ts-ignore */}
      <ErrorBoundary FallbackComponent={Error}>
        <WagmiConfig client={wagmiClient}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </WagmiConfig>
      </ErrorBoundary>
    </Flowbite>
  </React.StrictMode>
);
