import React from "react";

const TestimonialsComponent = () => {
  const testimonios = [
    {
      name: "Margarita Flores del Campo",
      rol: "Gerente Partido de la Costa",
      company: "UTN",
      testimonio:
        "Mejoró la gestión de nuevos ingresantes considerablemente, bajando los tiempos de respuesta un 80% y nos permitió tener un registro más eficiente de potenciales oportunidades comerciales",
    },
    {
      name: "Juan Pérez",
      company: "Aquasol",
      rol: "Inversor",
      testimonio:
        "Increíblemente satisfecho con los resultados obtenidos. La implementación de esta solución elevó nuestra eficiencia operativa y facilitó la toma de decisiones estratégicas. Recomiendo encarecidamente su uso.",
    },
    {
      name: "Maria del Cristo",
      rol: "",
      company: "Distrisuper",
      testimonio:
        "Esta herramienta ha cambiado la forma en que abordamos los desafíos empresariales. Nos ha brindado insights valiosos y ha mejorado nuestra capacidad para adaptarnos rápidamente a un entorno comercial dinámico.",
    },
  ];
  const boxShadowStyle =
    "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

  return (
    <div
      className="flex flex-wrap justify-center items-center"
      style={{ padding: "4vw" }}
    >
      {testimonios.map((testimonio, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 p-2 transition-transform transform hover:scale-105"
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <div className="bg-white p-6 rounded-md margin-mobile" style={{boxShadow: boxShadowStyle}}>
            <p
              className="text-lg text-center font-bold mb-2"
              style={{ color: "#0881a3" }}
            >
              {testimonio.name}
            </p>
            <p
              className="mb-4 text-center text-sm"
              style={{ color: "#0881a3" }}
            >
              {testimonio.rol !== "" ? testimonio.rol : null} de{" "}
              {testimonio.company}
            </p>
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
