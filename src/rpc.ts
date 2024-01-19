import { isEmpty } from "lodash";
import { createConfig, http } from "wagmi";
import {
  coinbaseWallet,
  injected,
  safe,
  walletConnect,
} from "wagmi/connectors";

import { DEFAULT_CHAIN, RPC_URI, WALLETCONNECT_PROJECT_ID } from "./constants";
export const customRPCLocalStorageKey = "customRPC";

export const getRpc = (): string => {
  const customRpc = window.localStorage.getItem(customRPCLocalStorageKey);

  if (isEmpty(customRpc)) {
    return RPC_URI;
  }

  return customRpc;
};

const rpc = createConfig({
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

export default rpc;
