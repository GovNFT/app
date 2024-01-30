import { Shapes as ShapesIcon } from "lucide-react";
import AddressMask from "../../../components/AddressMask";
import Govnft from "./Govnft";

export default function Govnfts({ govnfts }) {
  if (!govnfts) {
    return (
      <div className="bg-gray-300/20 dark:bg-gray-700/10 rounded-xl text-sm px-4 py-32 space-y-8 text-center">
        <div className="mx-auto w-16 h-16 flex justify-center items-center bg-gray-200 dark:bg-white text-gray-900 rounded-3xl">
          <ShapesIcon />
        </div>
        <div className="w-64 mx-auto">No active GovNFTs are associated with the current address.</div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="pb-4 text-sm px-2 text-gray-300 dark:text-gray-700">Vesting GovNFTs </div>

      {govnfts.map((govnft) => (
        <Govnft govnft={govnft} />
      ))}
    </div>
  );
}
