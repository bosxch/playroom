import BannerProductos from "@/components/ProductosComponents/BannerProcudtos/BannerProductosIndex";
import React from "react";
import "../../app/globals.scss";
import NavBar from "@/components/NavBarComponent/NavBarIndex";

const Products = () => {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full overflow-y-auto banner-main-aoki overflow-x-hidden">
      <NavBar />
      <BannerProductos
        copete="Organizá y seguí cada proceso, no te olvides de nada"
        title="Nuestra aplicación de *Logística y Gestión* Cromo"
        subtitle=""
        checksText={[
          "Crea seguimiendos",
          "Envia mensajes masivos",
          "Conectá tu agenda",
        ]}
        btnText="Inicia gratis hoy"
      />
    </div>
  );
};

export default Products;
