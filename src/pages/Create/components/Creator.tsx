import dayjs from "dayjs";
import { Datepicker, Select, TextInput, Textarea } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { isAddress } from "viem";
import { useAccount } from "wagmi";

import Allowance from "#/components/Allowance";
import AssetInput from "#/components/AssetInput";
import GovnftChart from "#/components/GovnftChart";
import { INTERVALS } from "#/constants";
import { useCollection } from "#/hooks/collection";
import { useDuration } from "#/hooks/duration";
import { useTokens } from "#/hooks/token";
import type { Address, Interval, Token } from "#/hooks/types";
import Checklist from "./Checklist";
import CreateButton from "./CreateButton";

export default function Creator() {
  const [amount, setAmount] = useState(0n);
  const [toAddress, setToAddress] = useState("");
  const [allowed, setAllowed] = useState(false);

  const today = dayjs();
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [description, setDescription] = useState("");

  const [vestingDuration, setVestingDuration, vestingInterval, setVestingInterval, displayedVestingDuration] =
    useDuration("years");
  const [cliffDuration, setCliffDuration, cliffInterval, setCliffInterval, displayedCliffDuration] =
    useDuration("months");

  const collection = useCollection();
  const { address: accountAddress } = useAccount();

  const { data: tokens } = useTokens(accountAddress);
  const [token, setToken] = useState<Token>(null);

  // Set default token if non selected
  useEffect(() => {
    // @ts-ignore
    setToken(tokens[0]);
  }, [tokens, tokens[0]]);

  const handleStartDate = useCallback(
    (date: Date) => {
      const selectedTime = dayjs(date);
      if (selectedTime.isBefore(today)) {
        setSelectedStartDate(today);
      } else {
        setSelectedStartDate(selectedTime);
      }
    },
    [today],
  );

  return (
    <>
      <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 md:p-10 rounded-lg space-y-12">
        <div>
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Recipient Info</span>
          </div>
          <div className="space-y-3">
            <div className="text-xs flex justify-between items-center">
              <div className="text-xs text-gray-600 dark:text-gray-400">Recipient Address</div>
              <div
                className="text-gray-600 dark:text-gray-400 underline hover:no-underline cursor-pointer"
                onClick={() => setToAddress(accountAddress)}
              >
                Use Current Wallet
              </div>
            </div>
            <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
            <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Vesting duration</span>
          </div>
          <div className="space-y-3">
            <AssetInput
              assets={tokens}
              asset={token}
              setAsset={setToken}
              amount={amount}
              setAmount={setAmount}
              title="Vest"
            />
          </div>

          <div className="space-y-3">
            <div className="text-xs text-gray-600 dark:text-gray-400">Start Date</div>
            <Datepicker onSelectedDateChanged={handleStartDate} />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-3 grow">
              <div className="text-xs text-gray-600 dark:text-gray-400">Vesting Duration</div>
              <div className="flex gap-2 items-center">
                <TextInput
                  value={displayedVestingDuration}
                  onChange={(e) => setVestingDuration(e.target.value)}
                  // @ts-ignore
                  onClick={(e) => e.target.select()}
                  type="number"
                  min="0"
                  step="1"
                  className="grow"
                  sizing="md"
                />
                <Select
                  onChange={(e) => setVestingInterval(e.target.value as Interval)}
                  defaultValue={vestingInterval}
                  sizing="md"
                  className="w-36"
                >
                  {INTERVALS.map((time) => (
                    <option value={time} key={`vest-key-${time}`}>
                      {time}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-3 grow">
              <div className="text-xs text-gray-600 dark:text-gray-400">Cliff Duration</div>
              <div className="flex gap-2 items-center">
                <TextInput
                  value={displayedCliffDuration}
                  onChange={(e) => setCliffDuration(e.target.value)}
                  // @ts-ignore
                  onClick={(e) => e.target.select()}
                  type="number"
                  min="0"
                  step="1"
                  className="grow"
                  sizing="md"
                />
                <Select
                  onChange={(e) => setCliffInterval(e.target.value as Interval)}
                  defaultValue={cliffInterval}
                  sizing="md"
                  className="w-36"
                >
                  {INTERVALS.map((time) => (
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

          <div className="space-y-3">
            <div className="text-xs text-gray-600 dark:text-gray-400">Description</div>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
          </div>
        </div>
      </div>

      <div className="p-10 lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
        <div className="text-2xl text-gray-700 dark:text-gray-300">Create GovNFT</div>

        <div className="space-y-8">
          <div className="text-sm pr-16 pt-4 text-gray-600 dark:text-gray-400">
            Mint an NFT with locked tokens under specified parameters. Tokens will be claimable as they vest.
          </div>

          <Checklist
            toAddress={toAddress as Address}
            amount={amount}
            vestingDuration={vestingDuration}
            token={token}
            description={description}
          />
        </div>

        {isAddress(toAddress) && amount && Number(vestingDuration) !== 0 && (
          <>
            <Allowance
              token={token}
              amount={amount}
              forAddress={collection?.address}
              setAllowed={setAllowed}
              ctaTexts={["Approved", "Approve Tokens"]}
            />

            {allowed && (
              <CreateButton
                token={token.address}
                recipient={toAddress}
                amount={amount}
                start={BigInt(selectedStartDate.unix())}
                end={BigInt(selectedStartDate.unix() + vestingDuration)}
                cliff={BigInt(cliffDuration)}
                description={description}
              />
            )}

            {vestingDuration !== 0 && (
              <GovnftChart
                startDate={selectedStartDate}
                vestingDuration={vestingDuration}
                cliffDuration={cliffDuration}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
