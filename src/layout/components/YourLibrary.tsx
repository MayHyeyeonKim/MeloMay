import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import EmptyPlaylist from "./EmptyPlaylist";
import LibraryHead from "./LibraryHead";

const YourLibrary = () => {
  const { data } = useGetCurrentUserPlaylists({ limit: 10, offset: 0 });
  console.log("ddd", data);
  return (
    <>
      <LibraryHead />
      <EmptyPlaylist />
    </>
  );
};

export default YourLibrary;
