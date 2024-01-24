import * as dnum from "dnum";
import { Spinner } from "flowbite-react";
import { useAccount } from "wagmi";

import { CURRENCY_MAXIMUM_FRACTION_DIGITS } from "../constants";
import { useTokens } from "../hooks/token";
import { Address } from "../hooks/types";
import TokenAvatar from "./TokenAvatar";

export default function Amount({
  amount,
  decimals = null,
  tokenAddress,
  symbol = null,
  showLogo = true,
}: {
  amount: bigint;
  decimals?: number | null;
  tokenAddress?: Address;
  symbol?: string | null;
  showLogo?: boolean;
}) {
  const { address: accountAddress } = useAccount();
  const { data: tokens } = useTokens(accountAddress);

  if (amount == null) {
    return <Spinner color="gray" size="xs" />;
  }

  const addr = String(tokenAddress).toLowerCase() as Address;
  const token = tokens.filter((asset) => asset.address.includes(addr));

  // @ts-ignore
  const amountDecimals = decimals || token?.decimals || 18;

  const amountFrom = dnum.from([amount, amountDecimals]);
  const ndigits =
    Number(dnum.format(amountFrom)) < 1 ? CURRENCY_MAXIMUM_FRACTION_DIGITS : 2;
  const pretty = dnum.format(amountFrom, ndigits);

  if (showLogo) {
    return (
      <div className="flex gap-1 items-center">
        <TokenAvatar address={addr} className="w-4 h-4 mr-0.5" />
        <span className="tracking-wider">{pretty}</span>
        <span className="opacity-60">{symbol}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-1 items-center">
      <span className="tracking-wider">{pretty}</span>
      <span className="opacity-60">{symbol}</span>
    </div>
  );
}
