export default function Activity({ govnft }) {
  return (
    <div className="bg-black/[.02] dark:bg-black/[.08] rounded text-sm px-4 py-3">
      GovNFT #{govnft.id}
    </div>
  );
}
