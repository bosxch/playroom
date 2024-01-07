"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Importa la imagen de Next.js
import BtnCallToAction from "../BtnCTA";
import logo from "../../../public/images/logo-blanco.png";
const NavBar = () => {
  const [isDropdownOpenProducts, setDropdownOpenProducts] = useState(false);
  const [isDropdownOpenSN, setDropdownOpenSN] = useState(false);
  const [isDropdownOpenNN, setDropdownOpenNN] = useState(false);
  const [isDropdownOpenMore, setDropdownOpenMore] = useState(false);

  const [isActiveProducts, setIsActiveProducts] = useState(false);
  const [isActiveSN, setIsActiveSN] = useState(false);
  const [isActiveNN, setIsActiveNN] = useState(false);
  const [isActiveMore, setIsActiveMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const setAllFalse = () => {
    setDropdownOpenProducts(false);
    setDropdownOpenSN(false);
    setDropdownOpenNN(false);
    setDropdownOpenMore(false);

    setIsActiveProducts(false);
    setIsActiveSN(false);
    setIsActiveNN(false);
    setIsActiveMore(false);
  };

  const toggleDropdownProducts = () => {
    setAllFalse();
    setDropdownOpenProducts(!isDropdownOpenProducts);
    setIsActiveProducts(!isActiveProducts);
  };

  const toggleDropdownSN = () => {
    setAllFalse();
    setDropdownOpenSN(!isDropdownOpenSN);
    setIsActiveSN(!isActiveSN);
  };

  const toggleDropdownNN = () => {
    setAllFalse();
    setDropdownOpenNN(!isDropdownOpenNN);
    setIsActiveNN(!isActiveNN);
  };

  const toggleDropdownMore = () => {
    setAllFalse();
    setDropdownOpenMore(!isDropdownOpenMore);
    setIsActiveMore(!isActiveMore);
  };

  useEffect(() => {
    const handleColorChange = () => {
      const dropdownButtons = document.querySelectorAll(".li-item-text");

      dropdownButtons.forEach((button) => {
        const buttonElement = button as HTMLElement;
        buttonElement.style.color = "";
      });

      if (isActiveMore) {
        const aboutButton = document.getElementById(
          "dropdown-button-about"
        ) as HTMLElement;
        aboutButton.style.color = "#fe9c00";
      }
      if (isActiveProducts) {
        const productsButton = document.getElementById(
          "dropdown-button-products"
        ) as HTMLElement;
        productsButton.style.color = "#fe9c00";
      }
      if (isActiveSN) {
        const contactButton = document.getElementById(
          "dropdown-button-contact"
        ) as HTMLElement;
        contactButton.style.color = "#fe9c00";
      }
      if (isActiveNN) {
        const newsButton = document.getElementById(
          "dropdown-button-about-news"
        ) as HTMLElement;
        newsButton.style.color = "#fe9c00";
      }
    };

    handleColorChange();
  }, [isActiveMore, isActiveProducts, isActiveSN, isActiveNN]);

  const functions = [
    "Chatbots",
    "Asistente Virtual",
    "Inteligencia Artificial",
    "Chat Multiagente",
    "Envios de recordatorios",
    "Envios masivos",
    "Dashbord con estadisticas",
  ];

  const integrations = ["WhatsApp", "Meta", "Mercado Libre", "CRM"];

  const networks = ["LinkedIn", "Instagram", "YouTube", "Twitter", "Facebook"];

  return (
    <nav
      className="navbar-bg sticky top-0 w-full z-2"
      style={{ width: "100%", zIndex: 1000 }}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="Aoki Logo" width={100} height={100} />{" "}
          {/* Utiliza la etiqueta Image de Next.js */}
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          aria-controls="mega-menu-full"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg navbar-bg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 navbar-bg">
            <li>
              <button
                id="dropdown-button-about"
                style={{ color: isActiveMore ? "active-dropdown" : "" }}
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleDropdownMore}
              >
                Sobre Aoki{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                id="dropdown-button-products"
                style={{ color: isActiveProducts ? "active-dropdown" : "" }}
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleDropdownProducts}
              >
                Productos{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block li-item-text py-2 px-3 text-gray-900 rounded hover:navbar-bg md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partners
              </a>
            </li>
            <li>
              <button
                id="dropdown-button-contact"
                style={{ color: isActiveSN ? "active-dropdown" : "" }}
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleDropdownSN}
              >
                Conectémonos{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            {/* <li>
                <button id="dropdown-button-about-news" style={{color: isActiveNN ? 'active-dropdown' : ''}} data-collapse-toggle="mega-menu-full-dropdown" className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700" onClick={toggleDropdownNN}>Noticias y Novedades <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                </li> */}
            <li>
              <BtnCallToAction
                rocket={false}
                text="Probá gratis YA"
                className="block  py-2 px-3 text-gray-900 rounded  md:p-0 dark:text-white w-60 text-white pl-4 pr-4  btn-bg-color btn-nav-bar"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        style={{ overflowY: "auto" }}
      >
        {/* Contenido del menú móvil */}
        <ul className="flex flex-col pb-4 ">
          <li>
            <button
              id="dropdown-button-about"
              style={{ color: isActiveMore ? "active-dropdown" : "" }}
              data-collapse-toggle="mega-menu-full-dropdown"
              className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={toggleDropdownMore}
            >
              Sobre Aoki{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              id="dropdown-button-products"
              style={{ color: isActiveProducts ? "active-dropdown" : "" }}
              data-collapse-toggle="mega-menu-full-dropdown"
              className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={toggleDropdownProducts}
            >
              Productos{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>
          <li>
            <a
              href="#"
              className="block li-item-text py-2 px-3 text-gray-900 rounded hover:navbar-bg md:hover:bg-transparent  md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Partners
            </a>
          </li>
          <li>
            <button
              id="dropdown-button-contact"
              style={{ color: isActiveSN ? "active-dropdown" : "" }}
              data-collapse-toggle="mega-menu-full-dropdown"
              className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={toggleDropdownSN}
            >
              Conectémonos{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>
          {/* <li>
                <button id="dropdown-button-about-news" style={{color: isActiveNN ? 'active-dropdown' : ''}} data-collapse-toggle="mega-menu-full-dropdown" className=" li-item-text flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:navbar-bg md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700" onClick={toggleDropdownNN}>Noticias y Novedades <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                </li> */}
          <li className="flex justify-center p-4">
            <BtnCallToAction
              rocket={false}
              text="Probá gratis YA"
              className="block  py-2 px-3 text-gray-900 rounded  md:p-0 dark:text-white w-60 text-white pl-4 pr-4  btn-bg-color btn-nav-bar"
            />
          </li>{" "}
        </ul>
      </div>

      {isDropdownOpenProducts ? (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm navbar-bg absolute top-full left-0 w-full"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">ChatBot Bota</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Asistente virtual con IA que responde como si fueras vos.
                    Les envía comprobantes a tus clientes. Todos escriben a 1
                    solo número.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">CRM Cromo</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Gestión y seguimientos de clientes. Recordatorios de
                    llamados y mensajería automática interactuando con chatbot.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Ecommerce Lupa</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Gestiona productos, precios, stocks, fotos, pedidos, cuentas
                    corrientes, ofertas y novedades.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Carga de Facturas Ficha</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Carga el PDF en tu sistema sin tipear todos los códigos y
                    cantidades, y compara precios.
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Robot Aoki ONE</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Robótica para recolección de mercadería entre estanterías.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {isDropdownOpenSN ? (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm navbar-bg absolute top-full left-0 w-full"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-1 md:px-6">
            <h2 className="text-2xl font-semibold mb-4">
              Conéctate con nosotros en las redes sociales
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li>
                <a
                  href="#"
                  className="block p-4 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-2 mr-2">
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 6.75c0-4.242-3.483-7.725-7.75-7.75h-.5C7.933-1.725 4.45 1.758 4.425 6v.5C2.65 7.56 1.5 9.94 1.5 12s1.15 4.44 2.425 5.5v.5c.025 4.242 3.508 7.725 7.775 7.75h.5c4.267 0 7.75-3.483 7.75-7.75v-.5C22.35 16.44 23.5 14.06 23.5 12s-1.15-4.44-2.425-5.5v-.5zM17.75 9h-1.5a1.75 1.75 0 0 0-1.75 1.75v3.5A1.75 1.75 0 0 0 16.25 16h1.5a1.75 1.75 0 0 0 1.75-1.75v-3.5A1.75 1.75 0 0 0 17.75 9zm-4 0H12a1.75 1.75 0 0 0-1.75 1.75v3.5a1.75 1.75 0 0 0 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75v-3.5A1.75 1.75 0 0 0 13.75 9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Síguenos en Twitter</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Entérate de las últimas noticias y actualizaciones.
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-4 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-800 rounded-full p-2 mr-2">
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.54-.63-4.89-1.68A6.99 6.99 0 0 0 5.95 13H3v-3h2.95a6.99 6.99 0 0 0 1.16-2.32 8 8 0 0 1 0-4.36A6.992 6.992 0 0 0 12 3a6.992 6.992 0 0 0 6.99-7h3V9h-3a6.992 6.992 0 0 0-1.16 2.32A8 8 0 0 1 18.05 13H21v3h-2.05a6.992 6.992 0 0 0-1.16 2.32C15.54 19.37 13.85 20 12 20z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Síguenos en Facebook</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Conéctate con nuestra comunidad y comparte experiencias.
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-4 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div className="bg-red-600 rounded-full p-2 mr-2">
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9zm-2 12a5 5 0 00-4.8 3.45 3.5 3.5 0 01-2.73-2.73A5 5 0 0014 10v2.8a3.5 3.5 0 012.73 2.73A5 5 0 0019 15zm-9-4a3 3 0 110-6 3 3 0 010 6z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Síguenos en LinkedIn</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Conéctate con profesionales y descubre oportunidades.
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-4 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div className="bg-red-500 rounded-full p-2 mr-2">
                      <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14a2 2 0 11-4 0 2 2 0 014 0zM6 14a2 2 0 100-4 2 2 0 000 4z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 6h8v12H8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Síguenos en Instagram</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Explora nuestro mundo visual y comparte momentos
                        especiales.
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              {/* Agrega más redes sociales según sea necesario */}
            </ul>
          </div>
        </div>
      ) : null}

      {isDropdownOpenNN ? (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm navbar-bg absolute top-full left-0 w-full"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">ChatBot Bota</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Asistente virtual con IA que responde como si fueras vos.
                    Les envía comprobantes a tus clientes. Todos escriben a 1
                    solo número.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">CRM Cromo</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Gestión y seguimientos de clientes. Recordatorios de
                    llamados y mensajería automática interactuando con chatbot.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Ecommerce Lupa</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Gestiona productos, precios, stocks, fotos, pedidos, cuentas
                    corrientes, ofertas y novedades.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Carga de Facturas Ficha</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Carga el PDF en tu sistema sin tipear todos los códigos y
                    cantidades, y compara precios.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">WMS Ware</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    WMS de entrada, guardado y salida de productos en los
                    almacenes. Elimina los errores de stock y optimiza la
                    entrada, recolección y salida de mercadería.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:navbar-bg dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Robot Aoki ONE</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Robótica para recolección de mercadería entre estanterías.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {isDropdownOpenMore ? (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm navbar-bg absolute top-full left-0 w-full"
        >
          <div className="grid max-w-screen-xl px-4 py-2 mx-auto text-gray-900 dark:text-white">
            <div className="mb-2 mt-2">
              <h2 className="text-lg font-semibold">
                Plataforma Aoki | Todo lo que querés saber
              </h2>
              <p>
                Conoce todas las funcionalidades y productos para hacer crecer
                tu empresa.
              </p>
            </div>
          </div>
          <div className="grid max-w-screen-xl  pb-5 mx-auto text-gray-900 dark:text-white grid-cols-1 sm:grid-cols-3 md:px-6">
            <div>
              <a href="#" className="block  rounded-lg  ">
                <div className="text-lg font-semibold pb-2">
                  Funcionalidades
                </div>
                <span className="text-sm "></span>
              </a>
              <ul>
                {functions.map((text) => (
                  <li>
                    <a>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="#" className="block  rounded-lg  ">
                <div className="text-lg font-semibold pb-2">Integraciones</div>
                <span className="text-sm "></span>
              </a>
              <ul>
                {integrations.map((text) => (
                  <li>
                    <a>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="#" className="block  rounded-lg  ">
                <div className="text-lg font-semibold pb-2">Nuestras redes</div>
                <span className="text-sm "></span>
              </a>
              <ul>
                {networks.map((text) => (
                  <li>
                    <a>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
