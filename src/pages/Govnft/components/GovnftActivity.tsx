import { Pagination, Timeline, Tooltip } from "flowbite-react";
import {
  Forward as ForwardIcon,
  Plus as PlusIcon,
  Split as SplitIcon,
  Star as StarIcon,
  Wallet2 as Wallet2Icon,
} from "lucide-react";
import AddressMask from "../../../components/AddressMask";
import Amount from "../../../components/Amount";

export default function GovnftActivity() {
  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={() => <SplitIcon size={11} className="text-amber-500" />} />
          <Timeline.Content>
            <Timeline.Body>
              <div className="text-xs pt-1 space-y-3">
                <div className="flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Split
                  <div className="opacity-50">&middot;</div>
                  <div className="text-gray-400 dark:text-gray-600">3 months ago</div>
                </div>
                <div className="text-xs flex flex-wrap gap-2 items-center">
                  <div className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full">
                    4
                  </div>
                  <div className="text-gray-400 dark:text-gray-600">&rarr;</div>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={() => <ForwardIcon size={11} className="text-red-500" />} />
          <Timeline.Content>
            <Timeline.Body>
              <div className="text-xs pt-1 space-y-3">
                <div className="flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Transfer
                  <div className="opacity-50">&middot;</div>
                  <div className="text-gray-400 dark:text-gray-600">3 months ago</div>
                </div>
                <div className="text-xs flex flex-wrap gap-2 items-center">
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <div className="text-gray-400 dark:text-gray-600">&rarr;</div>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={() => <StarIcon size={11} className="text-green-500" />} />
          <Timeline.Content>
            <Timeline.Body>
              <div className="text-xs pt-1 space-y-3">
                <div className="flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Delegated
                  <div className="opacity-50">&middot;</div>
                  <div className="text-gray-400 dark:text-gray-600">3 months ago</div>
                </div>
                <div className="text-xs flex flex-wrap gap-2 items-center">
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <div className="text-gray-400 dark:text-gray-600">&rarr;</div>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={() => <Wallet2Icon size={11} className="text-green-500" />} />
          <Timeline.Content>
            <Timeline.Body>
              <div className="text-xs pt-1 space-y-3">
                <div className="flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Claimed
                  <div className="opacity-50">&middot;</div>
                  <div className="text-gray-400 dark:text-gray-600">3 months ago</div>
                </div>
                <div className="text-xs flex flex-wrap gap-2 items-center">
                  <Amount amount={0n} symbol="OP" showLogo={false} />
                  <div className="text-gray-400 dark:text-gray-600 text-xs">&rarr;</div>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={() => <PlusIcon size={11} className="text-red-500" />} />
          <Timeline.Content>
            <Timeline.Body>
              <div className="text-xs pt-1 space-y-3">
                <div className="flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Minted
                  <div className="opacity-50">&middot;</div>
                  <div className="text-gray-400 dark:text-gray-600">3 months ago</div>
                </div>
                <div className="text-xs flex flex-wrap gap-2 items-center">
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                  <div className="text-gray-400 dark:text-gray-600">&rarr;</div>
                  <Tooltip content="0x00000000000000000000">
                    <AddressMask
                      address="0x00000"
                      className="text-[10px] bg-gray-200 hover:bg-gray-300 dark:bg-gray-700/20 dark:hover:bg-gray-950/30 px-1.5 py-0.5 rounded-full"
                    />
                  </Tooltip>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Body>
              <div className="pt-1 text-xs">
                <div className="pb-3 flex gap-1 items-center text-gray-400 dark:text-gray-600">
                  Shwoing 5 of 100 total
                </div>
                <Pagination
                  layout="navigation"
                  currentPage={1}
                  totalPages={100}
                  onPageChange={() => ""}
                  showIcons={false}
                  className="text-xs"
                />
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
