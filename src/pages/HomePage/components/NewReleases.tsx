import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();
  return (
    <>
      <div className="text-white font-bold text-2xl">New Released Albums</div>
    </>
  );
};

export default NewReleases;
