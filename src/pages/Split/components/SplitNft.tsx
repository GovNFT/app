import { TextInput, Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import { CheckCircle2 as CheckCircle2Icon, Info as InfoIcon, Wallet as WalletIcon } from "lucide-react";
import { useState } from "react";
import { isAddress } from "viem";
import GovnftHeader from "../../../components/GovnftHeader";
import NavLink from "../../../components/NavLink";

import Amount from "../../../components/Amount";
import SplitButton from "./SplitButton";

export default function SplitNft({ govnft }) {
  const [toAddress, setToAddress] = useState(null);

  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto">
        <GovnftHeader govnft={govnft} active="split" />

        <div className="lg:flex gap-6">
          <div className="w-7/12 mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="text-2xl text-gray-700 dark:text-gray-300">Split</div>
          </div>
          <div className="lg:w-5/12 bg-black/[.035] dark:bg-gray-700/10 p-2 md:px-10 md:py-8 rounded-lg">
            <div className="text-xs opacity-30">WIP</div>
          </div>
        </div>
      </div>
    </>
  );
}
