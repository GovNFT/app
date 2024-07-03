import { Button } from "flowbite-react";
import { useEffect } from "react";
import { type Address, erc20Abi } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

import { DEFAULT_CHAIN } from "#/constants";

export default function Allowance({
  token,
  amount,
  forAddress,
  setAllowed,
  ctaTexts = ["Approved", "Approve"],
}: { token: Address; amount: bigint; forAddress: Address; setAllowed: CallableFunction; ctaTexts?: [string, string] }) {
  const { address } = useAccount();
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    chainId: DEFAULT_CHAIN.id,
    abi: erc20Abi,
    address: token,
    functionName: "allowance",
    args: [address, forAddress],
  });

  const { data: hash, isPending, writeContract } = useWriteContract();

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
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
              chainId: DEFAULT_CHAIN.id,
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
