import {
  CheckCircle2 as CheckCircle2Icon,
  Coins as CoinsIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { isAddress } from "viem";

export default function Checklist({ toAddress, amount, vestingDuration }) {
  return (
    <>
      <div className="space-y-4 text-sm">
        <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
          <span className="text-gray-600 dark:text-gray-400">
            Create a GovNFT
          </span>
        </div>
        {!isAddress(toAddress) ? (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded">
              <WalletIcon size={14} />
            </div>
            Add a recipient address
          </div>
        ) : (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded">
              <CheckCircle2Icon size={14} />
            </div>
            Recipient address is valid
          </div>
        )}

        {!amount || amount == 0 || !vestingDuration || vestingDuration == 0 ? (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded">
              <CoinsIcon size={14} />
            </div>
            Add vesting amount and duration
          </div>
        ) : (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded">
              <CheckCircle2Icon size={14} />
            </div>
            Vesting details are valid
          </div>
        )}
      </div>
    </>
  );
}
