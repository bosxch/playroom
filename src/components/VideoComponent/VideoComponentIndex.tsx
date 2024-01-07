"use client";

import React from "react";
import ReactPlayer from "react-player";

const Video = ({ width = "auto", height = "75vh" }) => {
  const shouldDisplayText = width === "auto";

  return (
    <div
      className={`p-8 flex h-100 flex-row justify-center align-center text-xl relative ${
        shouldDisplayText ? "hidden md:block lg:block" : "md:hidden lg:hidden"
      }`}
    >
      {shouldDisplayText && (
        <p className="w-full text-center bg-line-video text-white font-bold p-4">
          Vamos a conocernos un poco más, somos Aoki
        </p>
      )}
      <ReactPlayer
        width={width}
        height={height}
        url='/static/videos/VIDEO-HOME-ABOUT.mp4'
        controls={true}
        light={false}
        pip={true}
      />
      <source src='/static/videos/VIDEO-HOME-ABOUT.mp4' type="video/mp4" />
    </div>
  );
};

export default Video;
