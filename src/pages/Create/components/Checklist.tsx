import {
  Calendar as CalendarIcon,
  CheckCircle2 as CheckCircle2Icon,
  Coins as CoinsIcon,
  Settings2 as Settings2Icon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { isAddress } from "viem";

import type { Address, Token } from "#/hooks/types";

export default function Checklist({
  toAddress,
  amount,
  token,
  vestingDuration,
  description,
}: {
  toAddress: Address;
  amount: bigint;
  token: Token;
  vestingDuration: number;
  description: string;
}) {
  const [validAmount, setValidAmount] = useState(false);

  useEffect(() => {
    setValidAmount(amount && amount !== 0n && amount <= token?.value);
  }, [amount, token?.value]);

  return (
    <>
      <div className="space-y-3 text-sm pb-3">
        {!isAddress(toAddress) && (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <WalletIcon size={14} />
            </div>
            Add recipient address
          </div>
        )}

        {isAddress(toAddress) && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Recipient address is valid
          </div>
        )}

        {!validAmount && (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CoinsIcon size={14} />
            </div>
            Configure vesting amount
          </div>
        )}

        {validAmount && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vesting amount is valid
          </div>
        )}

        {Number(vestingDuration) === 0 && (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 bg-gray-200 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CalendarIcon size={14} />
            </div>
            Adjust vesting duration
          </div>
        )}

        {Number(vestingDuration) !== 0 && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Vesting duration is valid
          </div>
        )}

        {!description && (
          <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 bg-gray-200 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <Settings2Icon size={14} />
            </div>
            Add additional info (optional)
          </div>
        )}

        {description && (
          <div className="flex gap-2 items-center text-green-500">
            <div className="bg-gray-200/80 dark:bg-gray-900/80 w-7 h-7 flex items-center justify-center mr-2 rounded-full">
              <CheckCircle2Icon size={14} />
            </div>
            Additional information added
          </div>
        )}
      </div>
    </>
  );
}
