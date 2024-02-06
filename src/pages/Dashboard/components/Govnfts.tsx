import { Shapes as ShapesIcon } from "lucide-react";
import AddressMask from "../../../components/AddressMask";
import NavLink from "../../../components/NavLink";
import Govnft from "./Govnft";
import { GovNft } from "../../../hooks/types";

export default function Govnfts({ 
  govnfts 
}: {
  govnfts: GovNft[],
}) {
  if (!govnfts) {
    return (
      <div className="bg-gray-300/20 dark:bg-gray-700/10 rounded-xl text-sm px-4 py-32 space-y-8 text-center">
        <div className="mx-auto w-16 h-16 flex justify-center items-center bg-gray-200 dark:bg-white text-gray-900 rounded-3xl">
          <ShapesIcon />
        </div>
        <div className="w-64 mx-auto">No NFTs were found.</div>
        <div className="w-96 mx-auto flex gap-3 justify-center border-t border-gray-700/30 pt-8">
          <NavLink href="/create" size="sm" className="w-40" color="light" useButton={true}>
            Create NFTs
          </NavLink>
          <NavLink href="/minted" size="sm" className="w-48" color="light" useButton={true}>
            View Created NFTs
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="pb-4 text-sm px-2 text-gray-300 dark:text-gray-700">Vesting NFTs</div>
      <div className="space-y-3">
        {govnfts.map((govnft) => (
          <Govnft govnft={govnft} />
        ))}
      </div>
    </div>
  );
}
