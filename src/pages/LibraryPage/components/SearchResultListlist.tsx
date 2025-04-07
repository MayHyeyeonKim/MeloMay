import { useEffect, useRef } from "react";
import { Track } from "../../../models/track";

interface SearchResultListlistProps {
  list: Track[];
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
}

const SearchResultListlist = ({
  list,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: SearchResultListlistProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !fetchNextPage) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div className="w-full max-w-xl mx-auto mt-6 space-y-4">
      {list.map((track, index) => {
        const isLast = index === list.length - 1;
        return (
          <div
            key={track.id || index}
            ref={hasNextPage && isLast ? observerRef : null}
            className="bg-neutral-800 text-white p-4 rounded-xl shadow flex flex-col gap-1"
          >
            <p className="text-lg font-semibold truncate">{track.name}</p>
            {track.artists?.[0]?.name && (
              <p className="text-sm text-gray-400">{track.artists[0].name}</p>
            )}
          </div>
        );
      })}

      {isFetchingNextPage && (
        <div className="text-center text-sm text-gray-500">Loading more...</div>
      )}
    </div>
  );
};

export default SearchResultListlist;
