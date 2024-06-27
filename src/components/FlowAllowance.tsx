import { Button } from "flowbite-react";
import { useEffect } from "react";
import { Address, erc20Abi } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

/* TODO: Rename this */
export default function FlowAllowance({
  token,
  amount,
  forAddress,
  setAllowed,
}: { token: Address; amount: bigint; forAddress: Address; setAllowed: CallableFunction }) {
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
          {isPending ? "Confirming..." : isConfirmed ? "Approved" : "Approve"}
        </Button>
      </>
    );
  }
}
