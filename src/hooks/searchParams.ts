import { useCallback, useMemo } from "react";
import { useLocation, useSearch } from "wouter";

export function useSearchParams() {
  const [location, navigate] = useLocation();
  const search = useSearch();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const setSearchParams = useCallback(
    (params: Record<string, string>) => {
      const newSearchParamsObj = new URLSearchParams(params);
      navigate(`${location}?${newSearchParamsObj}`);
    },
    [location, navigate],
  );

  return [searchParams, setSearchParams] as const;
}
