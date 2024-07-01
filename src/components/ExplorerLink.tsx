import { LinkIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useExplorer } from "#/hooks/explorer";
import { ReactNode } from "react";

export function ExplorerLink({
  path,
  className = "",
  children,
}: { path: string; className?: string; children?: ReactNode }) {
  const { explorer } = useExplorer();

  if (!explorer) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a href={`${explorer.url}/${path}`} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
