import dayjs from "dayjs";
import { Button } from "flowbite-react";
import { Wallet2 as Wallet2Icon, X as ChevronLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import GovnftChart from "../../../components/GovnftChart";
import GovnftHeader from "../../../components/GovnftHeader";
import NavLink from "../../../components/NavLink";
import { ZERO_ADDRESS } from "../../../constants";

export default function GovnftOverview({ govnft }) {
  const startDate = dayjs.unix(Number(govnft.start)).add(govnft.cliff_length, "seconds");
  const endDate = dayjs.unix(Number(govnft.end));

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <GovnftHeader govnft={govnft} active="overview" />

        <div className="lg:flex gap-6">
          <div className="mx-auto lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="text-2xl text-gray-700 dark:text-gray-300">GovNFT Name Unknown</div>
            <div className="flex gap-2 items-center text-xs text-gray-600 dark:text-gray-400 pt-3">
              <div className="text-gray-400 dark:text-gray-600">Owned by</div>
              <AddressMask address={govnft.address} />
            </div>

            <div className="text-sm pr-12 text-gray-600 dark:text-gray-400 mt-8 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...
            </div>
            <div className="text-xs">
              <NavLink
                href={`/delegate?id=${govnft.id}`}
                className="underline hover:no-underline text-gray-600 dark:text-gray-400"
              >
                Read more
              </NavLink>
            </div>

            <div className="space-y-1.5 mt-12 mb-8">
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="flex gap-3">
                  <div className="text-gray-600 dark:text-gray-400">Claimable</div>
                </div>
                <div className="flex gap-3">
                  <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={true} />
                  <ActionLink onClick="#">Claim</ActionLink>
                </div>
              </div>
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg mb-8">
                <div className="text-gray-600 dark:text-gray-400">Gouvernance Delegation</div>
                <div className="flex gap-2 items-center text-gray-400 dark:text-gray-600">
                  {govnft.delegated === ZERO_ADDRESS && "N/A"}
                  {govnft.delegated !== ZERO_ADDRESS && <AddressMask address={govnft.delegated} />}
                  <NavLink
                    href={`/delegate?id=${govnft.id}`}
                    className="underline hover:no-underline text-gray-600 dark:text-gray-400"
                  >
                    Edit
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 mb-8">
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-gray-600 dark:text-gray-400">Current Lock</div>
                <Amount tokenAddress={govnft.token} amount={govnft.amount} showLogo={true} />
              </div>
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-gray-600 dark:text-gray-400">Initial Lock</div>
                <Amount tokenAddress={govnft.token} amount={govnft.total_locked} showLogo={false} />
              </div>
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-gray-600 dark:text-gray-400">Total Claimed</div>
                <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={false} />
              </div>
            </div>

            <div className="h-64 mt-12">
              <GovnftChart
                startDate={dayjs()}
                vestingDuration={3}
                vestingInterval={"years"}
                cliffDuration={1}
                cliffInterval={"weeks"}
              />
            </div>
          </div>

          <div className="lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="text-xs uppercase text-gray-600 dark:text-gray-400 tracking-widest">Activity</div>
          </div>
        </div>
      </div>
    </>
  );
}
