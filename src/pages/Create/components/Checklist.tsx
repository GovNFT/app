import { isAddress } from 'viem'
import { CheckCircle2 as CheckCircle2Icon, Wallet as WalletIcon, Coins as CoinsIcon } from "lucide-react";

export default function Checklist({toAddress, amount}) {
  return (
    <>
      <div className="space-y-4 text-sm">
        <div className="text-xs pb-3 mb-6 border-b border-black/5 dark:border-white/5">
          <span className="opacity-40 dark:opacity-20">Create a GovNFT</span>
        </div>
        {!isAddress(toAddress) 
          ?
            <div className="flex gap-2 items-center text-amber-700">
              <div className="bg-amber-700/20 w-8 h-8 flex items-center justify-center mr-2 rounded">
                <WalletIcon size={14} />
              </div>
              Add a recipient address
            </div> 
          : 
            <div className="flex gap-2 items-center text-green-500">
              <div className="bg-green-500/20 w-8 h-8 flex items-center justify-center mr-2 rounded">
                <CheckCircle2Icon size={14} />
              </div>
              Add a recipient address
            </div>
        }

        {!amount || amount == 0
          ?
            <div className="flex gap-2 items-center text-amber-700">
              <div className="text-xs bg-black/5 dark:bg-amber-700/20 w-8 h-8 flex items-center justify-center mr-2 rounded">
                <CoinsIcon size={14} />
              </div>
              Add vested amount
            </div> 
          : 
            <div className="flex gap-2 items-center text-green-500">
              <div className="text-xs bg-black/5 dark:bg-green-500/20 w-8 h-8 flex items-center justify-center mr-2 rounded"><CheckCircle2Icon size={14} /></div>
              Add vested amount
            </div>
        }
      </div>
    </>
  );
}
