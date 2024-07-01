import DarkThemeToggle from "./DarkThemeToggle";

export default function Footer() {
  return (
    <div className="flex justify-between items-center text-xs border-t border-black/5 dark:border-white/5 py-4 mt-24 mb-24">
      <div className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
        <div>{__APP_VERSION__}</div>
        <div className="text-gray-400 dark:text-gray-600">&middot;</div>
        <a
          href="https://github.com/velodrome-finance/govnft"
          target="_blank"
          className="underline hover:no-underline underline-offset-2"
          rel="noreferrer"
        >
          Etherscan
        </a>
        <a
          href="https://cantina.xyz/portfolio/aa79aa69-8468-442d-bfbb-b403de36edec"
          target="_blank"
          className="underline hover:no-underline underline-offset-2"
          rel="noreferrer"
        >
          Audit
        </a>
        <a
          href="https://github.com/velodrome-finance/govnft"
          target="_blank"
          className="underline hover:no-underline underline-offset-2"
          rel="noreferrer"
        >
          GitHub
        </a>
        <div className="text-gray-400 dark:text-gray-600">&middot;</div>
        <a href="#" className="underline hover:no-underline underline-offset-2">
          Documentation
        </a>
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-2 items-center">
          <span className="text-gray-600 dark:text-gray-400">A public good for</span>{" "}
          <img src="/svg/op-logo.svg" alt="Optimism" className="h-5" />
          <span className="font-bold italic text-gray-600 dark:text-gray-400">OPTIMISM</span>
        </div>
        <DarkThemeToggle />
      </div>
    </div>
  );
}
