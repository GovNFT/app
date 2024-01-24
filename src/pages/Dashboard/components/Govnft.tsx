import { Tooltip } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";

import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import NavLink from "../../../components/NavLink";

export default function Govnft({ withdraw }) {
  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/5 dark:hover:bg-white/[.07] rounded text-sm p-5 shadow-sm">
      <div className="flex gap-24 items-center">
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-24 grow">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-6 sm:items-center">
            <div className="order-first sm:order-last lg:order-first bg-gray-100 dark:bg-stone-600 shadow-sm rounded sm:w-32 h-12 sm:h-20 flex items-center justify-center text-xs font-bold">
              ID #30
            </div>
            <div className="space-y-1.5 w-52 sm:grow pl-2">
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
                <AddressMask
                  address={"0x09516bBBc08B8AC950A6ee22B443ca9C55Cd68Da"}
                />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5 pt-1">
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
          <div className="flex flex-wrap gap-8 md:flex-row md:gap-20 items-center grow px-2 border-t border-white/5 lg:border-none pt-5 lg:pt-0">
            <div className="space-y-1.5">
              <div className="text-xs text-gray-400 dark:text-gray-600">
                Amount
              </div>
              <div>
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
              <div>
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

            {withdraw && (
              <div className="space-y-1.5 text-right grow">
                <div className="text-xs text-gray-400 dark:text-gray-600">
                  Withdrawable
                </div>
                <div className="flex justify-end">
                  <Amount
                    tokenAddress={"0x4200000000000000000000000000000000000042"}
                    decimals={18}
                    amount={0n}
                    symbol="OP"
                    showLogo={false}
                  />
                </div>
                <div className="flex justify-end text-xs pt-1">
                  <ActionLink disabled={false} onClick="#">
                    Withdraw
                  </ActionLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
