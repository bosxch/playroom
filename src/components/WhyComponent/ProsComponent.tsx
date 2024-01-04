import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  title: string;
  strings: string[];
  isBenef: boolean;
}

const renderColumn = ({ title, strings, isBenef }: Props) => (
  <div className="flex flex-col items-center">
    <div className="text-left flex flex-col items-left">
    <p className="font-bold text-white text-lg text-left mb-2">{title}</p>
    {strings.map((text, index) => (
      <p key={index} className="text-left text-white flex flex-row">
        {isBenef ? (
          <span className="icon h-full flex align-center justify-left mr-2"><FaCheck color='#fe9c00' /></span>
        ) : (
          <span className="icon h-full flex align-center justify-left mr-2"><IoCloseOutline color='#fe9c00' /></span>
        )}
        {text}
      </p>
    ))}</div>
  </div>
);

const ProsComponent = () => {
  const cosasMalasProps: Props = {
    title: 'Cosas Malas',
    strings: ['Procesos Desarticulados', 'Toma de Decisiones Empírica', 'Adaptabilidad Limitada', 'Adquisición Ineficiente', 'Experiencia Usuario Básica'],
    isBenef: false,
  };

  const cosasBuenasProps: Props = {
    title: 'Cosas Buenas',
    strings: ['Procesos Integrados', 'Decisión IA Informada', 'Adaptabilidad Ágil', 'Adquisición Automatizada', 'Experiencia Usuario Revolucionaria'],
    isBenef: true,
  };

  return (
    <div className="bg-pros rounded-full p-8 w-full" style={{ padding: '3vw' }}>
      <div className="text-center mb-4">
        <p className="font-bold text-4xl text-white">Formá parte de la <span className="gradient-text">innovación</span></p>
        <p className="pb-2 text-white">Si no compras bota tenes 9 años de mala suerte</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">  {/* gap-4 */}
        {renderColumn(cosasMalasProps)}
        {renderColumn(cosasBuenasProps)}
      </div>
    </div>
  );
};

export default ProsComponent;
