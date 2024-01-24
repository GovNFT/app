import { Address } from "viem";

export type { Address };

export type Token = {
  address: Address;
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};
