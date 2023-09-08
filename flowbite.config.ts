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
      link: {
        base: "block py-2 pl-3 md:pl-0",
        active: {
          on: "bg-gray-900 bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded md:rounded-none border-l-4 md:bg-transparent dark:md:bg-transparent mb-1 mx-0 xl:mx-2 dark:text-white text-gray-900 md:border-b md:border-l-0 border-primary",
          off: "bg-gray-900 bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded md:bg-transparent dark:md:bg-transparent mb-1 mx-0 xl:mx-2 text-gray-700 hover:bg-gray-900 hover:bg-opacity-10 md:border-b md:border-transparent dark:hover:bg-white dark:hover:bg-opacity-10 dark:text-gray-400 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400 md:hidden bg-gray-900 bg-opacity-5 hover:bg-gray-900 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-10 ml-4 mr-2",
        icon: "h-4 w-6 shrink-0",
      },
    },
    avatar: {
      root: {
        base: "flex items-start",
        bordered: "ring-0 bg-neutral-200/50 dark:bg-gray-700/50",
        stacked: "ring-0 bg-neutral-200/50 dark:bg-gray-700/50",
      },
    },
    card: {
      root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800",
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
    pagination: {
      base: "",
      pages: {
        base: "shadow-sm rounded-lg xs:mt-0 mt-2 inline-flex items-center -space-x-px border border-neutral-200 dark:border-gray-700 dark:border-opacity-50",
        previous: {
          base: "h-10 items-center text-sm ml-0 rounded-l-lg bg-white py-2 pl-3 pr-5 leading-tight text-gray-500 hover:bg-neutral-50 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
          icon: "h-4 w-4 mr-3",
        },
        next: {
          base: "h-10 items-center text-sm rounded-r-lg bg-white py-2 pr-3 pl-5 leading-tight text-gray-500 hover:bg-neutral-50 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
          icon: "h-4 w-4 ml-3",
        },
        selector: {
          base: "h-10 items-center text-sm w-12 bg-white py-2 leading-tight text-gray-500 hover:bg-neutral-50 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
          active:
            "bg-neutral-50 text-gray-400 dark:bg-gray-800 dark:text-gray-600 ",
        },
      },
    },
    darkThemeToggle: {
      root: {
        base: "rounded-lg p-2.5 text-sm text-gray-800 hover:bg-gray-900 dark:text-white dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5",
      },
    },
    timeline: {
      item: {
        content: {
          time: "mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400",
        },
        point: {
          marker: {
            icon: {
              wrapper:
                "space-x-2 absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-0 dark:ring-0 ring-white dark:bg-gray-900 dark:ring-gray-700",
              base: "h-3 w-3 text-primary dark:text-white",
            },
          },
        },
      },
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
    accordion: {
      root: {
        base: "divide-y divide-gray-200 border-none dark:divide-gray-700 dark:border-none",
      },
      title: {
        base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400 !bg-white hover:!bg-neutral-50 dark:!bg-gray-800 dark:hover:!bg-gray-800",
        flush: {
          off: "hover:bg-neutral-50 dark:hover:bg-gray-800",
        },
      },
    },
    badge: {
      root: {
        base: "flex h-fit items-center gap-1 rounded-full font-normal",
        color: {
          gray: "bg-gray-200 bg-opacity-50 text-gray-500 dark:bg-gray-700 dark:bg-opacity-50 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
        },
      },
    },
    textInput: {
      addon:
        "inline-flex items-center px-3 hover:bg-neutral-50 dark:hover:bg-gray-800 rounded-l-md text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 border border-r-0 border-gray-300 dark:border-gray-600",
      field: {
        input: {
          base: "block w-full border disabled:cursor-not-allowed disabled:text-opacity-50 dark:disabled:text-opacity-30",
          sizes: {
            md: "p-2.5 text-sm",
          },
          colors: {
            gray: "bg-transparent border-gray-300 text-gray-900 hover:border-opacity-70 dark:hover:border-opacity-70 focus:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:border-gray-500 outline-0",
            info: "border-gray-900 border-opacity-10 focus:border-opacity-30 bg-transparent text-gray-900 dark:text-white dark:border-white dark:border-opacity-10 dark:focus:border-opacity-30 dark:bg-transparent outline-0",
            warning:
              "border-amber-500 bg-transparent text-yellow-500 placeholder-yellow-700 focus:border-amber-500 dark:border-yellow-700 dark:bg-amber-800 dark:bg-opacity-10 dark:focus:border-amber-600 outline-0",
          },
        },
      },
    },
    fileInput: {
      field: {
        input: {
          colors: {
            gray: "bg-transparent border-gray-300 text-gray-900 hover:border-opacity-70 dark:hover:border-opacity-70 focus:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:border-gray-500 outline-0",
          },
        },
      },
    },
    textarea: {
      colors: {
        gray: "bg-transparent border-gray-300 text-gray-900 hover:border-opacity-70 dark:hover:border-opacity-70 focus:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:border-gray-500 outline-0",
      },
    },
    modal: {
      content: {
        base: "relative h-full w-full p-2 lg:py-12 md:h-auto",
        inner: "relative rounded-lg bg-white shadow dark:bg-gray-800",
      },
      body: {
        base: "px-0 py-6",
      },
      header: {
        base: "flex items-start justify-between rounded-t dark:border-gray-800 border-b p-5",
      },
    },
    carousel: {
      root: {
        base: "relative h-full w-full",
        leftControl:
          "absolute top-0 left-0 flex h-full items-center justify-center focus:outline-none",
        rightControl:
          "absolute top-0 left-0 flex h-full items-center justify-center focus:outline-none",
      },
      control: {
        base: "",
        icon: "h-4 w-4 text-gray-800 dark:text-gray-300",
      },
    },
  },
};
