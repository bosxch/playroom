import React from "react";
import BtnCallToAction from "./BtnCTA";

const SectionCTA = () => {
  return (
    <div className="p-8 mt-8 w-full flex justify-center items-center flex-col text-center">
      <p className="pb-2 text-white-body">¿Estas listo para agilizar tu comunicacion?</p>
      <p className="font-bold text-4xl text-white-body">
      Comenza <span className="gradient-text">gratis</span> hoy con tu         <span className="gradient-text">Chatbot</span>

      </p>
      <div className="btn-container mt-6">
        <BtnCallToAction
          text={"Empezá gratis hoy"}
          rocket={false}
          className={"w-60 text-white p-2 mb-2 btn-bg-color btn-section-cta"}
        />
      </div>
      <p className="text-white text-sm mt-4 text-white-body">
        Podés empezar en menos de 60 segundos
      </p>
    </div>
  );
};

export default SectionCTA;
