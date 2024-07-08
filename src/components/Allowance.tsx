import { Button, Timeline } from "flowbite-react";
import { useEffect } from "react";
import { type Address, erc20Abi } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

import { CheckCircle2 as CheckCircle2Icon, Lock as LockIcon, Hourglass as HourglassIcon } from "lucide-react";
import { DEFAULT_CHAIN } from "#/constants";
import type { Token } from "#/hooks/types";

export default function Allowance({
  token,
  amount,
  forAddress,
  setAllowed,
  ctaTexts = ["Approved", "Approve"],
}: { token: Token; amount: bigint; forAddress: Address; setAllowed: CallableFunction; ctaTexts?: [string, string] }) {
  const { address } = useAccount();
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    chainId: DEFAULT_CHAIN.id,
    abi: erc20Abi,
    address: token.address,
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
        <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
          <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
            <LockIcon size={14} />
          </div>
          <div className="text-sm">Allowance not granted for {token.symbol}</div>
        </div>
        <Button
            onClick={() =>
              writeContract({
                chainId: DEFAULT_CHAIN.id,
                abi: erc20Abi,
                address: token.address,
                functionName: "approve",
                args: [forAddress, amount],
              })
            }
            className="w-full mt-4"
            color="light"
            disabled={allowed || isPending || isConfirmed}
          >
            {isPending ? "Confirming..." : isConfirmed ? ctaTexts[0] : ctaTexts[1]}
          </Button>

        <div className="flex gap-2 items-center text-amber-500 pt-6">
          <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
            <HourglassIcon size={14} />
          </div>
          <div className="text-sm animate-pulse">Waiting on pending actions...</div>
        </div>
      </>
    );
  }

  return (
    <div className="flex gap-2 items-center text-green-500 pb-6">
      <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
        <CheckCircle2Icon size={14} />
      </div>
      <div className="text-sm">Allowance granted for {token.symbol}</div>
    </div>
  );
}
