import dayjs from "dayjs";
import { Datepicker, Select, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";

import AssetInput from "../../../components/AssetInput";
import FlowAllowance from "../../../components/FlowAllowance";
import GovnftChart from "../../../components/GovnftChart";
import { GOVNFT_ADDRESS } from "../../../constants";
import { useTokens } from "../../../hooks/token";
import { Token } from "../../../hooks/types";
import Checklist from "./Checklist";
import CreateButton from "./CreateButton";
import CreatorPreview from "./CreatorPreview";

export default function Creator() {
  const [amount, setAmount] = useState(0n);
  const [toAddress, setToAddress] = useState(null);
  const [allowed, setAllowed] = useState(false);

  const today = dayjs();
  const [vestingDuration, setVestingDuration] = useState(0);
  const [cliffDuration, setCliffDuration] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [vestingInterval, setVestingInterval] = useState("years");
  const [cliffInterval, setCliffInterval] = useState("months");

  const timeframe = ["years", "months", "weeks"];

  const { address: accountAddress } = useAccount();

  const { data: tokens } = useTokens(accountAddress);
  const [token, setToken] = useState<Token>(null);

  // Set default token if non selected
  useEffect(() => {
    // @ts-ignore
    setToken(tokens[0]);
  }, [tokens, tokens[0]]);

  return (
    <>
      <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 md:p-10 rounded-lg">
        <div className="pb-6">
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Recipient Info</span>
          </div>
          <div className="space-y-3 pb-6">
            <div className="text-xs text-gray-600 dark:text-gray-400">Recipient Address</div>
            <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
          </div>
        </div>

        <div>
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
            <div className="space-y-3 grow">
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

            <div className="space-y-3 grow">
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
      </div>

      <div className="p-8 lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
        <div className="text-xl text-gray-700 dark:text-gray-300">Create GovNFT</div>

        <div className="space-y-8">
          <div className="text-sm pr-16 pt-4 text-gray-600 dark:text-gray-400">
            NFTs are unique digital assets that are used to represent ownership or proof of authenticity for digital or
            physical items.
          </div>
          <Checklist toAddress={toAddress} amount={amount} vestingDuration={vestingDuration} token={token} />
        </div>

        {isAddress(toAddress) && amount && Number(vestingDuration) !== 0 && (
          <>
            <GovnftChart
              startDate={selectedStartDate}
              vestingDuration={vestingDuration}
              vestingInterval={vestingInterval}
              cliffDuration={cliffDuration}
              cliffInterval={cliffInterval}
            />

            <FlowAllowance token={token.address} amount={amount} forAddress={GOVNFT_ADDRESS} setAllowed={setAllowed} />

            {allowed && (
              <CreateButton
                token={token.address}
                recipient={toAddress}
                amount={amount}
                start={BigInt(selectedStartDate.unix() + 1000)} //TODO: fix start date so not in past
                end={BigInt(selectedStartDate.unix() + 1000000)} //TODO: use VestingDuration to calculate duration in seconds
                cliff={BigInt(cliffDuration)}
                description={desc}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
