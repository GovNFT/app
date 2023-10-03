import { Spinner } from "flowbite-react";

import TokenAvatar from "./TokenAvatar";

export default function Amount({
  address,
  amount,
  symbol = null,
  showLogo = true,
}) {
  if (!amount) {
    return <Spinner color="gray" size="xs" />;
  }

  return (
    <span className="flex gap-2 items-center">
      {showLogo ? <TokenAvatar address={address} className="h-4" /> : ""}
      {amount}
      <span className="opacity-60">{symbol}</span>
    </span>
  );
}
