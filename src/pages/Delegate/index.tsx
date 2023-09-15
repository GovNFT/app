import { Button, TextInput, Tooltip } from "flowbite-react";
import { Info as InfoIcon, Wallet as WalletIcon } from "lucide-react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Create() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="lg:max-w-screen-lg mx-auto">
        <div className="lg:flex gap-6">
          <div className="lg:w-8/12 mb-4 lg:mb-0 bg-black/5 dark:bg-white/5 p-6 sm:p-12 rounded-lg">
            <div className="text-xs opacity-20">Delegate GOVNFT</div>

            <div className="flex items-center py-6 my-6 border-y border-black/5 dark:border-white/5">
              <div className="space-y-1.5 grow">
                <div className="flex gap-2 items-center">
                  Unknown Recipient
                  <Tooltip content="No extra info">
                    <InfoIcon size={12} className="opacity-40" />
                  </Tooltip>
                </div>
                <div className="text-xs opacity-20">0x0951...d68Da</div>
              </div>
              <div className="bg-black/10 dark:bg-white/5 rounded px-8 h-12 flex items-center justify-center text-xs opacity-40 font-bold">
                ID #30
              </div>
            </div>

            <div className="flex gap-16 items-center pb-6 mb-6 border-b border-black/5 dark:border-white/5">
              <div className="space-y-1.5">
                <div className="text-xs opacity-20">Amount</div>
                <div>42,300.00</div>
                <div className="text-xs opacity-40">Started a month ago</div>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs opacity-20">Vesting</div>
                <div>42,300.00</div>
                <div className="text-xs opacity-40">Ends in 2 years</div>
              </div>
            </div>

            <div className="space-y-3 pb-2">
              <div className="text-xs opacity-20">Address</div>
              <TextInput placeholder="e.g. 0x00" />
            </div>
          </div>
          <div className="lg:w-6/12 p-6 sm:p-10 bg-black/[.08] dark:bg-white/[.08] bg-opacity-70 dark:bg-opacity-50 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
              <div className="bg-white/5 p-3 rounded-full">
                <WalletIcon size={16} />
              </div>
              <div className="text-xs opacity-40 w-48 text-center">
                Enter the wallet address where the lock will be delegated
              </div>
              <Button className="px-6">Deletage</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
