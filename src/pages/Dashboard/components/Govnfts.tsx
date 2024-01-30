import AddressMask from "../../../components/AddressMask";
import Govnft from "./Govnft";
import { Shapes as ShapesIcon } from "lucide-react";

export default function Govnfts({ govnfts }) {

if(govnfts) {
  return (
    <div className="bg-black/[.02] dark:bg-black/[.08] rounded-xl text-sm px-4 py-32 space-y-8 text-center">
      
      <div className="mx-auto w-16 h-16 flex justify-center items-center bg-gray-200 dark:bg-white text-gray-900 rounded-3xl">
        <ShapesIcon />
      </div>
      <div className="w-64 mx-auto">
        No active GovNFTs are associated with the current address.
      </div>
    </div>
  );
}

  return (
    <div className="space-y-2.5">
      <div className="pb-3 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">GOVNFTS — OWNED</div>
      {govnfts.map((govnft) => (
        <Govnft govnft={govnft} />
      ))}
    </div>
  );
}
