import { Button, Timeline } from "flowbite-react";
import { useEffect } from "react";
import { type Address, erc20Abi } from "viem";
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import FlowPoint from "./FlowPoint";

import { CheckCircle as CheckCircleIcon, Lock as LockIcon } from "lucide-react";
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
      <Timeline>
        <Timeline.Item className="!mt-6 !mb-6">
          <FlowPoint value={allowed} icon={LockIcon} />

          <Timeline.Content>
            <Timeline.Body className="!text-gray-700 dark:!text-gray-400 text-sm">
              Allowance not granted for {token.symbol}
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
                className="w-full mt-6"
                disabled={allowed || isPending || isConfirmed}
              >
                {isPending ? "Confirming..." : isConfirmed ? ctaTexts[0] : ctaTexts[1]}
              </Button>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item className="!mt-6 !mb-6">
          <FlowPoint value={false} />
          <Timeline.Content>
            <Timeline.Time className="animate-pulse">Waiting on pending actions...</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
  }

  return (
    <div className={"flex gap-4 mb-8 text-gray-700 dark:text-gray-400 text-sm"}>
      <CheckCircleIcon /> Allowance granted for {token.symbol}
    </div>
  );
}
