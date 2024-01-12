import React from "react";
import M1 from "../../../public/images/logos/testimonio-M (1).jpg";
import M2 from "../../../public/images/logos/testimonio-M (2).jpg";
import H1 from "../../../public/images/logos/testimonio-H.jpg";
import Image from "next/image";

import distriLogo from '../../../public/images/logos/distri 300-02.png'
import factuLogo from '../../../public/images/logos/facturante 300-02.png'
import utnLogo from '../../../public/images/logos/utn 300-02.png'

const TestimonialsComponent = () => {
  const testimonios = [
    {
      image: M1,
      name: "Jimena Balabui",
      company: distriLogo,
      testimonio:
        "Mejoró la gestión de nuevos ingresantes considerablemente, bajando los tiempos de respuesta un 80% y nos permitió tener un registro más eficiente de potenciales oportunidades comerciales",
    },
    {
      image: H1,
      name: "Juan Pérez",
      company: utnLogo,
      testimonio:
        "Increíblemente satisfecho con los resultados obtenidos. La implementación de esta solución elevó nuestra eficiencia operativa y facilitó la toma de decisiones estratégicas. Recomiendo encarecidamente su uso.",
    },
    {
      image: M2,
      name: "Lorena Comino",
      company: factuLogo,
      testimonio:
        "Esta herramienta ha cambiado la forma en que abordamos los desafíos empresariales. Nos ha brindado insights valiosos y ha mejorado nuestra capacidad para adaptarnos rápidamente a un entorno comercial dinámico.",
    },
  ];
  const boxShadowStyle = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

  return (
    <div
      className="flex flex-wrap justify-center items-center"
      style={{ padding: "0 12vw 4vw 12vw" }}
    >
      {testimonios.map((testimonio, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 p-2 transition-transform transform hover:scale-105"
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <div
            className="bg-white p-6 rounded-md margin-mobile"
            style={{ boxShadow: boxShadowStyle }}
          >
            <div className="w-100 flex items-center justify-center">
              <Image
                src={testimonio.image}
                alt="Client Image"
                className="image-testimonios"
              />
            </div>
            <p
              className="text-lg text-center font-bold pt-4"
              style={{ color: "#0881a3" }}
            >
              {testimonio.name}
            </p>
            <div className="w-100 flex items-center justify-center">
              <Image
                src={testimonio.company}
                alt="Client Logo Company Image"
                className="image-testimonios-logo"
              />
            </div>
            <p
              className="mb-4 text-center text-md"
              style={{ color: "#0881a3" }}
            >
              {testimonio.testimonio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsComponent;
