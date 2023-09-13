import "./main.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeConnector } from "@wagmi/connectors/safe";
import { InjectedConnector } from "@wagmi/core";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";
import { Flowbite } from "flowbite-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import FlowbiteTheme from "../flowbite.config";
import App from "./App";
import DarkThemeToggle from "./components/DarkThemeToggle";
import CustomRpc from "./components/Profile/CustomRpc";
import { DEFAULT_CHAIN, WALLETCONNECT_PROJECT_ID } from "./constants";
import Error from "./Error";

const queryClient = new QueryClient();

const { chains, publicClient } = configureChains(
  [DEFAULT_CHAIN],
  [
    jsonRpcProvider({
      rpc: (_chain) => ({ http: CustomRpc.getRpc() }),
    }),
  ],
);

export const wagmiConfig = createConfig({
  publicClient,
  autoConnect: true,
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
        <WagmiConfig config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </WagmiConfig>
      </ErrorBoundary>
    </Flowbite>
  </React.StrictMode>,
);
