import {
  Button,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import {
  Calendar as CalendarIcon,
  Info as InfoIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "lucide-react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Create() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="lg:max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <div className="lg:w-8/12 mb-4 lg:mb-0 bg-black/5 dark:bg-white/5 p-6 rounded-lg">
            {/* STEP 1 */}
            <div className="flex items-center bg-black/5 hover:bg-black/[.08] dark:bg-white/5 dark:hover:bg-white/[.08] cursor-pointer rounded px-5 py-4 mb-8">
              <div className="grow uppercase text-xs opacity-40">
                Nft Settings
              </div>
              <MinusIcon size={16} className="opacity-40" />
            </div>

            {/* STEP 1 CONTENT */}
            <div className="px-4 mb-8">
              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-20">Recipient Address</div>
                <TextInput placeholder="e.g. Velodrome Foundation" />
              </div>

              <div className="space-y-3 pb-6">
                <div className="flex">
                  <div className="text-xs opacity-20 grow">Vest</div>
                  <div className="text-xs opacity-20">
                    Available 214.57368 VELO
                  </div>
                </div>
                <TextInput addon={<>test</>} placeholder="WIP" />
              </div>

              {/* TODO: Use Datepicker from latest flowbite*/}
              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-20">Start Date</div>
                <TextInput
                  addon={<CalendarIcon size={16} />}
                  value="20/10/2023"
                />
              </div>

              <div className="flex gap-6">
                <div className="space-y-3 pb-6 grow">
                  <div className="text-xs opacity-20">Vesting Duration</div>
                  <div className="relative">
                    <TextInput value="1" />
                    <Select
                      sizing="sm"
                      className="absolute top-1.5 right-1.5 w-20"
                      color="gray"
                    >
                      <option>Mths</option>
                      <option>Years</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3 pb-6 grow">
                  <div className="text-xs opacity-20">Cliff Duration</div>
                  <div className="relative">
                    <TextInput value="0" />
                    <Select
                      sizing="sm"
                      className="absolute top-1.5 right-1.5 w-20"
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
                <div className="bg-white/[.02] rounded-lg flex items-center px-3.5 py-3">
                  <div className="text-xs opacity-20 grow">Transferable</div>
                  <ToggleSwitch
                    checked
                    label={<div className="opacity-40 text-xs">ON</div>}
                    color="green"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex items-center bg-black/5 hover:bg-black/[.08] dark:bg-white/5 dark:hover:bg-white/[.08] cursor-pointer rounded px-5 py-4 mb-8">
              <div className="grow uppercase text-xs opacity-40">
                Nft Info (Optional)
              </div>
              <PlusIcon size={16} />
            </div>

            {/* STEP 2 CONTENT */}
            <div className="px-4">
              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-20">Recipient Name</div>
                <TextInput placeholder="e.g. Velodrome Foundation" />
              </div>

              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-20">Tags</div>
                <TextInput placeholder="Search for exiting or create new tag ..." />
              </div>

              <div className="space-y-3 pb-6">
                <div className="text-xs opacity-20">Description</div>
                <Textarea rows={4} />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.08] dark:bg-white/[.08] bg-opacity-70 dark:bg-opacity-50 rounded-lg">
            <div className="space-y-6 pb-8">
              <div className="space-y-1.5">
                <div className="flex gap-2 items-center">
                  Unknown Recipient
                  <Tooltip content="No extra info">
                    <InfoIcon size={12} className="opacity-40" />
                  </Tooltip>
                </div>
                <div className="text-xs opacity-20">0x0951...d68Da</div>
              </div>
              <div>
                <img src="temp-graph-dark.png" />
              </div>
              <div className="space-y-1.5 border-t border-black/5 dark:border-white/5 pt-6">
                <div className="text-xs opacity-20">Amount</div>
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
