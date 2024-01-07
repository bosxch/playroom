// src/components/VideoComponent/VideoComponentIndex.tsx

"use client";
import React from "react";
// Indicar a TypeScript que el módulo es de tipo 'any'
// @ts-ignore
import videoMP4 from "../../../public/video/AOKI-ABOUT.mp4";
import ReactPlayer from "react-player";

const Video = ({ width = "auto", height = "80vh" }) => {
  const shouldDisplayText = width === "auto";

  return (
    <div
      className={`p-8 flex flex-row text-xl relative ${
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
        url={videoMP4}
        controls={true}
        light={false}
        pip={true}
      />
      <source src={videoMP4} type="video/mp4" />
    </div>
  );
};

export default Video;
