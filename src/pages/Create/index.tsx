import {
  Button,
  Datepicker,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import {
  Info as InfoIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "lucide-react";
import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Create() {
  const [transferable, setTransferable] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="lg:max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <div className="lg:w-8/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 rounded-lg">
            <div className="px-4 mb-8 mt-4">
              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-30 dark:opacity-20">
                  Recipient Address
                </div>
                <TextInput placeholder="e.g. 0x00" />
              </div>

              <div className="space-y-3 pb-6">
                <div className="flex">
                  <div className="text-xs opacity-30 dark:opacity-20 grow">
                    Vest
                  </div>
                  <div className="text-xs opacity-30 dark:opacity-20">
                    Available 214.57368 VELO
                  </div>
                </div>
                <TextInput addon={<>test</>} placeholder="WIP" />
              </div>

              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-30 dark:opacity-20">
                  Start Date
                </div>
                <Datepicker minDate={new Date("2023-09-17T22:00:00.000Z")} />
              </div>

              <div className="flex gap-6">
                <div className="space-y-3 pb-6 grow">
                  <div className="text-xs opacity-30 dark:opacity-20">
                    Vesting Duration
                  </div>
                  <div className="relative">
                    <TextInput value="1" />
                    <Select
                      sizing="sm"
                      className="absolute top-1.5 right-1.5 w-24"
                      color="gray"
                    >
                      <option>Mths</option>
                      <option>Years</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3 pb-6 grow">
                  <div className="text-xs opacity-30 dark:opacity-20">
                    Cliff Duration
                  </div>
                  <div className="relative">
                    <TextInput value="0" />
                    <Select
                      sizing="sm"
                      className="absolute top-1.5 right-1.5 w-24"
                      color="gray"
                    >
                      <option>Days</option>
                      <option>Mths</option>
                      <option>Years</option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pb-6 grow">
                <div className="bg-black/[.03] dark:bg-white/[.02] rounded-lg flex items-center px-3.5 py-3">
                  <div className="text-xs opacity-30 dark:opacity-20 grow">
                    Transferable
                  </div>
                  <ToggleSwitch
                    // @ts-ignore
                    color="green"
                    label=""
                    checked={transferable}
                    onChange={() =>
                      setTransferable(!transferable ? true : false)
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className="flex items-center bg-black/5 hover:bg-black/[.08] dark:bg-white/5 dark:hover:bg-white/[.08] cursor-pointer rounded px-5 py-4 mb-1"
              onClick={() =>
                showInfo ? setShowInfo(false) : setShowInfo(true)
              }
            >
              <div className="grow uppercase text-xs opacity-40">
                Optional: Add Nft Info
              </div>
              {!showInfo ? <PlusIcon size={16} /> : <MinusIcon size={16} />}
            </div>

            {showInfo && (
              <div className="px-4 pt-6">
                <div className="space-y-3 pb-6">
                  <div className="text-xs opacity-30 dark:opacity-20">
                    Recipient Name
                  </div>
                  <TextInput placeholder="e.g. Velodrome Foundation" />
                </div>

                <div className="space-y-3 pb-6">
                  <div className="text-xs opacity-30 dark:opacity-20">Tags</div>
                  <TextInput placeholder="Search for exiting or create new tag ..." />
                </div>

                <div className="space-y-3 pb-6">
                  <div className="text-xs opacity-30 dark:opacity-20">
                    Description
                  </div>
                  <Textarea rows={4} />
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.035] dark:bg-white/[.08] bg-opacity-70 dark:bg-opacity-50 rounded-lg">
            <div className="space-y-6 pb-8">
              <div className="space-y-1.5">
                <div className="flex gap-2 items-center">
                  Unknown Recipient
                  <Tooltip content="No extra info">
                    <InfoIcon size={12} className="opacity-40" />
                  </Tooltip>
                </div>
                <div className="text-xs opacity-30 dark:opacity-20">
                  0x0951...d68Da
                </div>
              </div>
              <div>
                <div className="block dark:hidden opacity-20">Graph soon</div>
                <div className="hidden dark:block">
                  <img src="temp-graph-dark.png" />
                </div>
              </div>
              <div className="space-y-1.5 border-t border-black/5 dark:border-white/5 pt-6">
                <div className="text-xs opacity-30 dark:opacity-20">Amount</div>
                <div>42,300.00</div>
                <div className="text-xs opacity-40">
                  Starts in a month, ends in 3 years
                </div>
              </div>
            </div>

            <Button className="w-full">Create</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
