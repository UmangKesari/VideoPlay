import React from "react";

const VideoCard = ({info}) => {
  

  if(info ==null) {
    return null;
  }
  console.log("Video card", info);
  const {snippet, statistics} = info;
  console.log("Snippet ", snippet);
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
