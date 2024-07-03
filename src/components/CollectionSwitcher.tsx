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
          <div className="flex flex-col gap-2">
            <div className="text-xs">{collection.symbol}</div>
            <div className="text-gray-500 text-xs">{collection.name}</div>
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
    <div className="flex py-2 px-3 text-xs bg-gray-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-gray-700 dark:bg-opacity-20 dark:hover:bg-opacity-40 rounded-lg cursor-pointer">
      <div className="flex items-center gap-3 sm:pl-0.5 text-gray-600 dark:text-gray-400">
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
