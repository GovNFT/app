import dayjs from "dayjs";
import { Button } from "flowbite-react";
import { Info as InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import GovnftAvatar from "../../../components/GovnftAvatar";
import GovnftNavbar from "../../../components/GovnftNavbar";
import GovnftProgress from "../../../components/GovnftProgress";
import NavLink from "../../../components/NavLink";

export default function GovnftOverview({ govnft }) {
  const startDate = dayjs(govnft.start);
  const cliffDate = dayjs(govnft.start).add(govnft.cliff_length, "seconds");
  const endDate = dayjs(govnft.end);

  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <div className="mx-auto lg:w-8/12 mb-4 lg:mb-0 bg-white shadow-xl dark:bg-white/5 p-2 md:p-6 rounded-lg">
            <div className="flex gap-4 items-center pb-8">
              <GovnftProgress amount={govnft.amount} totalAmount={govnft.total_locked} />
              <GovnftAvatar govnft={govnft} />
            </div>

            <GovnftNavbar govnft={govnft} active="overview" />

            <div className="space-y-4 py-12 px-2 text-gray-600 dark:text-gray-400">
              <div className="text-lg">GovNFT Title Desc</div>
              <div className="text-sm pr-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
            <div className="px-2 pb-3">
              <div className="text-sm flex justify-between bg-gray-700/20 px-5 py-4 rounded-lg mb-12">
                <div className="flex gap-3">
                  <div className="text-gray-600 dark:text-gray-400">Claimable:</div>
                  <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={true} />
                </div>
                <ActionLink onClick="#">Claim</ActionLink>
              </div>
              <div className="text-xs flex justify-between">
                <div className="text-gray-600 dark:text-gray-400">Initial Locked</div>
                <div>
                  <Amount tokenAddress={govnft.token} amount={govnft.total_locked} showLogo={false} />
                </div>
              </div>
              <div className="text-xs flex justify-between border-t border-gray-700/40 pt-3 mt-3">
                <div className="text-gray-600 dark:text-gray-400">Currently Locked</div>
                <div>
                  <Amount tokenAddress={govnft.token} amount={govnft.amount} showLogo={false} />
                </div>
              </div>
              <div className="text-xs flex justify-between border-t border-gray-700/40 pt-3 mt-3 mb-12">
                <div className="text-gray-600 dark:text-gray-400">Total Claimed</div>
                <div>
                  <Amount tokenAddress={govnft.token} amount={govnft.total_claimed} showLogo={false} />
                </div>
              </div>
              <div className="h-64 bg-gray-700/10 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-600 text-xs">
                GRAPH
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.035]  dark:bg-white/[.08] bg-opacity-70 dark:bg-opacity-50 rounded-lg">
            &nbsp;
          </div>
        </div>
      </div>
    </>
  );
}
