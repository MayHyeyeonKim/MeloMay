const EmptyPlaylist = () => {
  return (
    <div className="bg-[#1f1f1e] rounded-lg p-4 text-white space-y-2 flex flex-col items-center ">
      <div>
        <h2 className="font-bold text-base">Creat your first playlist</h2>
        <p className="text-sm text-neutral-400">It's easy, we'll help you </p>
      </div>
      <button className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition">
        create playlist
      </button>
    </div>
  );
};

export default EmptyPlaylist;
