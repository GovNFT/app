import AddressMask from "#/components/AddressMask";
import Amount from "#/components/Amount";

export default function CreatorPreview({ toAddress, token, amount }) {
  return (
    <>
      <div className="space-y-6 pb-8">
        <div className="space-y-1.5">
          <div className="divide-y divide-black/5 dark:divide-white/5">
            <div className="flex justify-between items-center text-xs py-3">
              <div className="text-gray-400 dark:text-gray-600">Recipient Address</div>
              <div className="opacity-60">
                <AddressMask address={toAddress} />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs py-3">
              <div className="text-gray-400 dark:text-gray-600">Amount</div>
              <div>
                <Amount tokenAddress={token.address} decimals={token.decimals} amount={amount} showLogo={true} />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs py-3">
              <div className="text-gray-400 dark:text-gray-600">Starts</div>
              <div className="text-gray-600 dark:text-gray-400">in one month</div>
            </div>
            <div className="flex justify-between items-center text-xs pt-3">
              <div className="text-gray-400 dark:text-gray-600">Ends</div>
              <div className="text-gray-600 dark:text-gray-400">in 3 months</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
