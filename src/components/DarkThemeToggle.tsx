import { useThemeMode } from "flowbite-react";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";

export default function DarkThemeToggle() {
  const [mode, _setMode, toggleMode] = useThemeMode();

  const toggle = () => {
    const currentMode = mode === "dark";
    localStorage.setItem("darkMode", String(!currentMode));

    toggleMode();
  };

  return (
    <>
      <div
        className="hover:bg-gray-900/5 dark:hover:bg-gray-700/20 rounded-full cursor-pointer p-3"
        onClick={toggle}
      >
        <MoonIcon size={16} className="inline dark:hidden" />
        <SunIcon size={16} className="hidden dark:inline" />
      </div>
    </>
  );
}

// Load system dark/light mode settings...
DarkThemeToggle.isDarkMode = () => {
  const storedDarkMode = window.localStorage.getItem("darkMode");
  const sysDarkMode = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;

  return storedDarkMode ? storedDarkMode === "true" : sysDarkMode;
};
