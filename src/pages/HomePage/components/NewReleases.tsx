import Card from "../../../common/components/Card";
import ErrorMessage from "../../../common/components/ErrorMessage";
import LoadingSpinner from "../../../common/components/LoadingSpinner";
import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();

  console.log("들어온 데이타: ", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorMessage errorMessage={error.message} />;
  }

  const albums = data?.albums?.items || [];

  return (
    <>
      <div className="text-white font-bold text-2xl">New Released Albums</div>
      {albums.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-gray-800 text-white p-4 rounded-xl shadow"
            >
              <Card
                image={album.images[0].url}
                albumName={album.name}
                artistName={album.artists[0].name}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No items</p>
      )}
    </>
  );
};

export default NewReleases;
