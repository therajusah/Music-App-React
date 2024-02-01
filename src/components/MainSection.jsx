import { useState, useEffect } from "react";
import axios from "axios";
import AlbumItem from "./AlbumItem";
const MainSection = () => {
  const [ albums, setAlbums] = useState([]);
  const [ trending, setTrending] = useState([]);


const getHomePageData = async () => {
    const res = await axios.get("https://saavn.me/modules?language=hindi");
    const {data} = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
};

useEffect(() => {
   getHomePageData();
}, []);

  return <div>
      {
        albums?.map((album) => <AlbumItem key={album.id} {...album}/>)
      }
    </div>;
 
};

export default MainSection;