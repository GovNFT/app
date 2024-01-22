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
export const NATIVE_TOKEN_LOGO = import.meta.env.VITE_NATIVE_TOKEN_LOGO;
export const NATIVE_TOKEN = {
  ...DEFAULT_CHAIN.nativeCurrency,
  wrappedAddress:
    import.meta.env.VITE_WRAPPED_NATIVE_TOKEN.toLowerCase() as Address,
  /**
   * TODO: This is an exception for the native token where "address" is "ETH"
   * - Change this later so it's type-safe
   * Discussion: https://github.com/velodrome-finance/app/pull/347#discussion_r1380073009
   */

  address: DEFAULT_CHAIN.nativeCurrency.symbol.toLowerCase() as Address,
};

export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;

// prettier-ignore
export const FEATURE_FLAGS = String(
  import.meta.env.VITE_FEATURE_FLAGS
).split(",");

export const CURRENCY_MAXIMUM_FRACTION_DIGITS = parseInt(
  import.meta.env.VITE_CURRENCY_MAXIMUM_FRACTION_DIGITS || "5",
);
