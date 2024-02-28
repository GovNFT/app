import Amount from "../../../components/Amount";

export default function SplitingNft({ nft }) {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div className="text-gray-400 dark:text-gray-600 text-xs">Locked</div>
      <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
      <div className="text-gray-600 dark:text-gray-400 text-xs flex gap-1 items-center">
        of <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={false} /> total
      </div>
    </div>
  );
}
