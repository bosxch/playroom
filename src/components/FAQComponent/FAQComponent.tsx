// FAQComponent.jsx
'use client'
import React from 'react';
import gsap from 'gsap';

const FAQComponent = () => {
  const faqData = [
    {
      question: '¿Qué servicios ofrece su empresa en el desarrollo de chatbots y asistentes virtuales para empresas?',
      answer:
        'Nuestra empresa se especializa en proporcionar soluciones de chatbots y asistentes virtuales diseñadas para mejorar la eficiencia operativa y la amigabilidad en la interacción con los usuarios empresariales.',
    },
    {
      question: '¿Cómo se destacan sus productos en la integración con plataformas como Mercado Libre, Meta, WhatsApp y sistemas de CRM?',
      answer: 'Nuestros productos se distinguen por su integración fluida con Mercado Libre, Meta, WhatsApp y diversas plataformas de CRM. Esto permite a las empresas gestionar de manera eficiente las interacciones y la información clave.',
    },
    {
      question: '¿Cuáles son las ventajas clave de utilizar chatbots y asistentes virtuales en entornos empresariales?',
      answer:
        'La implementación de chatbots y asistentes virtuales en entornos empresariales mejora significativamente la eficiencia operativa al automatizar tareas, al tiempo que proporciona una experiencia de usuario amigable para clientes y empleados.',
    },
    // {
    //   question: '¿Cómo personalizan sus chatbots y asistentes virtuales para adaptarse a las necesidades específicas de cada cliente empresarial?',
    //   answer:
    //     'Nuestro enfoque se centra en la personalización. Ajustamos la apariencia, comportamiento y funcionalidades de nuestros productos para satisfacer las necesidades únicas de cada empresa, brindando soluciones adaptadas y amigables.',
    // },
    // {
    //   question: '¿Qué medidas de seguridad implementan para proteger la información empresarial en las integraciones con sistemas de CRM y otras plataformas?',
    //   answer: 'La seguridad es una prioridad. Implementamos medidas avanzadas para garantizar la seguridad de la información empresarial en todas las integraciones, proporcionando tranquilidad a nuestros clientes.',
    // },
    // {
    //   question: '¿Ofrecen servicios de mantenimiento continuo y soporte técnico después de la implementación de chatbots y asistentes virtuales?',
    //   answer: 'Sí, nos comprometemos a brindar servicios de mantenimiento y soporte técnico para asegurar el rendimiento continuo y la adaptación de nuestros productos a las necesidades cambiantes de las empresas a lo largo del tiempo.',
    // },
    // {
    //   question: '¿Cómo puedo solicitar más información o una cotización para implementar chatbots y asistentes virtuales en mi empresa?',
    //   answer: 'Para obtener más información o solicitar una cotización personalizada, lo invitamos a ponerse en contacto con nuestro equipo a través del formulario en nuestro sitio web. Estaremos encantados de ayudarle a mejorar la eficiencia y la amigabilidad en su entorno empresarial.',
    // }
  ];

  const handleQuestionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    const elToOpen = e.currentTarget.nextElementSibling as HTMLElement;
    const elHeight = elToOpen.scrollHeight;
    const imgTab = e.currentTarget.children[1] as HTMLElement;
  
    if (elToOpen.classList.contains('opened')) {
      elToOpen.classList.remove('opened');
      gsap.to(elToOpen, { duration: 0.2, height: 0, opacity: 0, padding: '0px 15px' });
      gsap.to(imgTab, { duration: 0.2, rotate: '0deg' });
    } else {
      elToOpen.classList.add('opened');
      gsap.to(elToOpen, { duration: 0.2, height: elHeight + 40, opacity: 1, padding: '10px 15px' });
      gsap.to(imgTab, { duration: 0.2, rotate: '45deg' });
    }
  };
  
  
  return (
    <div className="container-faq p-8 w-full mt-8" style={{padding: '3vw'}}>
      <h1 className="text-center py-8 text-6xl text-white-body">Preguntas frecuentes</h1>
      {faqData.map((item, index) => (
        <div className="questions m-4 btn-bg-color rounded-md p-2" style={{marginLeft: 0, marginRight: 0}} key={index}>
          <div className="visible-pannel bg-transparent rounded-lg flex justify-between items-center" onClick={(e) => handleQuestionClick(e, index)}>
            <p className="ml-4 text-sm mockup-text-responsive" >{item.question}</p>
            <p className=" w-6 text-4xl cursor-pointer">+</p>
          </div>
          <div className="toggle-pannel w-full h-0 p-0 opacity-0 overflow-hidden transition-all duration-200">
            <p className='p-6 text-md mockup-text-responsive' style={{paddingLeft:'0'}}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
