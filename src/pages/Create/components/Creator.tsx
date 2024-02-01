import dayjs from "dayjs";
import { Datepicker, Select, TextInput, Textarea, ToggleSwitch } from "flowbite-react";
import { useEffect, useState } from "react";
import { isAddress, parseUnits } from "viem";
import { useAccount } from "wagmi";

import AssetInput from "../../../components/AssetInput";
import { useTokens } from "../../../hooks/token";
import { Token } from "../../../hooks/types";
import Chart from "./Chart";
import Checklist from "./Checklist";
import Preview from "./Preview";

export default function Creator() {
  const [transferable, setTransferable] = useState(true);
  const [amount, setAmount] = useState(parseUnits("0", 18));
  const [preview, setPreview] = useState(false);
  const [toAddress, setToAddress] = useState(null);

  const today = dayjs();
  const [vestingDuration, setVestingDuration] = useState(1);
  const [cliffDuration, setCliffDuration] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [vestingInterval, setVestingInterval] = useState("years");
  const [cliffInterval, setCliffInterval] = useState("months");

  const [recipientName, setRecipientName] = useState("");
  const [tags, setTags] = useState(null);
  const [desc, setDesc] = useState("");
  const timeframe = ["years", "months", "weeks"];

  const { address: accountAddress } = useAccount();

  const { data: tokens } = useTokens(accountAddress);
  const [token, setToken] = useState<Token>(null);

  // Set default token if non selected
  useEffect(() => {
    // @ts-ignore
    setToken(tokens[0]);
  }, [tokens, tokens[0]]);

  useEffect(() => {
    // @ts-ignore
    if (isAddress(toAddress) && amount !== 0) {
      setPreview(true);
    } else {
      setPreview(false);
    }
  }, [toAddress, amount]);

  return (
    <>
      <div className="lg:w-8/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:p-6 rounded-lg">
        <div className="px-4 mb-8 mt-4">
          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Recipient Address</div>
            <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
          </div>

          <div className="space-y-3 pb-6">
            <AssetInput
              assets={tokens}
              asset={token}
              setAsset={setToken}
              amount={amount}
              setAmount={setAmount}
              validate={false}
              title="Vest"
            />
          </div>

          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Start Date</div>
            <Datepicker
              // @ts-ignore
              onSelect={(e) => setSelectedStartDate(dayjs(e.target.value))} // not working
            />
            {/*<TextInput
              onSelect={(e) => setSelectedStartDate(e.target.value)} // not working
              type="date"
            />*/}
          </div>

          <div className="md:flex gap-6">
            <div className="space-y-3 pb-6 grow">
              <div className="text-xs text-gray-600 dark:text-gray-400">Vesting Duration</div>
              <div className="relative">
                <TextInput
                  value={Number(vestingDuration)}
                  // @ts-ignore
                  onChange={(e) => setVestingDuration(e.target.value)}
                  type="number"
                  min="0"
                  step="1"
                />
                <Select
                  sizing="sm"
                  className="absolute top-0.5 right-0.5 sm:top-1.5 sm:right-1.5 w-24"
                  color="gray"
                  onChange={(e) => setVestingInterval(e.target.value)}
                  defaultValue={vestingInterval}
                >
                  {timeframe.map((time) => (
                    <option value={time} key={`vest-key-${time}`}>
                      {time}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-3 pb-6 grow">
              <div className="text-xs text-gray-600 dark:text-gray-400">Cliff Duration</div>
              <div className="relative">
                <TextInput
                  value={Number(cliffDuration)}
                  // @ts-ignore
                  onChange={(e) => setCliffDuration(e.target.value)}
                  type="number"
                  min="0"
                  step="1"
                />
                <Select
                  sizing="sm"
                  className="absolute top-0.5 right-0.5 sm:top-1.5 sm:right-1.5 w-24"
                  color="gray"
                  onChange={(e) => setCliffInterval(e.target.value)}
                  defaultValue={cliffInterval}
                >
                  {timeframe.map((time) => (
                    <option value={time} key={`cliff-key-${time}`}>
                      {time}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-3 pb-2 grow">
            <div className="bg-black/[.03] dark:bg-white/[.02] rounded-lg flex items-center px-3.5 py-3">
              <div className="text-xs text-gray-600 dark:text-gray-400 grow">Transferable</div>
              <ToggleSwitch
                // @ts-ignore
                color="green"
                label=""
                checked={transferable}
                onChange={() => setTransferable(!transferable ? true : false)}
              />
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-xs pt-4 pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="opacity-50">Optional Details</span>
          </div>
          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Recipient Name</div>
            <TextInput
              placeholder="e.g. Velodrome Foundation"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>

          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Tags</div>
            <TextInput
              placeholder="Search for exiting or create new tag ..."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Description</div>
            <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
        <Checklist toAddress={toAddress} amount={amount} vestingDuration={vestingDuration} />
        <Chart
          startDate={selectedStartDate}
          vestingDuration={vestingDuration}
          vestingInterval={vestingInterval}
          cliffDuration={cliffDuration}
          cliffInterval={cliffInterval}
        />

        {preview && (
          <Preview toAddress={toAddress} amount={amount} token={token} recipient={recipientName} desc={desc} />
        )}
      </div>
    </>
  );
}
