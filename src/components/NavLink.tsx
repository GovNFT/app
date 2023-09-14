import { Button } from "flowbite-react";
import { useLocation } from "wouter";

export default function NavLink({
  href,
  children,
  useButton = false,
  ...opts
}) {
  const LinkComponent = useButton ? Button : "a";
  const [_location, navigate] = useLocation();
  const goTo = function (event, ref) {
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
