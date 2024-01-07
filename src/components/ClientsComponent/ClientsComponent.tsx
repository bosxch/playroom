"use client";
import React, { useState } from "react";
import "./clientsStyles.css";
import oeschle from "../../../public/images/logos/AOKI - Oechsle 300-01.png";
import aquasol from "../../../public/images/logos/aquasol 300-02.png";
import distri from "../../../public/images/logos/distri 300-02.png";
import eliggi from "../../../public/images/logos/eliggi 300-02.png";
import facturante from "../../../public/images/logos/facturante 300-02.png";
import gnik from "../../../public/images/logos/gnik 300-02T.png";
import utn from "../../../public/images/logos/utn 300-02.png";
import Image from "next/image";

import { useEffect } from "react";

const ClientsComponent = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Check if the user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!prefersReducedMotion) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        ) as Element | null;

        // Use optional chaining to safely access properties/methods
        const scrollerContent = Array.from(
          scrollerInner?.children || []
        ) as Element[];

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
  }, [prefersReducedMotion]); // Include prefersReducedMotion in the dependency array
  return (
    <div className="mb-2 mt-4" style={{ padding: "3vw" }}>
      <p className="text-center font-bold text-4xl text-white mb-8">
        Nuestros Clientes
      </p>

      <div className="scroller" data-speed="slow">
        <ul className="tag-list scroller__inner">
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
            <Image src={gnik} alt="gnikLogo" width={120} height={120} />
          </li>
          <li className="brand-logo">
            <Image src={utn} alt="utnLogo" width={120} height={120} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientsComponent;
