import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  title: string;
  strings: string[];
  isBenef: boolean;
}

const renderColumn = ({ title, strings, isBenef }: Props) => (
  <div className="flex flex-col items-center pt-4">
    <div className="text-left container-items-pros">
      <p className="font-bold text-white text-2xl mb-2 text-center md:text-left lg:text-left ">
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
          <p className="text-white">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProsComponent = () => {
  const cosasMalasProps = {
    title: "Antes de Aoki",
    strings: [
      "Atención Descentralizada",
      "Respuestas Manuales",
      "Interacción Limitada",
      "Difícil Seguimiento de Conversaciones",
      "Experiencia Usuario Básica",
    ],
    isBenef: false,
  };

  const cosasBuenasProps = {
    title: "Después de Aoki",
    strings: [
      "Atención Centralizada con Chatbot",
      "Respuestas Automáticas e Informadas por IA",
      "Interacción Mejorada",
      "Seguimiento Eficiente de Conversaciones",
      "Experiencia Usuario Revolucionaria",
    ],
    isBenef: true,
  };

  return (
    <div
      className=" p-8 mt-8 w-full flex flex-col items-center"
      style={{ padding: "3vw" }}
    >
      <div className="text-center mb-4">
        <p className="font-bold text-4xl text-white-body ">
        <span className="gradient-text">Tu Asistente Virtual</span> es el <span className="gradient-text">futuro</span>  
        </p>
        <p className="pb-2 pt-2 text-white text-sm text-white-body">
          Si no compras bota tenes 9 años de mala suerte
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pros-container" >
        <div className='bg-pros' style={{borderRadius: '25px', width: 'fitContent', padding: '0 3vw 0vw 3vw'}}>
        {renderColumn(cosasMalasProps)}

        </div>
        <div className='bg-pros' style={{borderRadius: "25px"}}>
        {renderColumn(cosasBuenasProps)}

          </div>
      </div>
    </div>
  );
};

export default ProsComponent;
