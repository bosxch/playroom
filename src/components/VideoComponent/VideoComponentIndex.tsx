"use client";

import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FaRegCirclePlay } from "react-icons/fa6";

interface VideoProps {
  width?: string;
  height?: string;
  className?: string;
}

const Video: React.FC<VideoProps> = ({ width = "auto", height = "75vh", className = '' }) => {
  const shouldDisplayText = width === "auto";
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Cambia este valor según tus necesidades
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);


  return (
    <>
     {!shouldDisplayText && (
        
        <p className={`flex justify-center align-center text-center bg-line-video text-white font-bold ${className}`} style={{alignItems: 'center', fontSize: 'small', width: '90vw', display: width === '90vw' ? '' : 'none'}}>
          <i style={{margin: '0 1rem'}}><FaRegCirclePlay fontSize={15}/></i>
          Somos Aoki, somos innovación, conocenos
        </p>
      )}
        <div className={`w-100 h-100 flex justify-center align-center p-8  ${className}`} >
    <div
      className={`p-8 flex h-100 flex-row justify-center align-center text-xl relative  ${
        shouldDisplayText ? "hidden md:block lg:block" : "md:hidden lg:hidden"
      }  ${className}`} style={{padding: className ? '0' : ''}}
    >
      {shouldDisplayText && (
        
        <p className="w-full flex justify-center align-center text-center bg-line-video text-white font-bold p-4" style={{alignItems: 'center'}}>
          <i style={{margin: '0 1rem'}}><FaRegCirclePlay fontSize={30}/></i>
          Somos Aoki, somos innovación, conocenos
        </p>
      )}
             <div ref={videoRef}>
          <ReactPlayer
            width={width}
            height={height}
            url="/static/videos/VIDEO-HOME-ABOUT.mp4"
            controls={true}
            playing={isVisible}
            muted={true}
            light={false}
            pip={true}
          />
        </div>

      <source src='/static/videos/VIDEO-HOME-ABOUT.mp4' type="video/mp4" />
    </div></div>

    </>
  );
};

export default Video;
