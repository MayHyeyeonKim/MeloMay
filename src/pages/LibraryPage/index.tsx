/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import PlaylistDetailHeader from "./components/PlaylistDetailHeader";
import PlaylistDetailItems from "./components/PlaylistDetailItems";
import useGetPlaylistItems from "../../hooks/useGetPlaylistItems";
import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "lucide-react";
import { PAGE_LIMIT } from "../../configs/commonConfig";

const LibraryPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useGetPlaylistItems({ playlist_id: id, limit: PAGE_LIMIT, offset: 0 });
  console.log("playlistItems detail=>", playlistItems);

  const totalTracks = playlistItems?.pages[0]?.total ?? 0;

  return (
    <>
      <PlaylistDetailHeader playlist={playlist} />

      {playlistItems === undefined ? null : totalTracks === 0 ? (
        <div className="flex flex-col items-center gap-4 mt-10">
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
                  <SearchIcon style={{ color: "#9ca3af" }} /> {/* gray-400 */}
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#27272a", // neutral-800
              borderRadius: "6px",
              input: {
                color: "white",
                "::placeholder": {
                  color: "#9ca3af", // gray-400
                },
              },
            }}
          />
        </div>
      ) : (
        <PlaylistDetailItems
          playlistItems={playlistItems}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </>
  );
};

export default LibraryPage;
