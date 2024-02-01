import { useState, useEffect } from "react";
import axios from "axios";
const MainSection = () => {
    
const getHomePageData = async () => {

    const [albums, setAlbums] = useState([]);
    const [ trending, setTrending] = useState([]);
    const res = await axios.get("https://saavn.me/modules?language=hindi");
    const {data} = res.data;
    console.log(data);
    setAlbums(data.albums);
    setTrending(data.trending);
};
useEffect(() => {
   getHomePageData();
}, []);

  return (
    <div>
        
    </div>
  )
}

export default MainSection;