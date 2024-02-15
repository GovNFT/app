import dayjs from "dayjs";
import { Datepicker, Select, TextInput, Textarea, ToggleSwitch } from "flowbite-react";
import { useEffect, useState } from "react";
import { isAddress, parseUnits } from "viem";
import { useAccount } from "wagmi";

import AssetInput from "../../../components/AssetInput";
import GovnftChart from "../../../components/GovnftChart";
import { useTokens } from "../../../hooks/token";
import { Token } from "../../../hooks/types";
import Checklist from "./Checklist";
import CreatorPreview from "./CreatorPreview";

export default function Creator() {
  const [splitable, setSplitable] = useState(false);
  const [amount, setAmount] = useState(parseUnits("0", 18));
  const [preview, setPreview] = useState(false);
  const [toAddress, setToAddress] = useState(null);

  const today = dayjs();
  const [vestingDuration, setVestingDuration] = useState(0);
  const [cliffDuration, setCliffDuration] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [vestingInterval, setVestingInterval] = useState("years");
  const [cliffInterval, setCliffInterval] = useState("months");

  const [recipientName, setRecipientName] = useState("");
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
    if (isAddress(toAddress) && amount && Number(vestingDuration) !== 0 && recipientName) {
      setPreview(true);
    } else {
      setPreview(false);
    }
  }, [toAddress, amount, vestingDuration, recipientName]);

  return (
    <>
      <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 md:px-10 md:py-8 rounded-lg">
        <div className="pb-6">
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Recipient Info</span>
          </div>
          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Recipient Address</div>
            <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
          </div>
        </div>

        <div className="pb-6">
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="otext-gray-400 dark:text-gray-600 uppercase tracking-widest">Vesting duration</span>
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
              // TODO: Flowbite datepicker is not working, we need to replace it
              // @ts-ignore
              onSelect={(e) => setSelectedStartDate(dayjs(e.target.value))}
            />
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
        </div>

        <div>
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Additional Info</span>
          </div>
          <div className="space-y-3 pb-6">
            <div className="mb-6 bg-black/[.03] dark:bg-white/[.02] rounded-lg flex items-center px-5 py-4">
              <div className="text-xs text-gray-600 dark:text-gray-400 grow">Allow Split</div>
              <ToggleSwitch
                // @ts-ignore
                color="green"
                label=""
                checked={splitable}
                onChange={() => setSplitable(!splitable ? true : false)}
              />
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Name</div>
            <TextInput
              placeholder="e.g. Velodrome Foundation"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>

          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Description (Optional)</div>
            <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="p-8 lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
        <div className="text-xl text-gray-700 dark:text-gray-300 pb-4">Create GovNFT</div>

        {!preview && (
          <div className="space-y-8">
            <div className="text-sm pr-12 text-gray-600 dark:text-gray-400">
              NFTs are unique digital assets that are typically used to represent ownership or proof of authenticity for
              digital or physical items. Here's a basic outline of the process:
            </div>
            <Checklist
              toAddress={toAddress}
              amount={amount}
              vestingDuration={vestingDuration}
              recipient={recipientName}
            />
          </div>
        )}

        {preview && (
          <>
            <GovnftChart
              startDate={selectedStartDate}
              vestingDuration={vestingDuration}
              vestingInterval={vestingInterval}
              cliffDuration={cliffDuration}
              cliffInterval={cliffInterval}
            />

            <CreatorPreview toAddress={toAddress} amount={amount} token={token} recipient={recipientName} desc={desc} />
          </>
        )}
      </div>
    </>
  );
}
