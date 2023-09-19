import { Spinner } from "flowbite-react";

export default function ActionLink({ onClick, disabled = false, children }) {
  const handler = (event) => {
    event.preventDefault();
    !disabled && onClick?.(event);
  };

  return (
    <a
      href=""
      onClick={handler}
      color="light"
      className={
        disabled
          ? "opacity-30 dark:opacity-20 flex items-center gap-3"
          : "text-primary underline hover:no-underline underline-offset-2"
      }
    >
      <div className="flex items-center gap-2">
        {disabled && <Spinner size="xs" color="gray" />}
        {children}
      </div>
    </a>
  );
}
