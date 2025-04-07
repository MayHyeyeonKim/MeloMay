import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { InfiniteData } from "@tanstack/react-query";
import { GetPlaylistItemsResponse } from "../../../models/playlist";
import { PAGE_LIMIT } from "../../../configs/commonConfig";
import { Track } from "../../../models/track";
import { Episode } from "../../../models/Episode";

interface PlaylistDetailItemsProps {
  playlistItems: InfiniteData<GetPlaylistItemsResponse>;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
}

const PlaylistDetailItems: FC<PlaylistDetailItemsProps> = ({
  playlistItems,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  const { ref, inView } = useInView({
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="w-full px-4 text-white">
      {/* for desktop */}
      <table className="hidden md:table w-full table-auto border-separate border-spacing-y-2 mt-6">
        <thead className="text-md text-gray-400 uppercase border-b border-gray-700 ">
          <tr className="border-b border-gray-700">
            <th className="text-left w-8 border-b border-gray-700">#</th>
            <th className="text-left border-b border-gray-700">Title</th>
            <th className="text-left border-b border-gray-700">Album</th>
            <th className="text-left border-b border-gray-700">Date added</th>
            <th className="text-left border-b border-gray-700">Duration</th>
          </tr>
        </thead>
        <tbody>
          {playlistItems.pages.map((page, pageIndex) =>
            page.items.map((item, itemIndex) => {
              const track = item.track;
              const index = pageIndex * PAGE_LIMIT + itemIndex + 1;

              return (
                <tr key={track.id} className="hover:bg-gray-800 text-sm">
                  <td>{index}</td>
                  <td>{track.name}</td>
                  <td>
                    {isEpisode(track) ? track.description : track.album?.name}
                  </td>
                  <td>
                    {new Date(item.added_at ?? "").toISOString().split("T")[0]}
                  </td>
                  <td>{formatDuration(track.duration_ms)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* for mobile */}
      <div className="flex flex-col gap-4 mt-6 md:hidden">
        {playlistItems.pages.map((page, pageIndex) =>
          page.items.map((item, itemIndex) => {
            const track = item.track;
            const index = pageIndex * PAGE_LIMIT + itemIndex + 1;

            return (
              <div
                key={track.id}
                className="p-4 rounded-md bg-neutral-800 text-sm"
              >
                <div className="font-semibold">
                  {index}. {track.name}
                </div>
                <div className="text-gray-400 text-xs">
                  {isEpisode(track) ? track.description : track.album?.name}
                </div>
                <div className="text-gray-400 text-xs">
                  Added:{" "}
                  {new Date(item.added_at ?? "").toISOString().split("T")[0]}
                </div>
                <div className="text-gray-300 text-xs">
                  Duration: {formatDuration(track.duration_ms)}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Intersection Observer trigger */}
      <div ref={ref} className="h-10" />
      {isFetchingNextPage && (
        <p className="text-center text-gray-400 text-sm mt-4">
          Loading more...
        </p>
      )}
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
