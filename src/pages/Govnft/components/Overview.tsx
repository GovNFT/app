import AddressMask from "#/components/AddressMask";
import Amount from "#/components/Amount";
import ClaimButton from "#/components/ClaimButton";
import ExplorerLink from "#/components/ExplorerLink";
import GovnftHeader from "#/components/GovnftHeader";
import NavLink from "#/components/NavLink";
import type { GovNft } from "#/hooks/types";

export default function Overview({
  nft,
}: {
  nft: GovNft;
}) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <GovnftHeader nft={nft} active="" />

        <div className="lg:flex gap-6">
          <div className="mx-auto lg:w-full mb-4 lg:mb-0 bg-white shadow-lg dark:bg-white/5 p-6 md:px-10 md:py-8 rounded-lg space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 dark:text-gray-600">GovNFT Address:</div>
                <ExplorerLink path={`address/${nft.address}`} className="text-xs text-gray-600 dark:text-gray-400">
                  <AddressMask address={nft.address} />
                </ExplorerLink>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 dark:text-gray-600">Token:</div>
                <ExplorerLink path={`address/${nft.token}`} className="text-xs text-gray-600 dark:text-gray-400">
                  <AddressMask address={nft.token} />
                </ExplorerLink>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 dark:text-gray-600">Owner:</div>
                <ExplorerLink path={`address/${nft.owner}`} className="text-xs text-gray-600 dark:text-gray-400">
                  <AddressMask address={nft.owner} />
                </ExplorerLink>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Current Lock</div>
              </div>
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Initial Lock</div>
              </div>
              <div className="w-full text-sm py-8 space-y-2 flex flex-col items-center justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                <div className="text-xl">
                  <Amount tokenAddress={nft.token} amount={nft.total_claimed} showLogo={false} />
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Claimed</div>
              </div>
            </div>

            <div className="space-y-1.5">
              {nft.isOwner && (
                <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg">
                  <div className="text-gray-600 dark:text-gray-400">Claimable</div>
                  <div className="flex gap-3">
                    <Amount tokenAddress={nft.token} amount={nft.claimable} showLogo={true} />
                    <ClaimButton nft={nft} />
                  </div>
                </div>
              )}
              <div className="text-sm flex justify-between bg-gray-50 dark:bg-gray-700/10 px-5 py-4 rounded-lg mb-8">
                <div className="text-gray-600 dark:text-gray-400">Delegation</div>
                <div className="flex gap-3 items-center">
                  {nft.isDelegated ? (
                    <div className="text-gray-300 dark:text-gray700">
                      <AddressMask address={nft.delegated} />
                    </div>
                  ) : (
                    <div className="text-gray-600 dark:text-gray-400">No delegation has been set.</div>
                  )}
                  {nft.isOwner && (
                    <NavLink
                      href={`/nft/${nft.id}/delegate`}
                      className="underline hover:no-underline text-gray-600 dark:text-gray-400"
                    >
                      Edit
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
