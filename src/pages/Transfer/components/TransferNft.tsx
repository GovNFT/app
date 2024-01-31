import { TextInput, Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import { CheckCircle2 as CheckCircle2Icon, Info as InfoIcon, Wallet as WalletIcon } from "lucide-react";
import { useState } from "react";
import { isAddress } from "viem";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftNavbar from "../../../components/GovnftNavbar";
import GovnftProgress from "../../../components/GovnftProgress";
import GovnftStatus from "../../../components/GovnftStatus";
import NavLink from "../../../components/NavLink";

import Amount from "../../../components/Amount";
import TransferButton from "./TransferButton";

export default function TransferNft({ govnft }) {
  const [toAddress, setToAddress] = useState(null);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="mx-auto bg-white shadow-lg dark:bg-white/5 p-2 md:p-4 rounded-lg mb-1 border border-gray-200 dark:border-gray-700/50">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center pl-4">
              <GovnftAvatar govnft={govnft} />
            </div>
            <div className="flex gap-6 items-center pr-1">
              <GovnftStatus govnft={govnft} />
              <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
            </div>
          </div>
        </div>

        <div className="mx-auto bg-white shadow-lg dark:bg-white/5 rounded-lg mb-5">
          <GovnftNavbar govnft={govnft} active="transfer" />
        </div>

        <div className="lg:flex gap-6">
          <div className="w-8/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-8 md:py-6 rounded-lg">
            <div className="text-lg text-gray-700 dark:text-gray-300">Transfer</div>

            <div className="space-y-3 pt-8">
              <div className="text-xs text-gray-600 dark:text-gray-400">Address</div>
              <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
            </div>
          </div>

          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
              {!isAddress(toAddress) && (
                <>
                  <div className="bg-gray-500/10 dark:bg-white/5 p-3.5 rounded-full">
                    <WalletIcon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Enter the wallet address where the lock will be transfered
                  </div>
                </>
              )}

              {isAddress(toAddress) && (
                <>
                  <div className="bg-green-500/5 p-3.5 rounded-full text-green-500">
                    <CheckCircle2Icon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Wallet address is valid. You can now transfer the GovNFT.
                  </div>
                  <TransferButton />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
