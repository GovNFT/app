import { TextInput } from "flowbite-react";
import { AlertCircle as AlertCircleleIcon, Search as SearchIcon } from "lucide-react";
import { type ReactElement, cloneElement } from "react";
import { type ReactNode, useMemo, useState } from "react";

import Modal from "./Modal";

export function SearchList<T extends { name: string }>({
  openElem, //the elem that is clicked to open the modal
  options, //options that are searched/filtered
  onSelect,
  onFilter,
  handleItemRender, //returns the item elem to render in the list
  placeHolder = "Search...",
  columnNames, //optional column names to place above the list
}: {
  openElem: ReactElement;
  selected: T | undefined;
  options: T[];
  onSelect: (option: T) => void;
  onFilter: (option: T, search: string) => boolean;
  handleItemRender: (option: T) => ReactNode;
  columnNames?: [string, string];
  placeHolder?: string;
  className?: string;
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const shownOptions = useMemo(() => {
    return search ? options.filter((option) => onFilter(option, search)) : options;
  }, [search, options, onFilter]);

  return (
    <>
      {cloneElement(openElem, { onClick: () => setOpen(true) })}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="px-1 pt-4">
          <div className="px-8">
            <TextInput
              key="search"
              placeholder={placeHolder}
              icon={() => <SearchIcon size={16} />}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              autoFocus
            />
          </div>
          {shownOptions.length === 0 && (
            <div className="flex p-8 items-center text-sm gap-2 text-gray-500 dark:text-gray-400">
              <AlertCircleleIcon size={16} />
              Nothing matches your search.
            </div>
          )}
          {shownOptions.length > 0 && (
            <div>
              {columnNames && (
                <div className="mt-8 pb-2 px-4 mx-4 flex justify-between text-xs border-b border-black/5 dark:border-white/5">
                  <span className="text-gray-400 dark:text-gray-600">
                    {shownOptions.length} {columnNames[0]}
                  </span>
                  <span className="text-gray-400 dark:text-gray-600">{columnNames[1]}</span>
                </div>
              )}

              <div
                className={`h-[calc(100vh-300px)] overflow-auto overflow-x-hidden pb-4 pt-2 space-y-2 ${columnNames ? "" : "mt-4"}`}
              >
                <div className="space-y-3 mx-8">
                  {shownOptions.map((option) => (
                    <div
                      className="py-4 cursor-pointer rounded-lg border border-transparent bg-gray-300/10 hover:bg-gray-300/20 dark:bg-gray-950/10 hover:dark:bg-gray-950/30"
                      key={`option-select-item-${option.name}`}
                      onClick={() => onSelect(option)}
                    >
                      {handleItemRender(option)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
