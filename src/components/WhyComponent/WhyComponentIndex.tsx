// WhyComponent.tsx
import React from "react";
import MockupComponent from "../MockupsComponent/MockupComponentIndex";
import ProsComponent from "./ProsComponent";
import mockupImg from '../../../public/images/captura-para-footer-cromo.png'
const WhyComponent = () => {
  return (
    <div className="bg-transparent rounded-full w-full" style={{ padding: '3vw' }}>
      <MockupComponent
        title="Descubre el Futuro de la Eficiencia Empresarial con Aoki"
        components={[
          <div key="1"><span className="font-semibold">Experiencia del Usuario sin Precedentes</span> - Permite a tus clientes hacer consultas las 24 horas y gestioná sus interacciones</div>,
          <div key="2">
            <p className="font-bold text-xl">Adaptabilidad sin Límites</p>
            <p>Sabemos que cada empresa es única. Por eso, nuestro software es altamente personalizable y se adapta a las necesidades específicas de tu negocio. Ya sea que estés en manufactura, logística, o cualquier otro sector, Aoki se adapta para maximizar tu potencial</p>
          </div>,
        ]}
        imageSrc={mockupImg}
        imageAlt="Descripción de la imagen"
        direction="textFirst"
      />
        <ProsComponent/>
        
    </div>
  );
};

export default WhyComponent;
