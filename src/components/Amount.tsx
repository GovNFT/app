import { Spinner } from "flowbite-react";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

import { useTokens } from "#/hooks/token";
import type { Address } from "#/hooks/types";
import TokenAvatar from "./TokenAvatar";

export default function Amount({
  amount,
  decimals = null,
  tokenAddress,
  showLogo = true,
}: {
  amount: bigint;
  decimals?: number | null;
  tokenAddress?: Address;
  showLogo?: boolean;
}) {
  const { address: accountAddress } = useAccount();
  const { data: tokens } = useTokens(accountAddress);

  if (amount == null) {
    return <Spinner color="gray" size="xs" />;
  }

  const addr = String(tokenAddress).toLowerCase() as Address;
  const token = tokens?.find((t) => t.address.toLowerCase() === addr);

  // @ts-ignore
  const amountDecimals = decimals || token?.decimals || 18;

  const ndigits = amount < parseUnits("1", amountDecimals) ? 5 : 2;
  const pretty = Number(formatUnits(amount, amountDecimals)).toFixed(ndigits).toString();

  if (showLogo) {
    return (
      <div className="flex gap-1 items-center">
        <TokenAvatar address={addr} className="w-4 h-4 mr-0.5" />
        <span className="tracking-wider">{pretty}</span>
        <span className="opacity-60">{token?.symbol}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-1 items-center">
      <span className="tracking-wider">{pretty}</span>
      <span className="opacity-60">{token?.symbol}</span>
    </div>
  );
}
