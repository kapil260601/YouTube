import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import axios from "axios";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      // const response = await axios.get(YOUTUBE_VIDEOS_API);
      const response = await axios.get(YOUTUBE_VIDEOS_API);
      const json = await response.data;
      // console.log(json.items, "json");
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="flex flex-wrap">
        {videos[0] && <AdVideoCard info={videos[0]} />}
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
