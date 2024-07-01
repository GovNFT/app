import { Spinner } from "flowbite-react";
import { isEmpty } from "lodash";
import { AlertCircle as AlertCircleleIcon } from "lucide-react";
import { isAddress } from "viem";

import type { Token } from "#/hooks/types";
import Amount from "./Amount";
import TokenAvatar from "./TokenAvatar";

export default function AssetsList({
  assets,
  onSelect,
  search = null,
}: {
  assets: Token[];
  onSelect: (asset: Token | null) => void;
  search?: string;
}) {
  if (isAddress(search) && isEmpty(assets)) {
    return (
      <div className="flex p-8 items-center text-sm gap-2 text-gray-500 dark:text-gray-400">
        <Spinner color="gray" size="sm" />
        Looking up on chain address...
      </div>
    );
  }

  if (assets.length < 1) {
    return (
      <div className="flex p-8 items-center text-sm gap-2 text-gray-500 dark:text-gray-400">
        <AlertCircleleIcon size={16} />
        Nothing matches your search.
      </div>
    );
  }

  return (
    <div>
      <div className="mt-8 pb-2 px-4 mx-4 flex justify-between text-xs border-b border-black/5 dark:border-white/5">
        <span className="text-gray-400 dark:text-gray-600">{assets.length} Tokens</span>
        <span className="text-gray-400 dark:text-gray-600">Balance</span>
      </div>

      <div className="h-[calc(100vh-300px)] overflow-auto overflow-x-hidden pb-4 pt-2">
        <div className="mx-4">
          {assets.map((asset) => (
            <div
              className="py-4 cursor-pointer rounded-lg border border-transparent hover:bg-black/[.03] hover:dark:bg-white/[.02]"
              key={`asset-slect-item-${asset.address}`}
              onClick={() => onSelect?.(asset)}
            >
              <div className="flex justify-between items-center gap-8 px-4">
                <div className="flex items-center gap-5">
                  <TokenAvatar address={asset.address} />
                  <div className="text-sm">{asset.symbol}</div>
                </div>

                <div className="w-1/2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-end">
                    <Amount
                      tokenAddress={asset.address}
                      decimals={asset.decimals}
                      amount={asset.value}
                      showLogo={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
