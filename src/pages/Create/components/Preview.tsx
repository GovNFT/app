import { Tooltip } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";

import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import CreateButton from "./CreateButton";

export default function Preview({ toAddress, token, amount, recipient, desc }) {
  return (
    <>
      <div className="space-y-6 pb-8">
        <div className="space-y-1.5">
          <div className="flex flex-wrap gap-3 items-center text-xl pb-4">
            <span className="">
              {recipient ? recipient : "Unknown Recipient"}
            </span>
            <Tooltip content={desc ? desc : "No optional details"}>
              <InfoIcon size={12} className="opacity-40" />
            </Tooltip>
          </div>

          <div className="divide-y divide-white/5">
            <div className="flex justify-between items-center text-xs py-3">
              <div className="opacity-30 dark:opacity-20">
                Recipient Address
              </div>
              <div className="opacity-60">
                <AddressMask address={toAddress} />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs py-3">
              <div className="opacity-30 dark:opacity-20">Amount</div>
              <div>
                <Amount
                  tokenAddress={token.address}
                  decimals={token.decimals}
                  amount={amount}
                  symbol={token.symbol}
                  showLogo={true}
                />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs py-3">
              <div className="opacity-30 dark:opacity-20">Starts</div>
              <div className="opacity-60">in one month</div>
            </div>
            <div className="flex justify-between items-center text-xs pt-3">
              <div className="opacity-30 dark:opacity-20">Ends</div>
              <div className="opacity-60">in 3 months</div>
            </div>
          </div>
        </div>
      </div>

      <CreateButton />
    </>
  );
}
