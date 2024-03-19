import { Github as GithubIcon } from "lucide-react";
import DarkThemeToggle from "./DarkThemeToggle";

export default function Footer() {
  return (
    <div className="flex justify-between items-center text-xs border-t border-black/5 dark:border-white/5 py-4 mt-24 mb-24">
      <div className="flex gap-5">
        <span className="text-gray-600 dark:text-gray-400">
          {/* @ts-ignore */}
          {new Date().getFullYear()} &copy; GovNFT. {__APP_VERSION__}
        </span>
        <a
          href="https://github.com/velodrome-finance/govnft"
          target="_blank"
          className="underline hover:no-underline text-gray-400 dark: text-gray-600 flex items-center gap-2"
          rel="noreferrer"
        >
          <GithubIcon size={14} />
          GitHub
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
