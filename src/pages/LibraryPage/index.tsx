import { Navigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../hooks/useGetPlaylist";

const LibraryPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: playlist } = useGetPlaylist({ playlist_id: id });
  console.log("playlist detail=>", playlist);
  return <div> LibraryPage</div>;
};

export default LibraryPage;
