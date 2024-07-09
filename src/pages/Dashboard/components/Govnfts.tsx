import { Shapes as ShapesIcon } from "lucide-react";
import NavLink from "#/components/NavLink";
import type { GovNft } from "#/hooks/types";
import Govnft from "./Govnft";

export default function Govnfts({
  nfts,
}: {
  nfts: GovNft[];
}) {
  if (nfts.length) {
    return (
      <div className="bg-gray-300/20 dark:bg-gray-700/10 rounded-xl text-sm px-4 py-32 space-y-8 text-center">
        <div className="mx-auto w-16 h-16 flex justify-center items-center bg-gray-200 dark:bg-white text-gray-900 rounded-3xl">
          <ShapesIcon />
        </div>
        <div className="md:w-96 mx-auto px-2">
          The dashboard currently shows no NFTs minted. You can create your first NFT to get started. Once minted, you
          can find all your NFTs under settings.
        </div>
        <div className="w-80 mx-auto flex gap-3 justify-center">
          <NavLink href="/create" size="sm" className="w-32" useButton={true}>
            Create
          </NavLink>
          <NavLink href="/minted" size="sm" className="w-32" color="light" useButton={true}>
            Minted NFTs
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="pb-4 text-sm px-2 text-gray-600 dark:text-gray-400">Vesting NFTs</div>
      <div className="space-y-2">
        {nfts.map((nft) => (
          <Govnft nft={nft} key={String(nft.id)} />
        ))}
      </div>
    </div>
  );
}
