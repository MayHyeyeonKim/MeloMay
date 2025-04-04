import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import EmptyPlaylist from "./EmptyPlaylist";
import LibraryHead from "./LibraryHead";
import Playlist from "./playlist";

const YourLibrary = () => {
  const { data } = useGetCurrentUserPlaylists({ limit: 10, offset: 0 });
  const playlists = data?.items ?? [];
  console.log("playlists???", playlists);

  return (
    <div className="h-full">
      <LibraryHead />
      {playlists.length > 0 ? (
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] space-y-2 px-2">
          <Playlist playlists={playlists} />
        </div>
      ) : (
        <EmptyPlaylist />
      )}
    </div>
  );
};

export default YourLibrary;
