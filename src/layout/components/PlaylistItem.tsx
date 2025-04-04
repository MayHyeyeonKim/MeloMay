interface PlaylistItemProps {
  image: string | null;
  name: string;
  artistName: string;
  id: string;
  handleClick: (id: string) => void;
  selected?: boolean;
}

const PlaylistItem = ({
  image,
  name,
  artistName,
  id,
  handleClick,
  selected,
}: PlaylistItemProps) => {
  return (
    <button
      onClick={() => handleClick(id)}
      className={`w-full flex items-center gap-4 p-2 rounded-lg text-left transition ${
        selected ? "bg-neutral-800" : "hover:bg-neutral-700"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-md object-cover"
        />
      ) : (
        <div className="w-12 h-12 bg-gray-700 rounded-md" />
      )}
      <div className="flex flex-col">
        <p className="text-white text-sm font-semibold">{name}</p>
        <p className="text-neutral-400 text-xs">{artistName}</p>
      </div>
    </button>
  );
};

export default PlaylistItem;
