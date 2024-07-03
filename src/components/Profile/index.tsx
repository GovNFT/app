import { Button } from "flowbite-react";
import {
  ArrowRight as ArrowRightIcon,
  ExternalLink as ExternalLinkIcon,
  Settings as SettingsIcon,
  Wallet as WalletIcon,
} from "lucide-react";
import { useState } from "react";
import { useAccount, useBalance, useDisconnect, useSwitchChain } from "wagmi";

import { DEFAULT_CHAIN } from "#/constants";
import AddressMask from "../AddressMask";
import Modal from "../Modal";
import NavLink from "../NavLink";
import CustomRpc from "./CustomRpc";

export default function Profile({ children }) {
  const { switchChain } = useSwitchChain();
  const { chain, address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address: address });

  const invalidChain = chain?.id !== DEFAULT_CHAIN.id;
  const explorer = chain?.blockExplorers?.default;
  const url = `${explorer?.url}/address/${address}`;

  const [showDisconnect, setShowDisconnect] = useState(false);

  if (isConnected) {
    return (
      <>
        <Modal open={showDisconnect} onClose={() => setShowDisconnect(false)}>
          <div className="text-sm text-gray-600 dark:text-gray-400  space-y-4 sm:space-y-6 px-4 sm:px-8 pb-4 sm:pb-8">
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-700 dark:border-opacity-30 pb-6">
                <div className="flex gap-4 items-center">
                  <div className="hidden sm:inline bg-gray-100 dark:bg-gray-700 p-4 rounded-full text-gray-600 dark:text-gray-400">
                    <WalletIcon size={16} />
                  </div>
                  <div className="space-y-1 text-gray-500 pl-4 sm:pl-0">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono w-48 sm:w-full">
                      <div className="truncate ...">{address}</div>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-500 hover:dark:text-gray-300"
                      >
                        <ExternalLinkIcon size={12} />
                      </a>
                    </div>
                    <div className="text-xs">
                      Balance: &nbsp;
                      <span className="font-mono">{Number.parseFloat(balance?.formatted || "0").toFixed(5)}</span>{" "}
                      {balance?.symbol}
                    </div>
                  </div>
                </div>
              </div>

              {invalidChain && (
                <Button onClick={() => switchChain({ chainId: DEFAULT_CHAIN.id })} className="w-full">
                  Switch to {DEFAULT_CHAIN.name} to continue
                </Button>
              )}
            </div>

            <CustomRpc />

            <NavLink href="/minted" size="sm">
              <div className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/20 hover:dark:bg-gray-900/40  p-4 mt-4 rounded-lg">
                <div className="text-xs flex justify-between items-center gap-8 text-gray-700 dark:text-gray-300">
                  Review Minted GovNFTs
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </NavLink>

            <Button onClick={() => disconnect()} className="w-full" color="light">
              Disconnect
            </Button>
          </div>
        </Modal>

        <div className="flex gap-2">
          {children}

          <div
            className="flex py-2 px-3 text-xs bg-gray-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-gray-700 dark:bg-opacity-20 dark:hover:bg-opacity-40 rounded-lg cursor-pointer"
            onClick={() => setShowDisconnect(true)}
          >
            <div className="flex items-center gap-3 sm:pl-0.5 text-gray-600 dark:text-gray-400">
              <span className="hidden sm:inline">
                <AddressMask address={address} />
              </span>
              <SettingsIcon size={12} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <NavLink href="/connect" size="sm" useButton={true}>
      Connect
    </NavLink>
  );
}
