import { Address } from "viem";

export type { Address };

export type Token = {
  address: Address;
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

export type GovNft = {
  id: number;
  total_locked: bigint;
  amount: bigint;
  total_claimed: bigint;
  claimable: bigint;
  split_count: number;
  cliff_length: number;
  start: number;
  end: number;
  token: Address;
  vault: Address;
  minter: Address;
  owner: Address;
  address: Address;
  delegated: Address;
};
