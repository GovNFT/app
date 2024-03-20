import { Button } from "flowbite-react";
import { useEffect } from "react";
import { Address } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { ERC20_ABI, GOVNFT_ABI, GOVNFT_ADDRESS } from "../constants";

export default function FlowAllowance({
  token,
  amount,
  forAddress,
  setAllowed,
}: { token: Address; amount: bigint; forAddress: Address; setAllowed: boolean | null }) {
  const { address } = useAccount();
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    abi: ERC20_ABI,
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
    // @ts-ignore
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
              abi: ERC20_ABI,
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
