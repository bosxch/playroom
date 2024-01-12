import React from "react";
import ClientsComponent from "./ClientsComponent";
import TestimonialsComponent from "./TestimonialsSection";
import { FaStar } from "react-icons/fa6";

const ClientsComponentIndex = () => {
  return (
    <div className="p-0 md:mt-8 lg:pt-8">
      <ClientsComponent />
      <div className="p-4 stars-section-clients">
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
      </div>
      <TestimonialsComponent />
    </div>
  );
};

export default ClientsComponentIndex;
