import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();
  console.log("1. 여기서 부터 시작하니 쭉쭉 타고 들어가볼게!", data);
  return (
    <>
      <div className="text-white font-bold text-2xl">New Released Albums</div>
    </>
  );
};

export default NewReleases;
