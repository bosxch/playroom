// WhyComponent.tsx
import React from "react";
import MockupComponent from "../MockupsComponent/MockupComponentIndex";
import ProsComponent from "./ProsComponent";
import mockupImg from "../../../public/images/captura-footer-bot.a.png";
const WhyComponent = () => {
  return (
    <div
      className="bg-transparent rounded-full w-full"
      style={{ padding: "3vw" }}
    >
      <MockupComponent
        title="¿Por qué un Chatbot?"
        components={[
          ,
          <div key="1">
            <p>
              En la era digital actual, la implementación de tecnologías
              avanzadas se ha vuelto imperativa para el éxito empresarial. Aoki,
              como líder innovador, reconoce la importancia de mejorar la
              interacción con sus clientes y optimizar la eficiencia operativa.
              ¿Por qué un Chatbot? Los Chatbots, impulsados por la inteligencia
              artificial (IA), representan una solución integral para ofrecer un
              servicio al cliente ágil y personalizado.
            </p>
          </div>,
          <div key="1">
            <p className="font-bold text-xl">
              Nuestro Chatbot de última generación
            </p>
            <span className="font-semibold"></span> Un verdadero asistente
            virtual, está diseñado para comprender y responder a las necesidades
            de los usuarios, brindando una experiencia interactiva única.
            Descubra cómo la implementación estratégica de la tecnología de
            Chatbot de Aoki puede transformar la forma en que interactuamos y
            mejoramos la conexión con nuestros clientes, impulsando así el
            crecimiento y la satisfacción del cliente en la era digital.
          </div>,
        ]}
        imageSrc={'/static/videos/videoAuto.mp4'}
        imageAlt="Descripción de la imagen"
        direction="textFirst"
        type="mp4"
      />
      <ProsComponent />
    </div>
  );
};

export default WhyComponent;
