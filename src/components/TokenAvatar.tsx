import { Img } from "react-image";

import {
  DEFAULT_CHAIN,
  NATIVE_TOKEN,
  NATIVE_TOKEN_LOGO,
  TOKEN_ASSETS_CDN,
  TOKEN_ICON,
} from "../constants";

export default function TokenAvatar({ address, className = null }) {
  if (!address) {
    return <></>;
  }

  const lowcase = String(address).toLowerCase();
  const checksum = String(address) ? String(address) : lowcase;

  const classNames = className
    ? `${className} rounded-full bg-gray-200 dark:bg-gray-700 hover:opacity-80`
    : `w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:opacity-80`;

  if (lowcase == NATIVE_TOKEN.address) {
    return <Img className={classNames} src={NATIVE_TOKEN_LOGO} />;
  }

  // Builds a list of potential CDN logo URIs
  const logoURIs = TOKEN_ASSETS_CDN.map((cdnUri) => [
    `${cdnUri}/${DEFAULT_CHAIN.id}/${checksum}/logo.svg`,
    `${cdnUri}/${DEFAULT_CHAIN.id}/${checksum}/logo-128.png`,
  ])
    .flat()
    .concat([TOKEN_ICON]);

  return <Img className={classNames} src={logoURIs} />;
}
