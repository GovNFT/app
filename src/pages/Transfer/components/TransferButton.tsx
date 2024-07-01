import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";
import { GOVNFT_ABI } from "../../../constants";
import type { Address, GovNft } from "../../../hooks/types";

import Toaster from "../../../components/Toaster";

export default function TransferButton({ nft, recipient }: { nft: GovNft; recipient: Address }) {
  const { address } = useAccount();
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
      navigate("~/dash");
      Toaster.toast.success("GovNFT transfered!");
    }
  }, [error, isConfirmed, navigate]);

  return (
    <>
      <Button
        onClick={() =>
          writeContract({
            abi: GOVNFT_ABI,
            address: nft.address,
            functionName: "transferFrom",
            args: [address, recipient, nft.id],
          })
        }
        className="w-full"
        disabled={isPending || isConfirmed || isConfirming}
      >
        {isPending ? "Confirming..." : isConfirmed ? "Transferred" : "Transfer"}
      </Button>
    </>
  );
}
