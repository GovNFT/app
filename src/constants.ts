import { optimism } from "viem/chains";

import { Address } from "./hooks/types";

export const ZERO_ADDRESS: Address =
  "0x0000000000000000000000000000000000000000";
export const TOKEN_ICON = "/svg/coin.svg";
export const RPC_URI = import.meta.env.VITE_RPC_URI;
export const TOKEN_ADDRESSES: Address[] =
  import.meta.env.VITE_TOKEN_ADDRESSES.split(",");
export const TOKEN_ASSETS_CDN = String(
  import.meta.env.VITE_TOKEN_ASSETS_CDN,
).split(",");
export const DEFAULT_CHAIN = optimism;

export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;

// prettier-ignore
export const FEATURE_FLAGS = String(
  import.meta.env.VITE_FEATURE_FLAGS
).split(",");

export const CURRENCY_MAXIMUM_FRACTION_DIGITS = parseInt(
  import.meta.env.VITE_CURRENCY_MAXIMUM_FRACTION_DIGITS || "5",
);
