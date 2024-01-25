// @ts-nocheck
import { Toast } from "flowbite-react";
import {
  AlertCircle as AlertCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
} from "lucide-react";
import toast, { useToaster } from "react-hot-toast/headless";

const STYLES = {
  error: {
    effect: "shadow-lg border border-primary -mt-6",
    iconClassName:
      "inline-flex h-8 w-8 p-2 items-center justify-center rounded-lg bg-primary text-white dark:bg-primary dark:text-gray-900 animate-pulse",
    icon: AlertCircleIcon,
  },
  success: {
    effect: "shadow-lg border border-green-500 -mt-6",
    iconClassName:
      "inline-flex h-8 w-8 p-2 items-center justify-center rounded bg-green-500 text-white dark:bg-green-500 dark:text-gray-900 animate-pulse",
    icon: CheckCircleIcon,
  },
  default: {
    effect: "shadow-lg border border-amber-500 -mt-6",
    iconClassName:
      "inline-flex h-8 w-8 p-2 items-center justify-center rounded bg-amber-400 text-white dark:bg-amber-400 dark:text-gray-900 animate-pulse",
    icon: AlertTriangleIcon,
  },
};

const Toaster = () => {
  const { toasts, handlers } = useToaster({ duration: 10_000 });
  const { startPause, endPause } = handlers;

  const toRender = toasts
    .filter((toast) => toast.visible)
    .map((toast) => {
      const style = STYLES[toast.type] || STYLES.default;
      return { ...toast, style };
    });

  return (
    <div
      onMouseEnter={startPause}
      onMouseLeave={endPause}
      className="w-full mt-24 lg:mb-4 lg:w-1/4 z-[51] sm:bottom-0 fixed"
    >
      <div className="flex flex-col">
        {toRender.map((toast) => (
          <div key={toast.id} className="my-4 mx-6" {...toast.ariaProps}>
            <Toast className={toast.style.effect}>
              <div className={toast.style.iconClassName}>
                <toast.style.icon size={16} />
              </div>
              <div className="mx-5 text-sm font-normal text-gray-600 dark:text-gray-400 break-words">
                {toast.message?.reason ||
                  toast.message?.message ||
                  (toast.message.props ? toast.message : toast.message.toString())}
              </div>

              <Toast.Toggle />
            </Toast>
          </div>
        ))}
      </div>
    </div>
  );
};

Toaster.toast = toast;

export default Toaster;
