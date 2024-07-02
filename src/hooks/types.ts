import type { Address } from "viem";
import type { INTERVALS } from "#/constants";

export type { Address };

export type Token = {
  address: Address;
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

export type GovNft = {
  id: bigint;
  total_locked: bigint;
  amount: bigint;
  total_claimed: bigint;
  claimable: bigint;
  split_count: bigint;
  cliff_length: bigint;
  start: number;
  end: bigint;
  token: Address;
  vault: Address;
  minter: Address;
  owner: Address;
  address: Address; // address of the collection
  delegated: Address;
  vestingStarted: boolean;
  // Total amount vested in percentage (decimals truncated)
  vestedPct: number;
  isOwner: boolean;
  isMinter: boolean;
  isDelegated: boolean;
  name: string;
  description?: string;
};

export type Collection = {
  address: Address;
  owner: Address;
  name: string;
  symbol: string;
  supply: bigint;
};

export type Interval = (typeof INTERVALS)[number];
