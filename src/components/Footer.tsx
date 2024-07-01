import { GOVNFT_ADDRESS } from "./../constants";
import { useExplorer } from "./../hooks/explorer";
import DarkThemeToggle from "./DarkThemeToggle";
import { ExplorerLink } from "./ExplorerLink";

export default function Footer() {
  const { explorer } = useExplorer();

  return (
    <div className="flex justify-between items-start md:items-center text-xs border-t border-black/5 dark:border-white/5 py-4 mt-24 mb-24">
      <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:items-center text-gray-600 dark:text-gray-400 py-4">
        {/*@ts-ignore*/}
        <div className="pb-4 md:pb-0">{__APP_VERSION__}</div>
        <div className="hidden md:inline text-gray-400 dark:text-gray-600">&middot;</div>
        <ExplorerLink
          path={`address/${GOVNFT_ADDRESS}`}
          className="flex gap-2 items-center text-gray-600 dark:text-gray-400 underline hover:no-underline"
        >
          {explorer.name}
        </ExplorerLink>
        <a
          href="https://cantina.xyz/portfolio/aa79aa69-8468-442d-bfbb-b403de36edec"
          target="_blank"
          className="underline hover:no-underline underline-offset-2"
          rel="noreferrer"
        >
          Security Audit
        </a>
        <a
          href="https://github.com/velodrome-finance/govnft"
          target="_blank"
          className="underline hover:no-underline underline-offset-2"
          rel="noreferrer"
        >
          GitHub
        </a>
        <div className="hidden md:inline text-gray-400 dark:text-gray-600">&middot;</div>
        {/* TODO: Add docs */}
        <a href="/docs" className="underline hover:no-underline underline-offset-2">
          Documentation
        </a>
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden lg:flex gap-2 items-center">
          <span className="text-gray-600 dark:text-gray-400">A public good for</span>{" "}
          <img src="/svg/op-logo.svg" alt="Optimism" className="h-5" />
          <span className="font-bold italic text-gray-600 dark:text-gray-400">OPTIMISM</span>
        </div>
        <DarkThemeToggle />
      </div>
    </div>
  );
}
