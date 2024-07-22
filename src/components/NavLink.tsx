import { Button } from "flowbite-react";
import { useSearchParams } from "#/hooks/searchParams";

export default function NavLink({ href, children, useButton = false, ...opts }) {
  const LinkComponent = useButton ? Button : "a";
  const [, , navigate] = useSearchParams();
  const goTo = (event, ref) => {
    if (navigate) {
      event.preventDefault();
      navigate(ref);
    }
  };

  return (
    <LinkComponent href={href} onClick={(event) => goTo(event, href)} {...opts}>
      {children}
    </LinkComponent>
  );
}
