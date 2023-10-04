import { Spinner } from "flowbite-react";

import TokenAvatar from "./TokenAvatar";

export default function Amount({
  amount,
  tokenAddress = "",
  symbol = null,
  showLogo = true,
}) {
  if (!amount) {
    return <Spinner color="gray" size="xs" />;
  }

  if (showLogo) {
    return (
      <div className="flex gap-1.5 items-center">
        <TokenAvatar address={tokenAddress} className="w-4 h-4 mr-0.5" />
        <span className="tracking-wider">{amount}</span>
        <span className="opacity-60">{symbol}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-1.5 items-center">
      <span className="tracking-wider">{amount}</span>
      <span className="opacity-60">{symbol}</span>
    </div>
  );
}
