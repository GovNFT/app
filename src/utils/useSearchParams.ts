import { useCallback, useMemo } from "react";
import { navigate, usePathname, useSearch } from "wouter/use-location";

export default function useSearchParams() {
  const search = useSearch();
  const pathname = usePathname();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const setSearchParams = useCallback(
    (params: Record<string, string>) => {
      const newSearchParamsObj = new URLSearchParams(params);
      navigate(`${pathname}?${newSearchParamsObj}`);
    },
    [pathname]
  );

  return [searchParams, setSearchParams] as const;
}
