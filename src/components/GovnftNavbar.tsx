import { Button } from "flowbite-react";
import NavLink from "./NavLink";

export default function GovnftNavbar({ govnft, active = "overview" }) {
  return (
    <>
      <Button.Group className="w-full">
        <NavLink
          href={`/govnft?id=${govnft.id}`}
          size="sm"
          className="w-full"
          color={active === "overview" ? "info" : "light"}
          useButton={true}
        >
          Overview
        </NavLink>
        <NavLink
          href={`/transfer?id=${govnft.id}`}
          size="sm"
          className="w-full"
          color={active === "transfer" ? "info" : "light"}
          useButton={true}
        >
          Transfer
        </NavLink>
        <NavLink
          href={`/split?id=${govnft.id}`}
          size="sm"
          className="w-full"
          color={active === "split" ? "info" : "light"}
          useButton={true}
        >
          Split
        </NavLink>
        <NavLink
          href={`/delegate?id=${govnft.id}`}
          size="sm"
          className="w-full"
          color={active === "delegate" ? "info" : "light"}
          useButton={true}
        >
          Delegate
        </NavLink>
      </Button.Group>
    </>
  );
}
