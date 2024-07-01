import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";

import Toaster from "#/components/Toaster";
import { GOVNFT_ABI, GOVNFT_ADDRESS } from "#/constants";
import type { Address, GovNft } from "#/hooks/types";

export default function DelegateButton({ nft, delegatee }: { nft: GovNft; delegatee: Address }) {
  const [, navigate] = useLocation();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (error) {
      // @ts-ignore
      Toaster.toast(error);
    } else if (isConfirmed) {
      navigate(`~/nft/${nft.id}`);
      Toaster.toast.success("GovNFT delegated!");
    }
  }, [error, isConfirmed, navigate, nft.id]);

  return (
    <>
      <Button
        onClick={() =>
          writeContract({
            abi: GOVNFT_ABI,
            address: nft.address,
            functionName: "delegate",
            args: [nft.id, delegatee],
          })
        }
        className="w-full"
        disabled={isPending || isConfirmed || isConfirming}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Delegated" : "Delegate"}
      </Button>
    </>
  );
}
