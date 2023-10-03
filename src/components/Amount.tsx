import { Spinner } from "flowbite-react";

import TokenAvatar from "./TokenAvatar";

export default function Amount({
  address,
  amount,
  decimals = null,
  symbol = null,
  showLogo = true,
}) {
  if (!amount) {
    return <Spinner color="gray" size="xs" />;
  }

  return (
    <span className="flex gap-2 items-center">
      {showLogo ? (
        <TokenAvatar
          address={address}
          className="h-4"
        />
      ) : (
        ""
      )}
      {amount}.{decimals}
      <span className="opacity-40">{symbol}</span>
    </span>
  );
}
