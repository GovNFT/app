import AddressMask from "../../../components/AddressMask";
import Activity from "./Activity";
import Govnft from "./Govnft";

export default function Govnfts({ govnfts, address }) {
  const ownedGovNfts = govnfts.filter((gn) => gn.owner.toLowerCase() === address.toLowerCase());
  const createdGovNfts = govnfts.filter((gn) => gn.minter.toLowerCase() === address.toLowerCase());

  return (
    <>
      <div className="space-y-2.5">
        <div className="pb-3 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">GOVNFTS — OWNED</div>
        {ownedGovNfts.map((govnft) => (
          <Govnft govnft={govnft} address={address} />
        ))}
      </div>

      <div className="space-y-1.5 pt-12">
        <div className="pb-3 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">GOVNFTS — CREATED</div>
        {createdGovNfts.map((govnft) => (
          <Activity govnft={govnft} />
        ))}
      </div>
    </>
  );
}
