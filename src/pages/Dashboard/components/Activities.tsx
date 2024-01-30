import Activity from "./Activity";

export default function Activities({ govnfts }) {
  return (
    <div className="space-y-1.5 pt-24">
      <div className="pb-3 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Activity</div>
      {govnfts.map((govnft) => (
        <Activity govnft={govnft} />
      ))}
    </div>   
  );
}
