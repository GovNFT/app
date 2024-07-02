import { Check as CheckIcon, ChevronDown as ChevronDownIcon } from "lucide-react";

import { useCallback } from "react";

import { SearchList } from "#/components/SearchList";
import { useCollection, useCollections } from "#/hooks/collection";
import { useSearchParams } from "#/hooks/searchParams";
import type { Collection } from "#/hooks/types";

const SearchCollection = SearchList<Collection>;

export const CollectionSwitcher = () => {
  const [, setSearchParams] = useSearchParams();
  const { data: collections = [] } = useCollections();
  const selectedCollection = useCollection();

  //renders each search item
  const handleItemRender = useCallback(
    (collection: Collection) => {
      return (
        <div className="flex justify-between items-center gap-8 px-4">
          <div className="flex flex-col">
            <div className={"flex"}>
              <div className="text-xs">{collection.symbol}</div>
            </div>
            <div className={"flex"}>
              <div className="text-gray-500 text-xs">{collection.name}</div>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            {selectedCollection?.address === collection.address && <CheckIcon size={20} />}
          </div>
        </div>
      );
    },
    [selectedCollection],
  );

  const onFilter = useCallback((collection: Collection, search: string) => {
    return (
      collection.name.toLowerCase().includes(search.toLowerCase()) ||
      collection.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, []);

  //button that opens the search modal
  const buttonElem = (
    <div className="h-10 bg-gray-900 bg-opacity-5 dark:bg-gray-800 dark:bg-opacity-0 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-900/80 px-2 rounded-xl flex items-center justify-center cursor-pointer">
      <div className="flex justify-between items-center gap-6 uppercase text-gray-600 dark:text-gray-400 tracking-widest text-[11px] px-2">
        {selectedCollection?.symbol} <ChevronDownIcon size={14} />
      </div>
    </div>
  );

  return (
    <SearchCollection
      openElem={buttonElem}
      selected={selectedCollection}
      options={collections}
      onSelect={(collection) => setSearchParams({ collection: collection.address })}
      onFilter={onFilter}
      handleItemRender={handleItemRender}
    />
  );
};
