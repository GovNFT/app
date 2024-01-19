import { isEmpty } from "lodash";
import { createConfig, http } from "wagmi";
import {
  coinbaseWallet,
  injected,
  safe,
  walletConnect,
} from "wagmi/connectors";

import { DEFAULT_CHAIN, RPC_URI, WALLETCONNECT_PROJECT_ID } from "./constants";
export const CUSTOM_RPC_URI_KEY = "customRPC";

export const getRpc = (): string => {
  const customRpc = window.localStorage.getItem(CUSTOM_RPC_URI_KEY);

  if (isEmpty(customRpc)) {
    return RPC_URI;
  }

  return customRpc;
};

const config = createConfig({
  chains: [DEFAULT_CHAIN],
  transports: {
    [DEFAULT_CHAIN.id]: http(getRpc()),
  },
  multiInjectedProviderDiscovery: false,
  connectors: [
    injected(),
    walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }),
    coinbaseWallet({ appName: "GovNFT" }),
    safe(),
  ],
});

export default config;
