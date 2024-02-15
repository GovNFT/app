import {
  Calendar as CalendarIcon,
  CheckCircle2 as CheckCircle2Icon,
  Coins as CoinsIcon,
  Pencil as PencilIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { isAddress } from "viem";

export default function Checklist({ toAddress, amount, vestingDuration, recipient }) {
  return (
    <>
      <div className="space-y-6 text-sm">
        {!isAddress(toAddress) && (
          <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <WalletIcon size={14} />
            </div>
            Add recipient address
          </div>
        )}

        {isAddress(toAddress) && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Recipient address is valid
          </div>
        )}

        {!amount && (
          <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CoinsIcon size={14} />
            </div>
            Configure vesting amount
          </div>
        )}

        {amount && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vesting amount is valid
          </div>
        )}

        {Number(vestingDuration) === 0 && (
          <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CalendarIcon size={14} />
            </div>
            Adjust vestind duration
          </div>
        )}

        {Number(vestingDuration) !== 0 && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vestind duration is valid
          </div>
        )}

        {!recipient && (
          <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <PencilIcon size={14} />
            </div>
            Review additional information
          </div>
        )}

        {recipient && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-black/5 dark:bg-white/5 w-8 h-8 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Additional information is valid
          </div>
        )}
      </div>
    </>
  );
}
