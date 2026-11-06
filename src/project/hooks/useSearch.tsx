import { useEffect, type RefObject } from "react";
import { useSearchParams } from "react-router";

export const useSearch = (inputRef?: RefObject<HTMLInputElement | null>) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuery = searchParams.get("query");

  useEffect(() => {
    if (!inputRef?.current) return;

    inputRef.current.value = currentQuery || "";
  }, [currentQuery, inputRef]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key != "Enter") return;
    const query = inputRef?.current?.value?.trim();
    const newSearchParams = new URLSearchParams(searchParams);

    if (!query) {
      newSearchParams.delete("query");
      setSearchParams(newSearchParams);
      return;
    }

    newSearchParams.set("query", query);
    setSearchParams(newSearchParams);
  };

  const clearSearchParams = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("query");
    setSearchParams(newSearchParams);
  };

  return {
    currentQuery,
    handleSearch,
    clearSearchParams,
  };
};
