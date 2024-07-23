import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

import Toaster from "#/components/Toaster";
import { DEFAULT_CHAIN, GOVNFT_ABI } from "#/constants";
import { useSearchParams } from "#/hooks/searchParams";
import type { Address, GovNft } from "#/hooks/types";

export default function SplitButton({
  nft,
  recipient,
  amount,
  start,
  end,
  cliff,
  description,
}: {
  nft: GovNft;
  recipient: Address;
  amount: bigint;
  start: bigint;
  end: bigint;
  cliff: bigint;
  description: string;
}) {
  const [, , navigate] = useSearchParams();
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (error) {
      // @ts-ignore
      Toaster.toast(error);
    } else if (isConfirmed) {
      Toaster.toast.success(`Lock #${nft.id} split to ${recipient}`);
      navigate(`/nft/${nft.id}`);
    }
  }, [error, isConfirmed, navigate, recipient, nft.id]);

  return (
    <Button
      onClick={() =>
        writeContract({
          chainId: DEFAULT_CHAIN.id,
          abi: GOVNFT_ABI,
          address: nft.address,
          functionName: "split",
          args: [
            nft.id,
            [
              {
                beneficiary: recipient,
                start: start,
                end: end,
                cliff: cliff,
                amount: amount,
                description: description,
              },
            ],
          ],
        })
      }
      className="w-full"
      disabled={isPending || isConfirmed}
    >
      {isPending ? "Confirming..." : isConfirmed ? "Split Confirmed" : "Split"}
    </Button>
  );
}
