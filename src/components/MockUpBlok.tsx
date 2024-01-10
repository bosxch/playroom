import React, { ReactNode} from "react";
import MockupComponent from "./MockupsComponent/MockupComponentIndex";
import mockupImg from "../../public/images/captura-para-footer-cromo.png";
import ArrowLeft from './../../public/images/Arrow-Left-Light-Blue-Home.svg'
import ArrowRight from './../../public/images/Arrow-Right-Light-Blue-Home.svg'
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

export interface MockupComponentProps {
  copete: string;
  title: string;
  components: { key: string; content: React.ReactNode }[];
  imageSrc: any; 
  imageAlt: string;
  direction: "textFirst" | "imageFirst";
  type: 'mp4' | 'png';
}


const MockUpBlok = () => {

  const arrowContainerStyle = {
    width: '100%',
    position: 'relative' as const,
    padding: '10px 0',  // padding-top: 10px; padding-bottom: 10px;
  };

  const arrowStyleLeft = {
    position: 'absolute' as const,
    left: '-50px',  
    bottom: '-100px',
  };

  const arrowStyleRight = {
    position: 'absolute' as const,
    right: '-50px',  
    bottom: '-100px',
  };

  const MockupsData: MockupComponentProps[] = [
    {
        copete: 'Aoki es...',
        title: "Descrubrí todo lo que podes hacer con tu chatbot",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold">
                Experiencia del Usuario sin Precedentes
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <>
                <p className="font-bold text-xl">Adaptabilidad sin Límites</p>
                <p>
                  Sabemos que cada empresa es única. Por eso, nuestro software es
                  altamente personalizable y se adapta a las necesidades específicas
                  de tu negocio. Ya sea que estés en manufactura, logística, o
                  cualquier otro sector, Aoki se adapta para maximizar tu potencial
                </p>
              </>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Descripción de la imagen",
        direction: "imageFirst",
        type: "png",
      },
      {
        copete: 'Aoki es...',
        title: "Descrubrí todo lo que podes hacer con tu chatbot",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold">
                Experiencia del Usuario sin Precedentes
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <>
                <p className="font-bold text-xl">Adaptabilidad sin Límites</p>
                <p>
                  Sabemos que cada empresa es única. Por eso, nuestro software es
                  altamente personalizable y se adapta a las necesidades específicas
                  de tu negocio. Ya sea que estés en manufactura, logística, o
                  cualquier otro sector, Aoki se adapta para maximizar tu potencial
                </p>
              </>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Descripción de la imagen",
        direction: "textFirst",
        type: "png",
      },
      {
        copete: 'Aoki es...',
        title: "Descrubrí todo lo que podes hacer con tu chatbot",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold">
                Experiencia del Usuario sin Precedentes
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <>
                <p className="font-bold text-xl">Adaptabilidad sin Límites</p>
                <p>
                  Sabemos que cada empresa es única. Por eso, nuestro software es
                  altamente personalizable y se adapta a las necesidades específicas
                  de tu negocio. Ya sea que estés en manufactura, logística, o
                  cualquier otro sector, Aoki se adapta para maximizar tu potencial
                </p>
              </>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Descripción de la imagen",
        direction: "imageFirst",
        type: "png",
      },
      {
        copete: 'Aoki es...',
        title: "Descrubrí todo lo que podes hacer con tu chatbot",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold">
                Experiencia del Usuario sin Precedentes
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <>
                <p className="font-bold text-xl">Adaptabilidad sin Límites</p>
                <p>
                  Sabemos que cada empresa es única. Por eso, nuestro software es
                  altamente personalizable y se adapta a las necesidades específicas
                  de tu negocio. Ya sea que estés en manufactura, logística, o
                  cualquier otro sector, Aoki se adapta para maximizar tu potencial
                </p>
              </>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Descripción de la imagen",
        direction: "textFirst",
        type: "png",
      }
  ]


  return (
    <div className="bg-transparent rounded-full w-full" style={{ padding: "3vw" }}>
{MockupsData.map((mockup, index) => (
  <React.Fragment key={index}>
    <MockupComponent
      copete={mockup.copete}
      title={mockup.title}
      components={mockup.components.map((component) => (
        <div key={component.key}>{component.content}</div>
      ))}
      imageSrc={mockup.imageSrc}
      imageAlt={mockup.imageAlt}
      direction={mockup.direction}
      type={mockup.type}
    />
    {index % 2 === 0 && index !== MockupsData.length - 1 ? (
      <div style={arrowContainerStyle} className="arrows-container">
        <div style={arrowStyleLeft}>
          <Image src={ArrowLeft} alt="Arrow Left" width={100} height={100} />
        </div>
      </div>
    ) : index % 2 === 1 && index !== MockupsData.length - 1 ? (
      <div style={arrowContainerStyle} className="arrows-container">
        <div style={arrowStyleRight}>
          <Image src={ArrowRight} alt="Arrow Left" width={100} height={100} />
        </div>
      </div>
    ) : null}
  </React.Fragment>
))}
    </div>
  );
};
export default MockUpBlok;
