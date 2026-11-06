import { Search } from "lucide-react";
import { useSearch } from "../hooks/useSearch";
import { useRef } from "react";

export const SearchHeader = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleSearch, currentQuery } = useSearch(inputRef);

  return (
    <>
      <div className="flex-1 max-w-full ">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-1/2 "
            size={20}
          />
          <input
            type="text"
            ref={inputRef}
            onKeyDown={handleSearch}
            placeholder="Buscar Pokèmon"
            defaultValue={currentQuery || ""}
            className="w-full pl-10 pr-4 border border-amber-50 rounded-lg  focus:ring-2 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </>
  );
};
