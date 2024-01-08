import React from "react";
// import AokiRocket from './AokiRocket';
import BtnCallToAction from "../BtnCTA";
import checkImg from "../../../public/images/check.png";
import Image from "next/image";
import ReactPlayer from "react-player";
import Video from "../VideoComponent/VideoComponentIndex";
const Banner = () => {
  return (
    <div className="banner-main-aoki flex flex-col h-full">
      <div className="flex flex-col sm:flex-row h-100 w-100  p-8  justify-start banner-container bg-transparent" style={{paddingTop: '2vh'}}>
        {/* Sección del texto */}
        <div className="w-full p-8 sm:p-8 flex flex-col items-center justify-start text-center text-container-banner" >
          <p className="text-white text-xl sm:text-2xl lg:text-4xl font-bold mb-4 font-poppins text-center w-full sm:text-center">
            Querés <span className="gradient-text">innovación</span>, querés{" "}
            <span className="gradient-text">Aoki</span>
          </p>
          <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 font-poppins text-center sm:text-center w-full">
            Subí de nivel <span className="gradient-text">tu empresa</span>
            <br />
            de la mano de la <span className="gradient-text">IA</span>
          </h1>
          <div className="second-title-compu">
            <p className="text-white text-lg sm:text-lg lg:text-lg font-bold mb-8 font-poppins text-center w-full sm:text-center">
              <span className="gradient-text">Automatizarte</span> nunca fue tan{" "}
              <span className="gradient-text">fácil</span>
            </p>
            {/* <button className="w-60 btn-bg-color text-white p-2 mb-2 mt-6">Empezá tu prueba gratuita</button> */}
            <div className="btn-container">
              <BtnCallToAction
                text={"Empezá tu prueba gratuita hoy"}
                rocket={false}
                className={"w-60 text-white p-2 mb-2 mt-6 btn-bg-color"}
              />
            </div>
            <p className="text-white text-sm mb-4">
              Podes empezar en menos de 60 segundos
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full p-8 sm:space-x-8 absolute bottom-0 items-banner mr-8 ">
            <div
              className="flex flex-row items-center text-white"
              style={{ marginLeft: 0 }}
            >
              <Image
                src={checkImg}
                alt="check"
                height={30}
                width={30}
                className="mr-2"
              />
              <p>Disminuye tiempos de espera</p>
            </div>
            <div
              className="flex flex-row items-center text-white"
              style={{ marginLeft: 0 }}
            >
              <Image
                src={checkImg}
                alt="check"
                height={30}
                width={30}
                className="mr-2"
              />
              <p>Mejora la experiencia de tus usuarios</p>
            </div>
            <div
              className="flex flex-row items-center text-white"
              style={{ marginLeft: 0 }}
            >
              <Image
                src={checkImg}
                alt="check"
                height={30}
                width={30}
                className="mr-2"
              />
              <p>Utiliza la IA para agilizarte</p>
            </div>
          </div>
        </div>

        {/* Sección de la animación */}
        {/* <div className="w-full sm:w-1/3 md:w-1/3 h-screen sm:h-auto lg:h-full p-4 sm:p-8 flex items-center justify-center animation-container-banner second-title-compu">
          <AokiRocket />
        </div> */}

        {/* Texto visible solo en móviles */}
        <div className="w-full sm:w-1/2 md:w-1/2 p-4 sm:p-8 flex flex-col items-center justify-center animation-container-banner sm:hidden">
          <p className="text-white text-lg sm:text-lg lg:text-lg font-bold mb-8 font-poppins text-center w-full sm:text-left">
            <span className="gradient-text">Automatizarte</span> nunca fue tan{" "}
            <span className="gradient-text">fácil</span>
          </p>
          {/* <button className="w-60 text-white p-2 mb-2 mt-6 btn-bg-color">Empezá tu prueba gratuita</button> */}
          <Video width="90vw" height="auto" />
          <div className="btn-container">
            <BtnCallToAction
              text={"Empezá tu prueba gratuita hoy"}
              rocket={false}
              className={"w-60 text-white p-2 mb-2 mt-6 btn-bg-color"}
            />
          </div>
          <p className="text-white text-sm mb-4">
            Podes empezar en menos de 60 segundos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
