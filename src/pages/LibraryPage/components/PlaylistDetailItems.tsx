import { FC } from "react";
import { InfiniteData } from "@tanstack/react-query";
import { GetPlaylistItemsResponse } from "../../../models/playlist";

interface PlaylistDetailItemsProps {
  playlistItems: InfiniteData<GetPlaylistItemsResponse>;
}
const PlaylistDetailItems: FC<PlaylistDetailItemsProps> = ({
  playlistItems,
}) => {
  const allItems = playlistItems?.pages?.flatMap((page) => page.items) ?? [];
  return (
    <div className="w-full px-4 text-white">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead className="text-sm text-gray-400 uppercase border-b border-gray-700">
          <tr>
            <th className="text-left w-8">#</th>
            <th className="text-left">Title</th>
            <th className="text-left">Album</th>
            <th className="text-left">Date added</th>
            <th className="text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          {allItems.map((item: any, index: number) => {
            const track = item.track;
            return (
              <tr key={track.id} className="hover:bg-gray-800 text-sm">
                <td>{index + 1}</td>
                <td>{track.name}</td>
                <td>{track.album?.name}</td>
                <td>{new Date(item.added_at).toISOString().split("T")[0]}</td>
                <td>{formatDuration(track.duration_ms)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function formatDuration(ms?: number) {
  if (!ms) return "–";
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default PlaylistDetailItems;
