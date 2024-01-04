import React from 'react';
// import AokiRocket from './AokiRocket';

const Banner = () => {
    return (
        <div className='banner-main-aoki flex flex-col h-full'>

<div className="flex flex-col sm:flex-row h-100 w-100 justify-center banner-container bg-transparent">

        {/* Sección del texto */}
        <div className="w-full p-4 sm:p-8 flex flex-col items-center justify-center text-center text-container-banner">
          <p className="text-white text-xl sm:text-2xl lg:text-4xl font-bold mb-4 font-poppins text-center w-full sm:text-center">
            Querés <span className="gradient-text">innovación</span>, querés <span className="gradient-text">Aoki</span>
          </p>
          <h1 className="text-white text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 font-poppins text-center sm:text-center w-full">
            A la <span className="gradient-text">suerte</span> <br />hay que ayudarla
          </h1>
          <div className='second-title-compu'>
          <p className="text-white text-lg sm:text-lg lg:text-lg font-bold mb-8 font-poppins text-center w-full sm:text-center">
          <span className="gradient-text">Automatizarte</span> nunca fue tan <span className="gradient-text">fácil</span>
          </p>
          <button className="w-60 btn-bg-color text-white p-2 mb-2 mt-6">Empezá tu prueba gratuita</button>
          <p className="text-white text-sm mb-4">Podes empezar en menos de 60 segundos</p>
          </div>
        </div>

        {/* Sección de la animación */}
        {/* <div className="w-full sm:w-1/3 md:w-1/3 h-screen sm:h-auto lg:h-full p-4 sm:p-8 flex items-center justify-center animation-container-banner second-title-compu">
          <AokiRocket />
        </div> */}
        
        {/* Texto visible solo en móviles */}
        <div className="w-full sm:w-1/2 md:w-1/2 p-4 sm:p-8 flex flex-col items-center justify-center animation-container-banner sm:hidden">
          <p className="text-white text-lg sm:text-lg lg:text-lg font-bold mb-8 font-poppins text-center w-full sm:text-left">
            <span className="gradient-text">Automatizarte</span> nunca fue tan <span className="gradient-text">fácil</span>
          </p>
          <button className="w-60 text-white p-2 mb-2 mt-6 btn-bg-color">Empezá tu prueba gratuita</button>
          <p className="text-white text-sm mb-4">Podes empezar en menos de 60 segundos</p>
        </div>
      </div>
      </div>

    )
}

export default Banner