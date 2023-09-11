// Default Flowbite theme customizations, see:
// https://github.com/themesberg/flowbite-react/blob/main/src/lib/theme/default.ts
//
// Custom components with styling outside of this file:
//  * Drawer

export default {
  theme: {
    button: {
      color: {
        info: "text-white bg-primary border border-transparent border-black/5 hover:opacity-90 rounded-md",
        light:
          "text-gray-900 bg-transparent border border-gray-900 border-opacity-10 hover:bg-transpaorent hover:border-opacity-20 disabled:hover:bg-transparent dark:bg-transparent dark:text-white dark:border-white dark:border-opacity-10 dark:hover:bg-transparent dark:hover:border-white dark:hover:border-opacity-20",
        gray: "text-gray-900 bg-white border border-white hover:bg-white hover:text-primary disabled:hover:bg-white dark:bg-gray-50 dark:text-gray-700 dark:border-gray-50 dark:hover:text-primary dark:hover:bg-white dark:disabled:hover:bg-gray-50",
      },
    },
    navbar: {
      root: {
        base: "py-2.5",
      },
    },
    avatar: {
      root: {
        base: "flex items-start",
        bordered: "ring-0 bg-neutral-200/50 dark:bg-gray-700/50",
        stacked: "ring-0 bg-neutral-200/50 dark:bg-gray-700/50",
      },
    },
    dropdown: {
      arrowIcon: "ml-1.5 h-3 w-3",
      floating: {
        base: "z-30 w-fit rounded-lg divide-y divide-gray-100 shadow-sm",
        content: "text-sm text-gray-700 dark:text-gray-200",
        divider: "h-px bg-gray-100 dark:bg-gray-800",
        header: "block py-2 px-4 text-xs text-gray-700 dark:text-gray-200",
        item: {
          base: "flex items-center justify-start mx-2 mt-2 mb-1 py-2 px-2 text-sm text-gray-700 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-50 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 dark:hover:text-white",
        },
        style: {
          auto: "bg-white text-gray-900 dark:bg-gray-900 border border-neutral-200 dark:border-gray-700 dark:border-opacity-70 dark:text-white rounded",
        },
      },
      inlineWrapper: "flex items-center gap-8",
    },
    toast: {
      root: {
        base: "flex w-full max-w-lg items-center rounded-lg bg-white p-4 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
      },
      toggle: {
        base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      },
    },
    tooltip: {
      target: "inline cursor-pointer",
    },
    textInput: {
      addon:
        "inline-flex items-center px-3 hover:bg-neutral-50 dark:hover:bg-gray-800 rounded-l-md text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 border border-r-0 border-gray-300 dark:border-gray-600",
      field: {
        input: {
          base: "block w-full border disabled:cursor-not-allowed disabled:text-opacity-50 dark:disabled:text-opacity-30",
          sizes: {
            md: "p-3 text-sm",
          },
          colors: {
            gray: "bg-transparent border-gray-300 text-gray-900 placeholder-white/20 hover:border-opacity-70 dark:hover:border-opacity-70 focus:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:border-gray-500 outline-0",
            info: "border-gray-900 border-opacity-10 focus:border-opacity-30 bg-transparent text-gray-900 dark:text-white dark:border-white dark:border-opacity-10 dark:focus:border-opacity-30 dark:bg-transparent outline-0",
            warning:
              "border-amber-500 bg-transparent text-yellow-500 placeholder-yellow-700 focus:border-amber-500 dark:border-yellow-700 dark:bg-amber-800 dark:bg-opacity-10 dark:focus:border-amber-600 outline-0",
          },
        },
      },
    },
    textarea: {
      colors: {
        gray: "bg-transparent border-gray-300 text-gray-900 hover:border-opacity-70 dark:hover:border-opacity-70 focus:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:border-gray-500 outline-0",
      },
    },
  },
};
