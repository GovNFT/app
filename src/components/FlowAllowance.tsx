import { Button } from "flowbite-react";
import { useEffect } from "react";
import { type Address, erc20Abi } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

export default function FlowAllowance({
  token,
  amount,
  forAddress,
  setAllowed,
  ctaTexts = ["Approved", "Approve"],
}: { token: Address; amount: bigint; forAddress: Address; setAllowed: CallableFunction; ctaTexts?: [string, string] }) {
  const { address } = useAccount();
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    abi: erc20Abi,
    address: token,
    functionName: "allowance",
    args: [address, forAddress],
  });

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const allowed = allowance && allowance >= amount && !isPending;

  useEffect(() => {
    setAllowed(allowed);
  }, [allowed, setAllowed]);

  useEffect(() => {
    if (isConfirmed) {
      refetchAllowance();
    }
  }, [isConfirmed, refetchAllowance]);

  if (!allowed) {
    return (
      <>
        <Button
          onClick={() =>
            writeContract({
              abi: erc20Abi,
              address: token,
              functionName: "approve",
              args: [forAddress, amount],
            })
          }
          className="w-full"
          disabled={allowed || isPending || isConfirmed}
        >
          {isPending ? "Confirming..." : isConfirmed ? ctaTexts[0] : ctaTexts[1]}
        </Button>
      </>
    );
  }
}
