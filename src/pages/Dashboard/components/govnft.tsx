import { Tooltip } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";

import NavLink from "../../../components/NavLink";

export default function Govnft({ withdraw }) {
  return (
    <div className="bg-black/5 hover:bg-black/[.07] dark:bg-white/5 dark:hover:bg-white/[.07] rounded text-sm p-5">
      <div className="flex gap-24 items-center">
        <div className="flex gap-24 grow">
          <div className="flex gap-8 items-center">
            <div className="bg-black/10 dark:bg-white/5 rounded w-32 h-20 flex items-center justify-center text-xs opacity-40 font-bold">
              ID #30
            </div>
            <div className="space-y-1.5">
              <div className="flex gap-2 items-center">
                Unknown Recipient
                <Tooltip content="No extra info">
                  <InfoIcon size={12} className="opacity-40" />
                </Tooltip>
              </div>
              <div className="text-xs opacity-20">0x0951...d68Da</div>
              <div className="text-xs opacity-40 flex gap-1.5">
                <NavLink href="/delegate" className="underline hover:no-underline">
                  Delegate
                </NavLink>{" "}
                &middot;{" "}
                <NavLink href="/transfer" className="underline hover:no-underline">
                  Transfer
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex gap-16 items-center">
            <div className="space-y-1.5">
              <div className="text-xs opacity-20">Amount</div>
              <div>42,300.00</div>
              <div className="text-xs opacity-40">Started a month ago</div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs opacity-20">Vesting</div>
              <div>42,300.00</div>
              <div className="text-xs opacity-40">Ends in 2 years</div>
            </div>
          </div>
        </div>

        {withdraw && (
          <div className="space-y-1.5 text-right pr-2">
            <div className="text-xs opacity-20">Withdrawable</div>
            <div>100.00</div>
            <NavLink
              href="#"
              className="block text-primary text-xs underline hover:no-underline"
            >
              Withdraw
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
