import { Button } from "flowbite-react";
import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { GOVNFT_ABI } from "../../../constants";
import { GovNft } from "../../../hooks/types";

export default function TransferButton({ nft, recipient }: { nft: GovNft; recipient: Address }) {
  const { address } = useAccount();

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
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
      disabled={isPending || isConfirmed}
    >
      {isPending ? "Confirming..." : isConfirmed ? "Transferred" : "Transfer"}
    </Button>
  );
}
