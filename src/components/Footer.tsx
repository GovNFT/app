import DarkThemeToggle from "./DarkThemeToggle";

export default function Footer() {
  return (
    <div className="flex justify-between items-center text-xs border-t border-black/5 dark:border-white/5 py-4 mt-24 mb-24">
      {/* @ts-ignore */}
      <span className="text-gray-600 dark:text-gray-400">
        {/* @ts-ignore */}
        2023 &copy; GOVNFT. {__APP_VERSION__}
      </span>
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-2 items-center">
          <span className="text-gray-600 dark:text-gray-400">
            A public good for
          </span>{" "}
          <img src="./svg/op-logo.svg" className="h-5" />
          <span className="font-bold italic text-gray-600 dark:text-gray-400">
            OPTIMISM
          </span>
        </div>
        <DarkThemeToggle />
      </div>
    </div>
  );
}
