/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import PlaylistDetailHeader from "./components/PlaylistDetailHeader";
import PlaylistDetailItems from "./components/PlaylistDetailItems";
import useGetPlaylistItems from "../../hooks/useGetPlaylistItems";

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
  } = useGetPlaylistItems({ playlist_id: id, limit: 10, offset: 0 });
  console.log("playlistItems detail=>", playlistItems);

  return (
    <>
      <PlaylistDetailHeader playlist={playlist} />
      <PlaylistDetailItems />
    </>
  );
};

export default LibraryPage;
