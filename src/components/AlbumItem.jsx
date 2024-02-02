import { Link } from "react-router-dom";
const AlbumItems = ({ name, artists, id, image }) => {
  return (
    <Link
      to={`/album/${id}`}
      className="w-[160px] max-h[220px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg 
      hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <img src={image[2].Link} alt="" className="rounded-lg" />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="text-gray-600 font-semibold overflow-x-clip">
          {name}
        </span>
        <p className="text-gray-500 font-thin">
          {artists.map((artist) => artist.name).join(",")}
        </p>
      </div>
    </Link>
  );
};

export default AlbumItems;
