"use client";
import React, { useState } from "react";
import "./clientsStyles.css";
import oeschle from "../../../public/images/logos/AOKI - Oechsle 300-01.png";
import aquasol from "../../../public/images/logos/aquasol 300-02.png";
import distri from "../../../public/images/logos/distri 300-02.png";
import eliggi from "../../../public/images/logos/eliggi 300-02.png";
import facturante from "../../../public/images/logos/facturante 300-02.png";
import gnik from "../../../public/images/logos/gnik 300-02.png";
import utn from "../../../public/images/logos/utn 300-02.png";
import Image from "next/image";

const ClientsComponent = () => {
  return (
    <div className="mb-2 mt-4 clients-ul" style={{ padding: "0 12vw" }}>
      <p className="text-center font-bolder text-xl md:text-4xl lg:text-4xl text-white-body mb-8">
      Preferido por las marcas líderes
      </p>

      <div className="scroller scroller-mobile" data-speed="slow">
        <ul className="tag-list scroller__inner scroller-mobile" >
          <li className="brand-logo">
            <Image src={oeschle} alt="oeschleLogo" width={120} height={120} />
          </li>
          <li className="brand-logo">
            <Image src={aquasol} alt="aquasolLogo" width={120} height={120} />
          </li>
          <li className="brand-logo">
            <Image src={distri} alt="distriLogo" width={120} height={120} />
          </li>
          <li className="brand-logo">
            <Image src={eliggi} alt="eliggiLogo" width={120} height={120} />
          </li>
          <li className="brand-logo">
            <Image
              src={facturante}
              alt="facturanteLogo"
              width={120}
              height={120}
              
            />
          </li>
          <li className="brand-logo">
            <Image src={gnik} alt="gnikLogo"  width={120} height={120}/>
          </li>
          <li className="brand-logo">
            <Image src={utn} alt="utnLogo"    width={120} height={120}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientsComponent;
