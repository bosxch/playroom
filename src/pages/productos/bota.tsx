import BannerProductos from "@/components/ProductosComponents/BannerProcudtos/BannerProductosIndex";
import React from "react";
import "../../app/globals.scss";
import NavBar from "@/components/NavBarComponent/NavBarIndex";

const Products = () => {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full overflow-y-auto banner-main-aoki overflow-x-hidden">
      <NavBar />
      <BannerProductos
        copete="Automatizate vos y automatizá tus clientes"
        title="Centralizá tus canales de comunicación con *Bota* "
        subtitle="*Chatbots*, *Multiagente*, implementaciones con *Mercado Libre*, *Meta*, y mucho más"
        btnText="Inicia gratis hoy"
        checksText={[
          "WhatsApp, Mercado Libre, Meta",
          "Todo a través de un solo número",
          "Controlá estadísticas y usuarios",
        ]}
      />
    </div>
  );
};

export default Products;
