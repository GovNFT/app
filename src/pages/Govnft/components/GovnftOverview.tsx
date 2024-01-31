import dayjs from "dayjs";
import { Button } from "flowbite-react";
import { Wallet2 as Wallet2Icon, X as ChevronLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftNavbar from "../../../components/GovnftNavbar";
import GovnftProgress from "../../../components/GovnftProgress";
import GovnftStatus from "../../../components/GovnftStatus";
import NavLink from "../../../components/NavLink";
import { ZERO_ADDRESS } from "../../../constants";
import Chart from "../../Create/components/Chart";

export default function GovnftOverview({ govnft }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-auto bg-white shadow-lg dark:bg-white/5 p-2 md:p-4 rounded-lg mb-1 border border-gray-200 dark:border-gray-700/50">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center pl-4">
              <GovnftAvatar govnft={govnft} />
            </div>
            <div className="flex gap-6 items-center pr-1">
              <GovnftStatus govnft={govnft} />
              <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
            </div>
          </div>
        </div>

        <div className="mx-auto bg-white shadow-lg dark:bg-white/5 rounded-lg mb-5">
          <GovnftNavbar govnft={govnft} active="overview" />
        </div>

        <div className="lg:flex gap-6">
          <div className="mx-auto lg:w-8/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-8 md:py-6 rounded-lg">
            <div className="text-lg text-gray-700 dark:text-gray-300">Unknown Name</div>
            <div className="flex gap-2 items-center text-xs text-gray-600 dark:text-gray-400 pt-1 pb-4">
              <div className="text-gray-400 dark:text-gray-600">Owned by</div>
              <AddressMask address={govnft.address} />
            </div>

            <div className="text-sm pr-12 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </div>

            <div className="text-sm flex justify-between bg-gray-700/20 px-5 py-4 rounded-lg my-12">
              <div className="flex gap-3">
                <div className="text-gray-600 dark:text-gray-400">Claimable</div>
                <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={true} />
              </div>
              <ActionLink onClick="#">Claim</ActionLink>
            </div>

            <div className="text-xs flex justify-between">
              <div className="text-gray-600 dark:text-gray-400">Initial Locked</div>
              <Amount tokenAddress={govnft.token} amount={govnft.total_locked} showLogo={false} />
            </div>

            <div className="text-xs flex justify-between border-t border-gray-700/40 pt-3 mt-3">
              <div className="text-gray-600 dark:text-gray-400">Currently Locked</div>
              <Amount tokenAddress={govnft.token} amount={govnft.amount} showLogo={false} />
            </div>

            <div className="text-xs flex justify-between border-t border-gray-700/40 pt-3 mt-3">
              <div className="text-gray-600 dark:text-gray-400">Total Claimed</div>
              <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={false} />
            </div>
            <div className="text-xs flex justify-between border-t border-gray-700/40 pt-3 mt-3">
              <div className="text-gray-600 dark:text-gray-400">Delegate Address</div>
              {govnft.delegated === ZERO_ADDRESS && (
                <div className="flex gap-2">
                  <div className="text-gray-400 dark:text-gray-600">N/A</div>
                  <NavLink
                    href={`/delegate?id=${govnft.id}`}
                    className="underline hover:no-underline text-gray-600 dark:text-gray-400"
                  >
                    Edit
                  </NavLink>
                </div>
              )}
              {govnft.delegated !== ZERO_ADDRESS && <AddressMask address={govnft.delegated} />}
            </div>

            <div className="mt-20 sm:h-64">
              <Chart
                startDate={dayjs()}
                vestingDuration={3}
                vestingInterval={"years"}
                cliffDuration={1}
                cliffInterval={"weeks"}
              />
            </div>
          </div>

          <div className="lg:w-6/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:px-8 md:py-6 rounded-lg">
            <div className="text-xs uppercase text-gray-600 dark:text-gray-400 tracking-widest">Activity</div>
          </div>
        </div>
      </div>
    </>
  );
}
