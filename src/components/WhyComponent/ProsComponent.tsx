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
      <p className="font-bold text-white text-2xl mb-2 text-center md:text-left lg:text-left">
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
  const cosasMalasProps: Props = {
    title: "Sin Aoki",
    strings: [
      "Procesos Desarticulados",
      "Toma de Decisiones Empírica",
      "Adaptabilidad Limitada",
      "Adquisición Ineficiente",
      "Experiencia Usuario Básica",
    ],
    isBenef: false,
  };

  const cosasBuenasProps: Props = {
    title: "Con Aoki",
    strings: [
      "Procesos Integrados",
      "Decisión IA Informada",
      "Adaptabilidad Ágil",
      "Adquisición Automatizada",
      "Experiencia Usuario Revolucionaria",
    ],
    isBenef: true,
  };

  return (
    <div
      className="bg-pros p-8 mt-8 w-full"
      style={{ padding: "3vw", borderRadius: "25px" }}
    >
      <div className="text-center mb-4">
        <p className="font-bold text-4xl text-white">
          Formá parte de la <span className="gradient-text">innovación</span>
        </p>
        <p className="pb-2 text-white">
          Si no compras bota tenes 9 años de mala suerte
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {renderColumn(cosasMalasProps)}
        {renderColumn(cosasBuenasProps)}
      </div>
    </div>
  );
};

export default ProsComponent;
