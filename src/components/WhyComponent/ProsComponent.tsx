import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  title: string;
  strings: string[];
  isBenef: boolean;
}

const renderColumn = ({ title, strings, isBenef }: Props) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-left container-items-pros">
      <p className="font-bold text-white text-2xl mb-2 text-center md:text-left lg:text-left  pb-4 title-testim-responsive">
        {title}
      </p>
      {strings.map((text, index) => (
        <div key={index} className="flex items-center mb-2">
          <span className="icon mr-2">
            {isBenef ? (
              <FaCheck color="#fe9c00" />
            ) : (
              <IoCloseOutline color="#fe9c00" />
            )}
          </span>
          <p className="text-white mockup-text-responsive">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProsComponent = () => {
  const cosasMalasProps = {
    title: "Antes de Aoki",
    strings: [
      "Muchas pestañas abiertas",
      "Se pierden chats de clientes",
      "Largos tiempos de respuesta",
      "Atención lenta",
    ],
    isBenef: false,
  };

  const cosasBuenasProps = {
    title: "Después de Aoki",
    strings: [
      "Centralización de tareas",
      "No te perdés ni un mensaje",
      "Atención autmática al instante",
      "Respuestas en 1 segundo",
    ],
    isBenef: true,
  };

  const boxShadowStyle = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

  return (
    <div className=" p-8 mt-8 w-full flex flex-col items-center padding-mobile">
      <div className="text-center mb-4">
        <p className="font-bold text-4xl text-white-body ">
          <span className="gradient-text">Tu Asistente Virtual</span> es el{" "}
          <span className="gradient-text">futuro</span>
        </p>
        <p className="pb-2 pt-2 text-white text-sm text-white-body">
          Veamos sus ventajas
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pros-container">
        <div
          className="bg-pros pros-mobile"
          style={{ borderRadius: "25px", width: "fitContent" }}
        >
          {renderColumn(cosasMalasProps)}
        </div>
        <div
          className="bg-pros"
          style={{ borderRadius: "25px", boxShadow: boxShadowStyle }}
        >
          {renderColumn(cosasBuenasProps)}
        </div>
      </div>
    </div>
  );
};

export default ProsComponent;
