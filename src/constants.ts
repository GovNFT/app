import { constants } from "ethers";
import { optimism } from "wagmi/chains";

export const ZERO_ADDRESS = constants.AddressZero;
export const RPC_URI = import.meta.env.VITE_RPC_URI;
export const TOKEN_ASSETS_CDN = String(
  import.meta.env.VITE_TOKEN_ASSETS_CDN
).split(",");
export const DEFAULT_CHAIN = optimism;
export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;

// prettier-ignore
export const FEATURE_FLAGS = String(
  import.meta.env.VITE_FEATURE_FLAGS
).split(",");
