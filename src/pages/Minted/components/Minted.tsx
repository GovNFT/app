import { ChevronRight as ChevronRightIcon, Shapes as ShapesIcon } from "lucide-react";
import AddressMask from "#/components/AddressMask";
import Amount from "#/components/Amount";
import NavLink from "#/components/NavLink";
import type { GovNft } from "#/hooks/types";

export default function Minted({
  nfts,
}: {
  nfts: GovNft[];
}) {
  if (!nfts.length) {
    return (
      <div className="bg-gray-300/20 dark:bg-gray-700/10 rounded-xl text-sm px-4 py-32 space-y-8 text-center">
        <div className="mx-auto w-16 h-16 flex justify-center items-center bg-gray-200 dark:bg-white text-gray-900 rounded-3xl">
          <ShapesIcon />
        </div>
        <div className="w-64 mx-auto">There are no minted GovNFTs associated with the current address.</div>
        <div className="w-36 mx-auto">
          <NavLink href="/create" size="sm" color="light" useButton={true}>
            Create GovNFT
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="pb-4 text-sm px-2 text-gray-600 dark:text-gray-400">Minted GovNFTs</div>

      {nfts.map((nft) => (
        <div
          key={String(nft.id)}
          className="flex justify-between bg-black/[.02] dark:bg-black/[.08] rounded-md text-xs px-5 py-4"
        >
          <div className="flex gap-12 items-center ">
            <div className="w-32">GovNFT ID #{Number(nft.id)}</div>
          </div>

          <div className="w-64 flex gap-3 justify-end text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">Locked</span>
            <div className="w-32 flex gap-1 text-gray-600 dark:text-gray-400">
              <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} />
            </div>
            <span className="text-gray-400 dark:text-gray-600">&rarr;</span>
            <AddressMask address={nft.owner} />
            <NavLink href={`/nft/${nft.id}`}>
              <div className="flex gap-2 pl-8">
                <span className="underline hover:no-underline">Review</span> <ChevronRightIcon size={14} />
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
