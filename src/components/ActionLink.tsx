import { Button, Spinner } from "flowbite-react";

export default function ActionLink({ onClick, disabled = false, children, className = "", useButton = false }) {
  const handler = (event) => {
    event.preventDefault();
    !disabled && onClick?.(event);
  };

  const LinkComponent = useButton ? Button : "a";
  const withClassName = useButton ? className || "no-underline" : className;

  return (
    <LinkComponent
      href=""
      onClick={handler}
      color="light"
      className={
        withClassName || disabled
          ? "text-gray-600 dark:text-gray-400 flex items-center gap-3"
          : "text-primary underline hover:no-underline underline-offset-2"
      }
    >
      <div className="flex items-center gap-2">
        {disabled && <Spinner size="xs" color="gray" />}
        {children}
      </div>
    </LinkComponent>
  );
}
