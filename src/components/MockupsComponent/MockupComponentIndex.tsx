'use client'
import React, { ReactNode, useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
interface MockupComponentProps {
  title: string;
  components: ReactNode[];
  imageSrc: any; // Change the type to string if it's a path
  imageAlt: string;
  direction: "textFirst" | "imageFirst";
  type: 'mp4' | 'png';
}

const MockupComponent: React.FC<MockupComponentProps> = ({
  title,
  components,
  imageSrc,
  imageAlt,
  direction,
  type
}) => {
  const renderComponents = () => {
    return components.map((component, index) => (
      <div key={index} className="mb-4">
        {component}
      </div>
    ));
  };

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


  const renderTextFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {renderComponents()}
        </div>
        <div className="flex justify-center items-center h-full">
          { 
          type === 'png' ? <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        :
        <>
        <div ref={videoRef} className="flex justify-center items-center h-full">
        <ReactPlayer
          url={imageSrc}
          controls={false}
          playing={isVisible}
          muted={true}
          light={false}
          pip={true}
        />
      </div>

    <source src={imageSrc} type="video/mp4" /></>
        }
        </div>
      </div>
    );
  };

  const renderImageFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {renderComponents()}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent rounded-full pb-8 w-full">
      <div className="bg-transparent rounded-xl w-100">
        {direction === "textFirst" ? renderTextFirst() : renderImageFirst()}
      </div>
    </div>
  );
};

export default MockupComponent;
