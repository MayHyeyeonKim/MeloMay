import ErrorMessage from "../../common/components/ErrorMessage";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import EmptyPlaylist from "./EmptyPlaylist";
import LibraryHead from "./LibraryHead";
import Playlist from "./playlist";

const YourLibrary = () => {
  const { data, isLoading, error } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  });
  console.log("data는? ", data); //last page
  const playlists = data?.pages.flatMap((page) => page.items) ?? [];
  console.log("playlists???", playlists);

  const { data: user } = useGetCurrentUserProfile();
  if (!user) return <EmptyPlaylist />;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }

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
