import React from 'react';
import AokiRocket from '@/components/AokiRocket';

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full banner-main-aoki justify-center">

      {/* Sección del texto */}
      <div className="w-full sm:w-1/3 p-4 sm:p-8 flex flex-col items-center justify-center text-left text-container-banner">
        <h1 className="text-white text-4xl sm:text-4xl lg:text-6xl font-bold mb-8 font-poppins text-center sm:text-left w-full">
          A la <span className="gradient-text">suerte</span> <br />hay que ayudarla
        </h1>
        <p className="text-white text-lg sm:text-lg lg:text-lg font-bold mb-8 font-poppins text-center w-full sm:text-left">
          Yacaré que se <span className="gradient-text">duerme</span>, es <span className="gradient-text">cartera</span>
        </p>
      </div>

      {/* Sección de la animación */}
      <div className="w-full sm:w-1/3 md:w-1/3 h-screen sm:h-auto lg:h-full p-4 sm:p-8 flex items-center justify-center animation-container-banner">
        <AokiRocket />
      </div>

    </div>
  );
};

export default Home;
