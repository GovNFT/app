import { Img } from "react-image";

/* TODO: Use path alias */
import { DEFAULT_CHAIN, TOKEN_ASSETS_CDN, TOKEN_ICON } from "../constants";
import { Address } from "../hooks/types";

export default function TokenAvatar({
  address,
  className = null,
}: {
  address: Address;
  className?: string;
}) {
  if (!address) {
    return <></>;
  }

  const lowcase = String(address).toLowerCase();
  const checksum = String(address) ? String(address) : lowcase;

  const classNames = className
    ? `${className} rounded-full bg-gray-200 dark:bg-gray-700 hover:opacity-80`
    : "w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:opacity-80";

  // Builds a list of potential CDN logo URIs
  const logoURIs = TOKEN_ASSETS_CDN.flatMap((cdnUri) => [
    `${cdnUri}/${DEFAULT_CHAIN.id}/${checksum}/logo.svg`,
    `${cdnUri}/${DEFAULT_CHAIN.id}/${checksum}/logo-128.png`,
  ]).concat([TOKEN_ICON]);

  return <Img className={classNames} src={logoURIs} />;
}
