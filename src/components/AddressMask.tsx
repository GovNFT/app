export default function AddressMask({ address, className = "" }) {
  if (!address) {
    return <></>;
  }

  return (
    <span className={`font-mono ${className}`}>
      {address.substring(0, 6)}...{address.substring(address.length - 5)}
    </span>
  );
}
