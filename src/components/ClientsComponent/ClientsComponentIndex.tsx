import React from "react";
import ClientsComponent from "./ClientsComponent";
import TestimonialsComponent from "./TestimonialsSection";
import StarComponent from "./StarsComponent";

const ClientsComponentIndex = () => {
  return (
    <div className="p-0 md:mt-8 lg:pt-8">
      <ClientsComponent />
      <StarComponent/>
      <TestimonialsComponent />
    </div>
  );
};

export default ClientsComponentIndex;
