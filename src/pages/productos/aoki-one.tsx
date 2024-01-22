import BannerProductos from "@/components/ProductosComponents/BannerProcudtos/BannerProductosIndex";
import React from "react";
import "../../app/globals.scss";
import NavBar from "@/components/NavBarComponent/NavBarIndex";

const Products = () => {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full overflow-y-auto banner-main-aoki overflow-x-hidden">
      <NavBar />
      <BannerProductos
        copete="Implementá robótica de punta"
        title="*Aoki ONE* del podio a tu depósito"
        subtitle="Primer premio en la categoría Movilidad y Logística de Argentina Tecnológica"
        btnText="Inicia gratis hoy"
        checksText={["Ganador del premio Argentina Tecnológica 2022"]}
      />
    </div>
  );
};

export default Products;
