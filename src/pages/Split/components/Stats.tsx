import dayjs from "dayjs";

import Amount from "#/components/Amount";
import DateFormat from "#/components/DateFormat";

export default function Stats({ nft }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between bg-gray-100 dark:bg-gray-700/20 rounded-lg px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="text-sm text-gray-600 dark:text-gray-400">Current Lock</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Amount tokenAddress={nft.token} amount={nft.amount} showLogo={true} />
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 dark:bg-gray-700/20 rounded-lg px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="text-sm text-gray-600 dark:text-gray-400">Initial Lock</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <Amount tokenAddress={nft.token} amount={nft.total_locked} showLogo={true} />
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 dark:bg-gray-700/20 rounded-lg px-4 py-3">
        <div className="text-sm text-gray-600 dark:text-gray-400">Vesting Start Date</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <DateFormat ts={nft.start} />
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 dark:bg-gray-700/20 rounded-lg px-4 py-3">
        <div className="text-sm text-gray-600 dark:text-gray-400">Vesting End Date</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <DateFormat ts={nft.end} />
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 dark:bg-gray-700/20 rounded-lg px-4 py-3">
        <div className="text-sm text-gray-600 dark:text-gray-400">Cliff</div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {dayjs.duration(nft.cliff_length, "seconds").humanize()}
        </div>
      </div>
    </div>
  );
}
