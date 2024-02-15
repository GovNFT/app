import { TextInput, Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import {
  CheckCircle2 as CheckCircle2Icon,
  ExternalLink as ExternalLinkIcon,
  Info as InfoIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";
import GovnftHeader from "../../../components/GovnftHeader";
import NavLink from "../../../components/NavLink";

import Amount from "../../../components/Amount";
import DelegateButton from "./DelegateButton";

export default function DelegateNft({ nft }) {
  const [toAddress, setToAddress] = useState(null);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="delegate" />

        <div className="lg:flex gap-6">
          <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 px-5 py-6 md:px-10 md:py-8 rounded-lg">
            <div className="text-2xl text-gray-700 dark:text-gray-300">Delegate</div>

            {/* TODO: write text that describes how delegation works */}
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-4 sm:pt-4 sm:pr-8">
              You can delegate your locked value {nft.amount} to one of the OP Delegates. Delegates are the stewards of
              the Optimism Token House, appointed by token holders to make governance decisions on their behalf.
            </div>

            <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-4 py-4 mt-10 mb-12 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400">Current Lock</div>
              <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
            </div>

            <div className="space-y-3 pb-3">
              <div className="text-gray-600 dark:text-gray-400 text-xs flex justify-between items-center">
                <div>Delegate Address</div>
                <div className="underline hover:no-underline flex gap-2 items-center">
                  <a href="https://vote.optimism.io/delegates" target="_blank" rel="noreferrer">
                    View Delegates
                  </a>
                  <ExternalLinkIcon size={12} />
                </div>
              </div>
              <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
            </div>
          </div>
          <div className="lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
              {!isAddress(toAddress) && (
                <>
                  <div className="bg-gray-500/10 dark:bg-white/5 p-3.5 rounded-full">
                    <WalletIcon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Enter the wallet address where the lock will be delegated
                  </div>
                </>
              )}

              {isAddress(toAddress) && (
                <>
                  <div className="bg-green-500/5 p-3.5 rounded-full text-green-500">
                    <CheckCircle2Icon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Address is valid. You can now delegate gouverannce.
                  </div>
                  <DelegateButton />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
