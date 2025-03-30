interface CardProps {
  image: string;
  albumName: string;
  artistName: string | undefined;
}

const Card = ({ image, albumName, artistName }: CardProps) => {
  return (
    <div>
      <img src={image} alt={albumName} className="w-full h-auto mb-2 rounded" />

      <div className="font-semibold">{albumName}</div>
      <div className="text-sm text-gray-400">{artistName ?? "Unknown"}</div>
    </div>
  );
};
export default Card;
