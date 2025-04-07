import { InputAdornment, TextField } from "@mui/material";
import { Search } from "lucide-react";
import { useState } from "react";
import useSearchItemsByKeyword from "../../../hooks/useSearchItemsByKeyword";
import { SEARCH_TYPE } from "../../../models/search";
import SearchResultListlist from "./SearchResultListlist";

const EmptyPlaylistWithSearch = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchItemsByKeyword({
      q: keyword,
      type: [SEARCH_TYPE.Track],
    });

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const flattenedTracks =
    data?.pages.flatMap((page) => page.tracks?.items ?? []) ?? [];

  return (
    <div className="flex flex-col items-center gap-4 mt-10 w-full">
      <p className="text-xl font-semibold">
        Let's find something for your playlist
      </p>

      <TextField
        fullWidth
        placeholder="Search for songs or episodes"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search className="w-4 h-4 text-gray-400" />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: "#27272a",
          borderRadius: "6px",
          "& .MuiInputBase-input": {
            color: "white",
            "&::placeholder": {
              color: "#9ca3af",
            },
          },
        }}
        value={keyword}
        onChange={handleSearchKeyword}
      />

      {flattenedTracks.length === 0 && !isLoading && (
        <p className="text-gray-400 text-sm text-center mt-4">
          No results found
        </p>
      )}

      {flattenedTracks.length > 0 && (
        <SearchResultListlist
          list={flattenedTracks}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default EmptyPlaylistWithSearch;
