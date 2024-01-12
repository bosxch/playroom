import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import BtnCallToAction from "../BtnCTA";

const SectionPreMockups = () => {

    return (
        <div className="w-100 flex justify-center pt-4 items-center flex-col text-center margin-mobile padding-mobile-pre">
        <p className="pb-2 text-white-body font-mobile-copete">Eso no es todo lo que tenés que saber</p>
      <p className="font-bold text-4xl text-white-body font-mobile-bf-title">
      Aoki te dá <span className="gradient-text">todo lo que necesitas</span> para <span className="gradient-text">maximizarte</span>

      </p>
      <p className="font-bold text-4xl text-white-body font-mobile-title">
      Conocé en detalle nuesto <span className="gradient-text">Chatbot, CRM, Ecommerce,<br/>Carga de Facturas y Aoki ONE Robótica</span>

      </p>

      <div className="btn-container mt-6">
      </div>
      <p className="text-white text-sm mt-4 text-white-body">
        Estás a solo 3 clicks de tu nuevo Chatbot
      </p>        

      <div className="flex w-2/3 pt-8 justify-around items-center margin-mobile">

      <BtnCallToAction
          text={"Crear cuenta gratis"}
          rocket={false}
          className={"w-100 text-white p-2 btn-bg-color btn-cta-mobile-pre btn-text-mobile-pre"}
      />
            <BtnCallToAction
          text={"Hablar con un asesor"}
          rocket={false}
          className={"w-100 text-white p-2 btn-bg-color btn-cta-mobile-pre btn-text-mobile-pre"}
      />
            </div>

      <div className="flex w-1/3 pt-8 justify-between items-center margin-arrows">
      <FaAngleDown color=' #0881a3' className='font-bold text-6xl gradient-text'/>
      <FaAngleDown color=' #73aed9' className='font-bold text-4xl gradient-text'/>

      <FaAngleDown color=' #0881a3' className='font-bold text-6xl gradient-text'/>
      <FaAngleDown color=' #73aed9' className='font-bold text-4xl gradient-text'/>

      <FaAngleDown color=' #0881a3'className='font-bold text-6xl gradient-text'/>

      </div>
      </div>
    )
}

export default SectionPreMockups