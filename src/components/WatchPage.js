import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log("Params ", searchParams.get("v")); //keyname is v

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="px-5">
      <iframe
        width="900"
        height="480"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
