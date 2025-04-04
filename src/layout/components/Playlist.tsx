import { useState } from "react";
import { SimplifiedPlaylist } from "../../models/playlist";
import { useNavigate } from "react-router-dom";
import PlaylistItem from "./PlaylistItem";

interface PlaylistProps {
  playlists: SimplifiedPlaylist[];
}

const Playlist = ({ playlists }: PlaylistProps) => {
  const [selectedId, setSelectedId] = useState<string>("");
  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    setSelectedId(id);
    navigate(`/playlist/${id}`);
  };

  return (
    <div className="flex flex-col gap-2">
      {playlists.map((playlist) => (
        <PlaylistItem
          key={playlist.id}
          id={playlist.id ?? ""}
          name={playlist.name ?? ""}
          image={playlist.images?.[0]?.url || null}
          artistName={"Playlist • " + playlist.owner?.display_name}
          selected={playlist.id === selectedId}
          handleClick={handleItemClick}
        />
      ))}
    </div>
  );
};

export default Playlist;
