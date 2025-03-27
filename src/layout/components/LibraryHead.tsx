import { Bookmark, Plus } from "lucide-react";

const LibraryHead = () => {
  return (
    <div className="flex items-center justify-between p-3 text-white text-lg font-semibold">
      <div className="flex items-center gap-2">
        <Bookmark size={20} />
        <p>Your Library</p>
      </div>
      <button className="text-green-500 hover:opacity-80 transition">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default LibraryHead;
