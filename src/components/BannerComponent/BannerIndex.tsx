import React from "react";
// import AokiRocket from './AokiRocket';
import BtnCallToAction from "../BtnCTA";
import checkImg from "../../../public/images/check-nyb.png";
import Image from "next/image";
import ReactPlayer from "react-player";
import Video from "../VideoComponent/VideoComponentIndex";
const Banner = () => {
  return (
    <div className="banner-main-aoki flex flex-col h-full " style={{paddingTop: '0vh'}}>
      <div className="flex flex-col sm:flex-row h-100 w-100  p-4  justify-center banner-container bg-transparent" style={{paddingTop: '0vh', marginBottom: '5vh'}}>
        {/* Sección del texto */}
        <div className="w-full p-4 sm:p-8 flex flex-col items-center justify-center text-center text-container-banner" >
          <p className="text-white-body p-4 text-xl sm:text-2xl lg:text-4xl font-bold mb-4 font-poppins text-center w-full sm:text-center">
          ¿Necesitas <span className="gradient-text">automatizar la comunicacion</span> en tu empresa?
          </p>
          <h1 className="text-white-body text-3xl sm:text-6xl lg:text-8xl font-bold  font-poppins text-center sm:text-center w-full">
          Potenciá tú <span className="gradient-text">Estrategia</span>  
            <br />
            con un <span className="gradient-text">Chatbot con IA</span>
          </h1>
          <div className="second-title-compu">
            <p className="text-white-body text-lg sm:text-lg lg:text-lg font-bold  font-poppins text-center w-full sm:text-center">
            Lográ que <span className="gradient-text">tus clientes</span> se <span className="gradient-text">autogestionen</span>
            </p>
            {/* <button className="w-60 btn-bg-color text-white p-2 mb-2 mt-6">Empezá tu prueba gratuita</button> */}
            <div className="btn-container">
              <BtnCallToAction
                text={"Iniciá gratis hoy"}
                rocket={false}
                className={"w-60 text-white text-bold text-xl p-2 mb-2 mt-6 btn-bg-color"}
              />
            </div>
            {/* <p className="text-white text-sm mb-4">
              Podes empezar en menos de 60 segundos
            </p> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full p-8 sm:space-x-8 absolute bottom-0 items-banner mr-8 ">
            <div
              className="flex flex-row items-center text-white-body"
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
              className="flex flex-row items-center text-white-body"
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
              className="flex flex-row items-center text-white-body"
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
          <p className="text-white-body text-sm pt-4 mt-2 sm:text-lg lg:text-lg font-bold font-poppins text-center w-full sm:text-left">
          Lográ que <span className="gradient-text">tus clientes</span> se <span className="gradient-text">autogestionen</span>
          </p>

          {/* <button className="w-60 text-white p-2 mb-2 mt-6 btn-bg-color">Empezá tu prueba gratuita</button> */}
          <div className="btn-container">
          <BtnCallToAction
                text={"Inicia gratis hoy"}
                rocket={false}
                className={"w-60 text-white text-bold text-xl p-2 mb-2 mt-6 btn-bg-color"}
              />
          </div>
          {/* <p className="text-white text-sm mb-4">
            Podes empezar en menos de 60 segundos
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
