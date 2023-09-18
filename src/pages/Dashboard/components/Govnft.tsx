import { Tooltip } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";

import NavLink from "../../../components/NavLink";

export default function Govnft({ withdraw }) {
  return (
    <div className="bg-black/[.025] hover:bg-black/[.035] dark:bg-white/5 dark:hover:bg-white/[.07] rounded text-sm p-5">
      <div className="flex gap-24 items-center">
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-24 grow">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-6 sm:items-center">
            <div className="order-first sm:order-last lg:order-first bg-white dark:bg-stone-600 shadow-sm rounded sm:w-32 h-12 sm:h-20 flex items-center justify-center text-xs font-bold">
              ID #30
            </div>
            <div className="space-y-1.5 w-52 sm:grow pl-2">
              <div className="flex gap-2 items-center">
                Unknown Recipient
                <Tooltip content="No extra info">
                  <InfoIcon size={12} className="opacity-40" />
                </Tooltip>
              </div>
              <div className="text-xs opacity-30 dark:opacity-20">
                0x0951...d68Da
              </div>
              <div className="text-xs opacity-40 flex gap-1.5">
                <NavLink
                  href="/delegate"
                  className="underline hover:no-underline"
                >
                  Delegate
                </NavLink>{" "}
                &middot;{" "}
                <NavLink
                  href="/transfer"
                  className="underline hover:no-underline"
                >
                  Transfer
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 md:flex-row md:gap-16 items-center grow px-2 border-t border-white/5 lg:border-none pt-5 lg:pt-0">
            <div className="space-y-1.5">
              <div className="text-xs opacity-30 dark:opacity-20">Amount</div>
              <div>42,300.00</div>
              <div className="text-xs opacity-40">Started a month ago</div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs opacity-30 dark:opacity-20">Vesting</div>
              <div>42,300.00</div>
              <div className="text-xs opacity-40">Ends in 2 years</div>
            </div>

            {withdraw && (
              <div className="space-y-1.5 lg:text-right grow">
                <div className="text-xs opacity-30 dark:opacity-20">
                  Withdrawable
                </div>
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
      </div>
    </div>
  );
}
