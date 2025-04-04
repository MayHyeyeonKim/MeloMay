import { FC } from "react";

interface PlaylistDetailHeaderProps {
  playlist?: any;
}

const PlaylistDetailHeader: FC<PlaylistDetailHeaderProps> = ({ playlist }) => {
  return (
    <div className="flex item-center w-full gap-6">
      <div className="flex justify-center md:w-1/5">
        {playlist?.images?.[0]?.url ? (
          <img
            src={playlist.images[0].url}
            alt="playlist_cover"
            className="rounded-md w-full max-w-[200px] h-auto"
          />
        ) : (
          <div className="flex items-center justify-center bg-gray-700 rounded-md w-[200px] h-[200px]">
            <p>Music Note Icon 같은게 옴</p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-4/5 md: flex-row bg-gradient-to-b from-transparent to-black/50 p-4 gap-6">
        <div className="flex flex-col justify-center md:w-4/5 w-full text-white">
          <h1 className="text-5xl md:text-3xl font-bold mb-2">
            {" "}
            {playlist?.name}
          </h1>
        </div>
        <div className="flex items-center text-sm">
          <img
            src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
            width={20}
            className="mr-2"
          />
          <span className="font-semibold mr-2">
            {" "}
            {playlist?.owner?.display_name || "unknown"}
          </span>
          <span> • {playlist?.tracks?.total} songs</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetailHeader;
