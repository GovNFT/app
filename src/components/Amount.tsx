import { FixedNumber } from "ethers";
import { Spinner } from "flowbite-react";
import { useAccount } from "wagmi";

import { CURRENCY_MAXIMUM_FRACTION_DIGITS } from "../constants";
import { useTokens } from "../hooks/token";
import { Address } from "../hooks/types";
import TokenAvatar from "./TokenAvatar";

const NUMBER_FORMAT = "en-US";

function prettify(value: FixedNumber) {
  const ndigits =
    value.cmp(FixedNumber.fromString("1")) === -1
      ? CURRENCY_MAXIMUM_FRACTION_DIGITS
      : 2;

  // most numbers will look OK with standard US number formatting (e.g. 12.56)
  // however, 0.00034 will look like 0
  // let's remedy this with custom formatting based on decimals value
  return new Intl.NumberFormat(NUMBER_FORMAT, {
    maximumFractionDigits: ndigits,
  }).format(
    // @ts-expect-error: format takes a string as well not just a number, so we need to disable TS
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#syntax
    value.round(ndigits).toString(),
  );
}

export default function Amount({
  amount,
  decimals = null,
  tokenAddress = "",
  symbol = null,
  showLogo = true,
}: {
  amount: bigint | number;
  decimals?: number | null;
  tokenAddress?: string;
  symbol?: string | null;
  showLogo?: boolean;
}) {
  const { address: accountAddress } = useAccount();
  const { data: tokens } = useTokens(accountAddress);

  if (amount == null) {
    return <Spinner color="gray" size="xs" />;
  }

  const addr = String(tokenAddress).toLowerCase() as Address;
  const token = tokens?.filter((asset) => asset.address.includes(addr));

  // @ts-ignore
  const amountDecimals = decimals || token?.decimals || 18;

  const pretty = prettify(FixedNumber.fromValue(amount, amountDecimals));

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
