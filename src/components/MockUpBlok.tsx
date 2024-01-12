import React, { ReactNode} from "react";
import MockupComponent from "./MockupsComponent/MockupComponentIndex";
import mockupImg from "../../public/images/captura-para-footer-cromo.png";
import ArrowLeft from './../../public/images/Arrow-Left-Light-Blue-Home.svg'
import ArrowRight from './../../public/images/Arrow-Right-Light-Blue-Home.svg'
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import checkByN from '../../public/images/check-nyb.png'
import SectionPreMockups from "./MockupsComponent/SectionPreMockups";
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
    left: '-75px',  
    bottom: '-75px',
  };

  const arrowStyleRight = {
    position: 'absolute' as const,
    right: '-75px',  
    bottom: '-75px',
  };

  const MockupsData: MockupComponentProps[] = [
    {
        copete: 'Con Aoki...',
        title: "Descrubrí todo lo que podes hacer<br/>con tu Chatbot",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold text-white-body">
                Experiencia del Usuario sin Precedentes
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <>
                <p className="font-bold text-xl text-white-body">Adaptabilidad sin Límites</p>
                <ul className='mockup-ul'>
          
                  <li className='flex flex-row items-center pt-4 pb-2' >
                    <FaAngleRight/>
                    <p className="text-white-body">Disminuye tiempos</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                    <p>Maximiza tu produccion</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                  <p>Genera tú autogestión</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                  <p>Da respuestas en tiempo récord</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                  <p>Crea registros y estadísticas de tus interacciones</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                  <p>Centraliza tu logística y gestión</p>
                  </li>
                  <li className='flex flex-row items-center pb-2 text-white-body'>
                  <FaAngleRight/>

                  <p>Beneficia tú llegada a tú publico</p>
                  </li>
                </ul>
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
        title: "Nuestro Chatbot Bota",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold text-white-body">
                Con nuestro Multiagente no pierdas en tu flujo de atención ningún cliente <br/>
                Todo tu servicio de atención al cliente a través de un único número de contacto <br/>
                <span className='font-bold'>¿Cómo? Con BOTA</span>
              </span>
              
            ),
          },
          {
            key: "2",
            content: (
              <ul className='mockup-ul'>
          
              <li className='flex flex-row items-center pt-4 pb-2 text-white-body' >
                <FaAngleRight/>
                <p>Todos tus asesores detrás de un mismo número</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

                <p>Asignaciones de clientes y conversaciones</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

              <p>Conectalo con CROMO, nuestro Software CRM, para mayor gestión</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

              <p>Envio de archivos multimedia</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

              <p>Respuestas predeterminadas y manejo de Chatbots</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

              <p>Roles de usuario agrupables</p>
              </li>
              <li className='flex flex-row items-center pb-2 text-white-body'>
              <FaAngleRight/>

              <p>Implementaciones con Mercado Libre, Instagram, Facebook, WhatsApp, etc</p>
              </li>
            </ul>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Video MeLi",
        direction: "textFirst",
        type: "png",
      },
      {
        copete: 'con Bota...',
        title: "Manejá Mercado Libre desde tu WhatsApp",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold text-white-body">
                Mejora tu reputación respondiendo en segundos con la ayuda de la IA, guarda respuestas predeterminada por usuario 
                y lo más importante, responde desde cualquier lado y no pierdas ni una venta
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <ul className='mockup-ul text-white-body'>
          
              <li className='flex flex-row items-center pt-8 pb-4' >
                <Image
                   alt="check"
                   height={30}
                   width={30}
                   className="mr-2"
                src={checkByN}
                />
                <p>Varias cuentas de Mercado Libre en un solo lugar</p>
              </li>
              <li className='flex flex-row items-center pb-4'>
              <Image
                   alt="check"
                   height={30}
                   width={30}
                   className="mr-2"
                src={checkByN}
                />
                <p>Sabrás si un mensaje ya fue respondido y quién lo contestó</p>
              </li>
              <li className='flex flex-row items-center pb-4'>
              <Image
                   alt="check"
                   height={30}
                   width={30}
                   className="mr-2"
                src={checkByN}
                />
              <p>Inteligencia artificial para asistir al seller con la respuesta</p>
              </li>
  
              
            </ul>
            ),
          },
        ],
        imageSrc: 'video-meli',
        imageAlt: "Descripción de la imagen",
        direction: "imageFirst",
        type: "mp4",
      }
,
      {
        copete: 'Aoki es...',
        title: "Nuestro CRM CROMO",
        components: [
          {
            key: "1",
            content: (
              <span className="font-semibold text-white-body">
                Realizá las tareas de seguimiento y gestión de tus clientes con nuestro CRM
              </span>
            ),
          },
          {
            key: "2",
            content: (
              <ul className='mockup-ul text-white-body'>
          
              <li className='flex flex-row items-center pt-4 pb-2 ' >
                <FaAngleRight/>
                <p>Crea registro de tus clientes</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

                <p>Envia mensajes masivos, programa y envía recordatorios</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Registra clientes, visitantes, empleados</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Optimiza los tiempos de búsqueda</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Crea seguimientos</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Determina estado de la conexión y lleva registro de tus gestiones</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Mantené una conexión eficaz con tus clientes teniendo toda la informacion a mano</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Estadísticas, filtros, búsquedas entre tus Seguimientos y Clientes</p>
              </li>
              <li className='flex flex-row items-center pb-2'>
              <FaAngleRight/>

              <p>Llevá tu agenda totalmente integrada a recordatorios y envios masivos para organizarte</p>
              </li>
            </ul>
            ),
          },
        ],
        imageSrc: mockupImg,
        imageAlt: "Descripción de la imagen",
        direction: "textFirst",
        type: "png",
      },
  ]


  return (
    <div className="bg-transparent rounded-full w-full margin-mobile mockup-padding" >
      <SectionPreMockups/>
{MockupsData.map((mockup, index) => (
  <React.Fragment key={index}>
    <MockupComponent
      copete={mockup.copete}
      title={mockup.title}
      components={mockup.components.map((component) => (
        <div key={component.key}>{component.content}</div>
      ))}
      imageSrc={mockup.imageSrc === 'video-meli' ? '/static/videos/videoMeLi.mp4' : mockup.imageSrc}
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
