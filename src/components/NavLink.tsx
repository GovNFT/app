import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function NavLink({
  href,
  children,
  useButton = false,
  ...opts
}) {
  let navigate = null;

  // For any page using this component outside the router...
  try {
    navigate = useNavigate();
  } catch {
    // @ts-ignore
  }

  const goTo = function (event, ref) {
    if (navigate) {
      event.preventDefault();
      navigate(ref);
    }
  };

  const LinkComponent = useButton ? Button : "a";

  return (
    <LinkComponent href={href} onClick={(event) => goTo(event, href)} {...opts}>
      {children}
    </LinkComponent>
  );
}
