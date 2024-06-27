import {
  Calendar as CalendarIcon,
  CheckCircle2 as CheckCircle2Icon,
  Coins as CoinsIcon,
  Settings2 as Settings2Icon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { isAddress } from "viem";
import { formatUnits } from "viem";

export default function Checklist({ toAddress, amount, token, vestingDuration, description }) {
  const [validAmount, setValidAmount] = useState(false);
  const parsedAmount = formatUnits(amount || 0n, token?.decimals);

  useEffect(() => {
    if (amount && amount !== 0 && parsedAmount <= token?.formatted) {
      setValidAmount(true);
    } else {
      setValidAmount(false);
    }
  }, [amount, parsedAmount, token?.formatted]);

  return (
    <>
      <div className="space-y-4 text-sm pb-4">
        {!isAddress(toAddress) && (
          <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <WalletIcon size={14} />
            </div>
            Add recipient address
          </div>
        )}

        {isAddress(toAddress) && (
          <div className="flex gap-3 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Recipient address is valid
          </div>
        )}

        {!validAmount && (
          <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CoinsIcon size={14} />
            </div>
            Configure vesting amount
          </div>
        )}

        {validAmount && (
          <div className="flex gap-3 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vesting amount is valid
          </div>
        )}

        {Number(vestingDuration) === 0 && (
          <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 bg-gray-200 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CalendarIcon size={14} />
            </div>
            Adjust vestind duration
          </div>
        )}

        {Number(vestingDuration) !== 0 && (
          <div className="flex gap-3 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vestind duration is valid
          </div>
        )}

        {!description && (
          <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 bg-gray-200 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <Settings2Icon size={14} />
            </div>
            Review additional information
          </div>
        )}

        {description && (
          <div className="flex gap-3 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Additional information reviewed
          </div>
        )}
      </div>
    </>
  );
}
