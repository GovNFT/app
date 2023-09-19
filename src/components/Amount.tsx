import { Spinner } from "flowbite-react";

export default function Amount({
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
        <img src="/temp_token_logo.png" className="h-4 rounded-full" />
      ) : (
        ""
      )}
      {amount}.{decimals}
      <span className="opacity-40">{symbol}</span>
    </span>
  );
}
