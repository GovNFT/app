import { Spinner, TextInput } from "flowbite-react";
import { isEmpty } from "lodash";
import { ChevronDown as ChevronDownIcon, Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

import type { Token } from "../hooks/types";
import AssetList from "./AssetList";
import Modal from "./Modal";
import TokenAvatar from "./TokenAvatar";

export default function AssetSelect({
  selectedAsset,
  assets,
  onSelect,
  className = "",
}: {
  selectedAsset: Token | null;
  assets: Token[];
  onSelect: (asset: Token | null) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredAssetOptions, setFilteredAssetOptions] = useState([]);

  useEffect(() => {
    let found = [];
    const toFind = (search || "").toLowerCase();

    if (!isEmpty(found)) {
      found = assets;
    } else {
      found = assets.filter((asset) => asset.address.includes(toFind) || asset.symbol.toLowerCase().includes(toFind));
    }

    setFilteredAssetOptions(found);
  }, [assets, search]);

  const onLocalSelect = (asset) => {
    setSearch("");
    setOpen(false);
    onSelect(asset);
  };

  const onClose = () => {
    setSearch("");
    setOpen(false);
  };

  if (!open) {
    return (
      <div
        className={`flex items-center justify-between cursor-pointer ${className}`}
        onClick={() => assets.length > 0 && setOpen(true)}
      >
        <div className="flex gap-3 items-center">
          <TokenAvatar address={selectedAsset?.address} className="w-5 h-5" />
          {selectedAsset?.symbol}
        </div>
        {assets.length > 0 && <ChevronDownIcon size={16} />}
      </div>
    );
  }

  return (
    <>
      <div className="text-center w-28">
        <Spinner color="gray" size="sm" />
      </div>

      <Modal open={open} onClose={() => onClose()}>
        <div className="px-1 pt-4">
          <div className="px-8">
            <TextInput
              key="search"
              placeholder="WETH, USDC, 0x..."
              icon={() => <SearchIcon size={16} />}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              autoFocus
            />
          </div>
          <AssetList assets={filteredAssetOptions} onSelect={onLocalSelect} search={search} />
        </div>
      </Modal>
    </>
  );
}
