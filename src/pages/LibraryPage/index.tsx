/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import PlaylistDetailHeader from "./components/PlaylistDetailHeader";
import PlaylistDetailItems from "./components/PlaylistDetailItems";
import useGetPlaylistItems from "../../hooks/useGetPlaylistItems";
import { PAGE_LIMIT } from "../../configs/commonConfig";
import EmptyPlaylistWithSearch from "./components/EmptyPlaylistWithSearch";

const LibraryPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  const {
    data: playlistItems,
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
        <EmptyPlaylistWithSearch />
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
