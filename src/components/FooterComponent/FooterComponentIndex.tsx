import React from 'react';
import logo from '../../../public/images/logo-blanco.png'
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="w-full text-white p-8" style={{backgroundColor: '#0881a3'}}>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Sobre Aoki</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Acerca de nosotros</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Misión y visión</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
          <p className="text-gray-400">Mar del Plata, Argentina </p>
          <p className="text-gray-400"></p>
        </div>

        <div className="w-full md:w-1/3 flex justify-end items-center">
          <Image src={logo} alt="Logo" width={200} height={200}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
