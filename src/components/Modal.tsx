import { X as CloseIcon } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, size = null, children }) {
  function escHandler({ key }) {
    if (key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", escHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", escHandler);
      }
    };
  }, []);

  if (!open) {
    return <></>;
  }

  if (typeof document !== "undefined") {
    return createPortal(
      <div
        className={`fixed z-40 inset-0 ${open ? "" : "pointer-events-none"}`}
      >
        {/* backdrop */}
        <div
          className={`fixed inset-0 bg-black ${
            open ? "opacity-50" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
          onClick={onClose}
        />

        <div
          className={`fixed fixed left-1/2 -translate-x-1/2 sm:mt-12 bg-white dark:bg-gray-800 md:rounded-lg shadow-lg w-full pt-6 ${
            size === "lg" ? "sm:container" : "max-w-screen-sm"
          } ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        >
          <div className="flex justify-end sm:absolute -right-2 -top-10 ">
            <div
              className="shadow-lg mx-6 mb-4 sm:m-6 p-2 text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-full cursor-pointer"
              onClick={onClose}
            >
              <CloseIcon size={18} />
            </div>
          </div>
          {children}
        </div>
      </div>,
      document.body,
    );
  }

  return null;
}
