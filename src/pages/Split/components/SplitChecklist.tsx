import { TextInput, Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import { CheckCircle as CheckCircleIcon, Circle as CircleIcon } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { isAddress, parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";

export default function SplitChecklist({ amount, toAddress }) {
  return (
    <div className="space-y-3 py-8">
      <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
        {!isAddress(toAddress) && (
          <>
            <CircleIcon size={16} />
            <div className="text-sm">Add recipient address</div>
          </>
        )}
        {isAddress(toAddress) && (
          <>
            <CheckCircleIcon size={16} />
            <div className="text-sm text-gray-400 dark:text-gray-600">Recipient address is valid</div>
          </>
        )}
      </div>
      <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
        {amount === 0 && (
          <>
            <CircleIcon size={16} />
            <div className="text-sm">Configure vesting amount</div>
          </>
        )}
        {amount !== 0 && (
          <>
            <CheckCircleIcon size={16} />
            <div className="text-sm text-gray-400 dark:text-gray-600">Vesting amount is valid</div>
          </>
        )}
      </div>
    </div>
  );
}
