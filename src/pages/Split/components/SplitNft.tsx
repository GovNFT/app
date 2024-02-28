import { TextInput, Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import {
  ExternalLink as ExternalLinkIcon,
  Info as InfoIcon,
  TrendingUp as TrendingUpIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { isAddress, parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useLocation } from "wouter";

import Amount from "../../../components/Amount";
import AssetInput from "../../../components/AssetInput";
import DateFormat from "../../../components/DateFormat";
import GovnftHeader from "../../../components/GovnftHeader";
import NavLink from "../../../components/NavLink";
import TokenAvatar from "../../../components/TokenAvatar";
import { useTokens } from "../../../hooks/token";
import SplitButton from "./SplitButton";
import SplitChecklist from "./SplitChecklist";
import SplitTimer from "./SplitTimer";
import SplitingNft from "./SplitingNft";

export default function SplitNft({ nft }) {
  const [timer, setTimer] = useState(false);
  const [toAddress, setToAddress] = useState(null);
  const [amount, setAmount] = useState(0);
  const { address: accountAddress } = useAccount();
  const { data: tokens } = useTokens(accountAddress);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="split" />

        <div className="lg:flex gap-6">
          <div className="w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="flex justify-between items-start bg-gray-100 dark:bg-gray-700/20 rounded-lg px-6 py-5 mb-12 mt-4">
              <SplitingNft nft={nft} />

              <div className="flex flex-col gap-2 justify-center items-end">
                <div className="text-gray-400 dark:text-gray-600 text-xs">Vesting Timeframe</div>
                <div>
                  {/* @ts-ignore */}
                  <DateFormat date={nft.start} /> : <DateFormat date={nft.end} />
                </div>
                <div className="flex items-center gap-2">
                  {nft.cliff !== 0 && (
                    <div className="text-xs text-amber-600 flex gap-2 items-center">
                      <TrendingUpIcon size={12} />
                      Starts with a Cliff
                    </div>
                  )}
                </div>
              </div>
            </div>

            {!timer && (
              <>
                <div className="space-y-3 pb-12">
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Recipient Address</div>
                  <TextInput placeholder="0x" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                </div>

                <div className="space-y-3 pb-6">
                  <div className="text-gray-600 dark:text-gray-400 text-xs">Vesting Amount</div>
                  <TextInput
                    placeholder="0"
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    addon={<TokenAvatar address={nft.token} className="w-5 h-5" />}
                  />
                </div>
              </>
            )}

            {timer && (
              <div className="space-y-3">
                <div className="uppercase text-xs pb-3 mb-3 text-gray-400 dark:text-gray-600 border-b border-gray-700/20">
                  Split Preview
                </div>
                <div className="text-xs space-y-2 bg-gray-100 dark:bg-gray-700/20 p-4 rounded-lg">
                  <div className="text-gray-400 dark:text-gray-600">Recipient Address</div>
                  <div className="">{toAddress}</div>
                </div>
                <div className="text-xs space-y-2 bg-gray-100 dark:bg-gray-700/20 p-4 rounded-lg">
                  <div className="text-gray-400 dark:text-gray-600">Vesting Amount</div>
                  <div className="">
                    <Amount tokenAddress={nft.token} amount={parseUnits(amount.toString(), 18)} showLogo={true} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="space-y-3">
              <div className="text-lg">Split GovNFT</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 pr-20">
                You can split a GovNFT vesting time an period. Spliting will generate a new GovNFT with it’s own vesting
                timeline.
              </div>
            </div>

            <SplitChecklist amount={amount} toAddress={toAddress} />

            {amount !== 0 && isAddress(toAddress) && <SplitTimer timer={timer} setTimer={setTimer} />}
          </div>
        </div>
      </div>
    </>
  );
}
