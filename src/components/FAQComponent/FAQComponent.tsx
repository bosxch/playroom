// FAQComponent.jsx
'use client'
import React from 'react';
import gsap from 'gsap';
import './FAQStyles.scss'; // Import Tailwind CSS

const FAQComponent = () => {
  const faqData = [
    {
      question: 'Pregunta 1',
      answer:
        'Respuesta 1',
    },
    {
      question: 'Pregunta 2',
      answer: 'Respuesta 2',
    },
    {
      question: 'Pregunta 3',
      answer:
        'Respuesta 3',
    },
    {
      question: 'Pregunta 4',
      answer:
        'Respuesta 4',
    },
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
      gsap.to(elToOpen, { duration: 0.2, height: elHeight + 40, opacity: 1, padding: '20px 15px' });
      gsap.to(imgTab, { duration: 0.2, rotate: '45deg' });
    }
  };
  
  
  return (
    <div className="container-faq p-8" style={{padding: '3vw'}}>
      <h1 className="text-center py-8 text-4xl">Preguntas frecuentes</h1>
      {faqData.map((item, index) => (
        <div className="questions" key={index}>
          <div className="visible-pannel bg-transparent rounded-lg p-4 md:p-6 flex justify-between items-center" onClick={(e) => handleQuestionClick(e, index)}>
            <h2 className="ml-4 text-2xl">{item.question}</h2>
            <p className="mr-4 w-6 text-4xl">+</p>
          </div>
          <div className="toggle-pannel p-0 opacity-0 overflow-hidden transition-all duration-200">
            <p className='p-6' style={{paddingTop:'0'}}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
