import dayjs from "dayjs";
import { Datepicker, Select, TextInput, Textarea } from "flowbite-react";
import { useCallback, useMemo, useState } from "react";
import { isAddress } from "viem";
import { useAccount, useBalance } from "wagmi";

import AssetInput from "#/components/AssetInput";
import GovnftChart from "#/components/GovnftChart";
import GovnftHeader from "#/components/GovnftHeader";
import { INTERVALS, LEEWAY_MINS } from "#/constants";
import { useDuration } from "#/hooks/duration";
import type { Address, GovNft, Interval } from "#/hooks/types";
import Checklist from "#/pages/Create/components/Checklist";

import SplitButton from "./SplitButton";
import Stats from "./Stats";

export default function Splitter({ nft }: { nft: GovNft }) {
  const [amount, setAmount] = useState(0n);
  const [toAddress, setToAddress] = useState("");

  // Leave some time to sign the transaction...
  const today = dayjs().add(LEEWAY_MINS, "minute");
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [description, setDescription] = useState("");

  const [vestingDuration, setVestingDuration, vestingInterval, setVestingInterval, displayedVestingDuration] =
    useDuration("days", Number(nft.end) - Number(nft.start));
  const [cliffDuration, setCliffDuration, cliffInterval, setCliffInterval, displayedCliffDuration] = useDuration(
    "days",
    Math.max(0, Number(nft.start) - today.unix() + Number(nft.cliff_length)),
  );

  const { address: accountAddress } = useAccount();
  const { data: onChainToken } = useBalance({
    token: nft.token,
    address: nft.vault,
  });

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

  // Map the balance to the vesting amount
  const token = useMemo(() => {
    if (!onChainToken) return;

    return { ...onChainToken, value: nft.amount, address: nft.token };
  }, [onChainToken, nft.amount, nft.token]);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="split" />

        <div className="lg:flex gap-6">
          <div className="lg:w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 md:p-10 rounded-lg space-y-8">
            <Stats nft={nft} />

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

            <div className="space-y-6">
              <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
                <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Vesting duration</span>
              </div>
              <div className="space-y-3">
                <AssetInput
                  assets={[]}
                  asset={token}
                  setAsset={() => {}}
                  amount={amount}
                  setAmount={setAmount}
                  title="To Split"
                />
              </div>

              <div className="space-y-3">
                <div className="text-xs text-gray-600 dark:text-gray-400">Start Date</div>
                <Datepicker
                  minDate={today.toDate()}
                  defaultDate={today.toDate()}
                  onSelectedDateChanged={handleStartDate}
                />
              </div>

              <div className="md:flex gap-6">
                <div className="space-y-3 grow">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Vesting Duration</div>
                  <div className="relative">
                    <TextInput
                      // Ceil to avoid weird rounded numbers...
                      value={Math.ceil(displayedVestingDuration)}
                      onChange={(e) => setVestingDuration(e.target.value)}
                      // @ts-ignore
                      onClick={(e) => e.target.select()}
                      type="number"
                      min="0"
                      step="1"
                    />
                    <Select
                      sizing="sm"
                      className="absolute top-0.5 right-0.5 sm:top-1.5 sm:right-1.5 w-24"
                      color="gray"
                      onChange={(e) => setVestingInterval(e.target.value as Interval)}
                      defaultValue={vestingInterval}
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
                  <div className="relative">
                    <TextInput
                      // Ceil to avoid weird rounded numbers...
                      value={Math.ceil(displayedCliffDuration)}
                      onChange={(e) => setCliffDuration(e.target.value)}
                      // @ts-ignore
                      onClick={(e) => e.target.select()}
                      type="number"
                      min="0"
                      step="1"
                    />
                    <Select
                      sizing="sm"
                      className="absolute top-0.5 right-0.5 sm:top-1.5 sm:right-1.5 w-24"
                      color="gray"
                      onChange={(e) => setCliffInterval(e.target.value as Interval)}
                      defaultValue={cliffInterval}
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

            <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
              <span className="text-gray-400 dark:text-gray-600 uppercase tracking-widest">Additional Info</span>
            </div>

            <div className="space-y-3 pb-6">
              <div className="text-xs text-gray-600 dark:text-gray-400">Description</div>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>

          <div className="p-8 lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 rounded-lg">
            <div className="text-xl text-gray-700 dark:text-gray-300">Splitting</div>

            <div className="space-y-8">
              <div className="text-sm pr-16 pt-4 text-gray-600 dark:text-gray-400">
                Divide your locked amount while inheriting the vesting and cliff parameters.
              </div>
              <Checklist
                toAddress={toAddress as Address}
                amount={amount}
                vestingDuration={vestingDuration}
                token={token}
                description={description}
              />
            </div>

            {vestingDuration !== 0 && (
              <GovnftChart
                startDate={selectedStartDate}
                vestingDuration={vestingDuration}
                cliffDuration={cliffDuration}
              />
            )}

            {isAddress(toAddress) && amount !== 0n && (
              <SplitButton
                nft={nft}
                recipient={toAddress}
                amount={amount}
                start={BigInt(selectedStartDate.unix())}
                end={BigInt(selectedStartDate.unix() + vestingDuration)}
                cliff={BigInt(cliffDuration)}
                description={description}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
