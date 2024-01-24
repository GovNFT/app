import { TextInput, Tooltip } from "flowbite-react";
import {
  CheckCircle2 as CheckCircle2Icon,
  Info as InfoIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useState } from "react";
import { isAddress } from "viem";

import Amount from "../../../components/Amount";
import DelegateButton from "./DelegateButton";

export default function DelegateNft() {
  const [toAddress, setToAddress] = useState(null);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <div className="lg:w-8/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 sm:p-12 rounded-lg">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Delegate GOVNFT
            </div>

            <div className="flex items-center py-6 my-6 border-y border-black/5 dark:border-white/5">
              <div className="space-y-1.5 grow">
                <div className="flex gap-2 items-center">
                  Unknown Recipient
                  <Tooltip content="No extra info">
                    <InfoIcon
                      size={12}
                      className="text-gray-600 dark:text-gray-400"
                    />
                  </Tooltip>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-600">
                  0x0951...d68Da
                </div>
              </div>
              <div className="bg-white dark:bg-stone-600 shadow-md rounded px-8 h-12 flex items-center justify-center text-xs font-bold">
                ID #30
              </div>
            </div>

            <div className="flex gap-16 items-center pb-6 mb-6 border-b border-black/5 dark:border-white/5">
              <div className="space-y-1.5">
                <div className="text-xs text-gray-400 dark:text-gray-600">
                  Amount
                </div>
                <div className="text-sm">
                  <Amount
                    tokenAddress={"0x4200000000000000000000000000000000000042"}
                    decimals={18}
                    amount={0n}
                    symbol="OP"
                    showLogo={true}
                  />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 pt-1">
                  Started a month ago
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs text-gray-400 dark:text-gray-600">
                  Vesting
                </div>
                <div className="text-sm">
                  <Amount
                    tokenAddress={"0x4200000000000000000000000000000000000042"}
                    decimals={18}
                    amount={0n}
                    symbol="OP"
                    showLogo={false}
                  />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 pt-1">
                  Ends in 2 years
                </div>
              </div>
            </div>

            <div className="space-y-3 pb-2">
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Address
              </div>
              <TextInput
                placeholder="0x"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.035]  dark:bg-white/[.08] bg-opacity-70 dark:bg-opacity-50 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
              {!isAddress(toAddress) && (
                <>
                  <div className="bg-gray-500/10 dark:bg-white/5 p-3.5 rounded-full">
                    <WalletIcon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Enter the wallet address where the lock will be delegated
                  </div>
                </>
              )}

              {isAddress(toAddress) && (
                <>
                  <div className="bg-green-500/5 p-3.5 rounded-full text-green-500">
                    <CheckCircle2Icon size={20} strokeWidth={1} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 w-52 text-center pb-3">
                    Wallet address is valid. You can now delegate the GovNFT.
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