import React, { ReactNode } from "react";
import BenefitItem from "./BenefitItem";
import { CiClock1 } from "react-icons/ci";
import { TbSettingsAutomation } from "react-icons/tb";
import { GrOptimize } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const BenefitsComponent = () => {
  const benefits = [
    {
      icon: <CiClock1 fontSize="5vh" color="#0881a3" />,
      title: "Disminuí tiempos",
    },
    {
      icon: <TbSettingsAutomation fontSize="5vh" color="#0881a3" />,
      title: "Automatizate",
    },
    {
      icon: <GrOptimize fontSize="5vh" color="#0881a3" />,
      title: "Apunta a la eficiencia",
    },
    {
      icon: <FaRobot fontSize="5vh" color="#0881a3" />,
      title: "Meté la IA en tu equipo",
    },
    {
      icon: <FaUsers fontSize="5vh" color="#0881a3" />,
      title: "Cubrí mejor a tus clientes",
    },
  ];

  return (
    <div
      className="benefits-container p-8 bg-transparent flex justify-center w-full padding-mobile"
      style={{ padding: "4vw" }}
    >
      <div className="benefits-displayer grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4 lg:grid-cols-5 lg:gap-4 w-75 md:w-full lg:w-full" style={{margin: '3rem 0'}}>
        {" "}
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} icon={benefit.icon} title={benefit.title} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsComponent;
