import { createConfig, http } from "wagmi";
import {
  coinbaseWallet,
  injected,
  safe,
  walletConnect,
} from "wagmi/connectors";

import CustomRpc from "./components/Profile/CustomRpc";
import { DEFAULT_CHAIN, WALLETCONNECT_PROJECT_ID } from "./constants";

const wagmiConfig = createConfig({
  chains: [DEFAULT_CHAIN],
  transports: {
    [DEFAULT_CHAIN.id]: http(CustomRpc.getRpc()),
  },
  connectors: [
    injected(),
    walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }),
    coinbaseWallet({ appName: "GovNFT" }),
    safe(),
  ],
});

export default wagmiConfig;
