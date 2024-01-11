"use client";
import React, { ReactNode, useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import BtnCallToAction from "../BtnCTA";

interface MockupComponentProps {
  copete: string;
  title: string;
  components: ReactNode[];
  imageSrc: any; // Change the type to string if it's a path
  imageAlt: string;
  direction: "textFirst" | "imageFirst";
  type: "mp4" | "png";
}

const MockupComponent: React.FC<MockupComponentProps> = ({
  copete,
  title,
  components,
  imageSrc,
  imageAlt,
  direction,
  type,
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
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const boxShadowStyle =
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
  function aplyBR(texto: string) {
  const textoConBr = texto.replace(/<br\/>/g, '<br>');

  return <div dangerouslySetInnerHTML={{ __html: textoConBr }} />;

  }
  const renderTextFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex flex-col text-white-body" style={{padding: '.5rem'}}>
          <p className="text-xl font-semi-bold text-sky ">{copete}</p>
          <p className="text-4xl font-bold mb-4 text-white-body">{aplyBR(title)}</p>
          {renderComponents()}
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full" style={{width: windowWidth < 700 ? '90vw' : '100%'}}>
          {type === "png" ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-lg"
              style={{borderRadius: '25px', overflow: 'hidden'}}
            />
          ) : (
            <>
              <div
                ref={videoRef}
                className="flex justify-center items-center h-full"
                style={{ width: windowWidth < 700 ? "90vw" : "100%", borderRadius: '25px', overflow: 'hidden' }}
              >
                <ReactPlayer
                  url={imageSrc}
                  controls={false}
                  playing={isVisible}
                  height={'auto'}
                  muted={true}
                  light={false}
                  loop={true}
                  pip={true}
                  width={'100%'}
                />
              </div>

              <source src={imageSrc} type="video/mp4" />
            </>
          )}
          <BtnCallToAction
            text={"Iniciá gratis hoy >>"}
            rocket={false}
            className={
              "w-100 text-white text-bold text-xl p-2 mb-2 mt-6 btn-bg-color"
            }
            style={{ width: (title.toUpperCase() === '¿POR QUÉ UN CHATBOT?' ||  title.toUpperCase() === 'MANEJÁ MERCADO LIBRE DESDE TU WHATSAPP') && windowWidth < 700 ? "100% " : '100%' }}
          />{" "}
        </div>
      </div>
    );
  };

  const renderImageFirst = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center h-full w-full" style={{width: windowWidth < 700 ? '90vw' : '100%'}}>
        {type === "png" ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-lg"
              style={{borderRadius: '25px', overflow: 'hidden'}}

            />
          ) : (
            <>
              <div
                ref={videoRef}
                className="flex justify-center items-center h-full"
                style={{ width: windowWidth < 700 ? "90vw" : "100%", borderRadius: '25px', overflow: 'hidden' }}
              >
                <ReactPlayer
                  url={imageSrc}
                  controls={false}
                  playing={isVisible}
                  height={'auto'}
                  muted={true}
                  light={false}
                  loop={true}
                  pip={true}
                  width={'100%'}
                />
              </div>

              <source src={imageSrc} type="video/mp4" />
            </>
          )}
          <div className="w-full">
            <BtnCallToAction
              text={"Iniciá gratis hoy >>"}
              rocket={false}
              className={
                "w-full text-white text-bold text-xl p-2 mb-2 mt-6 btn-bg-color"
              }
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="flex flex-col text-white-body" style={{padding: '.5rem'}}>
          <p className="text-xl font-semi-bold text-sky ">{copete}</p>
          <h2 className="text-4xl font-bold mb-4 text-white-body ">{aplyBR(title)}</h2>
          {renderComponents()}
        </div>
      </div>
    );
  };

  return (
    <div
    className="bg-white rounded-3xl pb-8 w-full padding-mockup-mobile"
      style={{ padding: "3vw", boxShadow: boxShadowStyle, marginBottom: '4vh' }}
      
    >
      <div className="bg-transparent  w-100 ">
        {direction === "textFirst" || windowWidth < 700
          ? renderTextFirst()
          : renderImageFirst()}
      </div>
    </div>
  );
};

export default MockupComponent;
