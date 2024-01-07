import React from "react";
import BtnCallToAction from "./BtnCTA";

const SectionCTA = () => {
  return (
    <div className="p-8 mt-8 w-full flex justify-center items-center flex-col text-center">
      <p className="pb-2 text-white">¿Estás list@ para subir de nivel?</p>
      <p className="font-bold text-4xl text-white">
        Entonces <span className="gradient-text">empezá hoy</span> mismo{" "}
        <span className="gradient-text">tu experiencia</span> en Aoki{" "}
        <span className="gradient-text">GRATIS</span>
      </p>
      <div className="btn-container mt-6">
        <BtnCallToAction
          text={"Empezá tu prueba gratuita HOY"}
          rocket={false}
          className={"w-60 text-white p-2 mb-2 btn-bg-color btn-section-cta"}
        />
      </div>
      <p className="text-white text-sm mt-4">
        Podés empezar en menos de 60 segundos
      </p>
    </div>
  );
};

export default SectionCTA;
