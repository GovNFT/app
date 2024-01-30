export default function Activity({ govnft }) {
  return (
    <div className="bg-white hover:bg-white/50 dark:bg-white/[.01] dark:hover:bg-white/[.02] rounded text-sm px-4 py-3 shadow-sm">
      GovNFT #{govnft.id}
    </div>
  );
}
