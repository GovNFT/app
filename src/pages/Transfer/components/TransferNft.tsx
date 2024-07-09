import { TextInput } from "flowbite-react";
import { CheckCircle2 as CheckCircle2Icon, Wallet as WalletIcon } from "lucide-react";
import { useState } from "react";
import { isAddress } from "viem";
import GovnftHeader from "#/components/GovnftHeader";
import type { GovNft } from "#/hooks/types";
import TransferButton from "./TransferButton";

export default function TransferNft({ nft }: { nft: GovNft }) {
  const [toAddress, setToAddress] = useState(null);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="transfer" />

        <div className="lg:flex gap-6">
          <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 px-5 py-6 md:px-10 md:py-8 rounded-lg space-y-6">
            <div className="text-2xl text-gray-700 dark:text-gray-300">Transfer</div>

            <div className="text-sm text-gray-600 dark:text-gray-400 pr-4">
              By transferring the lock, you give the ownership and the control over this NFT and underlying locked token
              amounts to another wallet. This action is not reversible and requires due diligence before signing the
              transfer transaction. On transfer, any existing delegation is cancelled.
            </div>

            <div className="space-y-3 py-3">
              <div className="text-gray-600 dark:text-gray-400 text-xs">Destination Address</div>
              <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
            </div>
          </div>
          <div className="lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:p-10 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
              {!isAddress(toAddress) && (
                <>
                  <div className="bg-gray-500/10 dark:bg-white/5 p-3.5 rounded-full">
                    <WalletIcon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Enter the wallet address where the lock will be transfered
                  </div>
                </>
              )}

              {isAddress(toAddress) && (
                <>
                  <div className="bg-green-500/5 p-3.5 rounded-full text-green-500">
                    <CheckCircle2Icon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    The address is valid. You can now transfer your govnft.
                  </div>
                  <TransferButton nft={nft} recipient={toAddress} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
