import type { GovNft } from "#/hooks/types";
import DateFromNow from "./DateFromNow";

export default function GovnftStatus({
  nft,
}: {
  nft: GovNft;
}) {
  if (!nft) {
    return <></>;
  }

  if (!nft.vestingStarted) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md space-y-1.5">
        <div className="flex gap-2.5 items-center">
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
          <div className="text-amber-600">Scheduled</div>
        </div>
        <div className="text-xs text-gray-500">
          <DateFromNow ts={nft.start} prefix="vesting starts in" pastPrefix="vesting started" tooltip={false} />
        </div>
      </div>
    );
  }

  if (nft.vestingStarted && nft.vestedPct !== 100) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md space-y-1.5">
        <div className="flex gap-2.5 items-center">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <div className="text-green-500">Vesting</div>
        </div>
        <div className="text-xs text-gray-500">
          <DateFromNow ts={nft.end} prefix="vesting ends" pastPrefix="vesting ended" tooltip={false} />
        </div>
      </div>
    );
  }

  if (nft.vestingStarted && nft.vestedPct === 100) {
    return (
      <div className="flex flex-col justify-center items-end rounded-md space-y-1.5">
        <div className="flex gap-2.5 items-center">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" />
          <div className="text-gray-500">Vested</div>
        </div>
        <div className="text-xs text-gray-500">
          <DateFromNow ts={nft.end} prefix="vesting ends" pastPrefix="vesting ended" tooltip={false} />
        </div>
      </div>
    );
  }
}
