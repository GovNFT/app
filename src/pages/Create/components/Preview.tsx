import { Tooltip } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";
import { isAddress } from 'viem'

import Amount from "../../../components/Amount";
import CreateButton from "./CreateButton";

export default function Preview({toAddress, token, amount}) {
  return (
    <>
      <div className="space-y-6 pb-8">
        <div className="space-y-1.5">
          <div className="flex gap-2 items-center text-sm pb-1">
            Unknown Recipient
            <Tooltip content="No extra info">
              <InfoIcon size={12} className="opacity-40" />
            </Tooltip>
          </div>
          <div className="text-xs">
            {isAddress(toAddress) &&
              <span className="opacity-30 dark:opacity-20">{toAddress}</span> 
            }
          </div>
        </div>
        <div className="space-y-1.5 border-t border-black/5 dark:border-white/5 pt-6">
          <div className="text-xs opacity-30 dark:opacity-20">Amount</div>
          <div className="text-sm">
            <Amount
              tokenAddress={token.address}
              decimals={token.decimals}
              amount={amount}
              symbol={token.symbol}
              showLogo={true}
            />
          </div>
          <div className="text-xs opacity-40 pt-1">
            Starts in a month &rarr; Ends in 3 years
          </div>
        </div>
      </div>

      <CreateButton />
    </>
  );
}
