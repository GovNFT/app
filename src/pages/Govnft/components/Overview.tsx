import dayjs from "dayjs";
import { Button } from "flowbite-react";
import { Wallet2 as Wallet2Icon, X as ChevronLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

import ActionLink from "../../../components/ActionLink";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";
import ClaimButton from "../../../components/ClaimButton";
import GovnftHeader from "../../../components/GovnftHeader";
import NavLink from "../../../components/NavLink";
import { GovNft } from "../../../hooks/types";

export default function Overview({
  nft,
}: {
  nft: GovNft;
}) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="" />

        <div className="lg:flex gap-6">
          <div className="mx-auto lg:w-full mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-10 md:py-8 rounded-lg space-y-8">
            <div className="flex gap-2 items-center text-xs">
              <div className="text-gray-400 dark:text-gray-600">Owned by</div>
              <div className="text-gray-600 dark:text-gray-400">
                <AddressMask address={nft.owner} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} symbol="OP" />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Current Lock</div>
              </div>
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Initial Lock</div>
              </div>
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.total_claimed} showLogo={false} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Claimed</div>
              </div>
            </div>

            <div className="space-y-1.5">
              {nft.isOwner && (
                <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                  <div className="text-gray-600 dark:text-gray-400">Claimable</div>
                  <div className="flex gap-3">
                    <Amount tokenAddress={nft.token} amount={nft.claimable} showLogo={true} />
                    <ClaimButton id={nft.id} amount={nft.claimable} />
                  </div>
                </div>
              )}
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg mb-8">
                <div className="text-gray-600 dark:text-gray-400">Delegation</div>
                <div className="flex gap-2 items-center text-gray-400 dark:text-gray-600">
                  {nft.isDelegated ? <AddressMask address={nft.delegated} /> : "N/A"}
                  {nft.isOwner && (
                    <NavLink
                      href={`/delegate?id=${nft.id}`}
                      className="underline hover:no-underline text-gray-600 dark:text-gray-400"
                    >
                      Edit
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
