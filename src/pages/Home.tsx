import React from "react";
import Banner from "@/components/BannerComponent/BannerIndex";
import BentoComponentIndex from "@/components/BentoComponent/BentoComponenteIndex";
import BenefitsComponent from "@/components/BenefitsComponent/BenefitsComponentIndex";
import WhyComponent from "@/components/WhyComponent/WhyComponentIndex";
import Video from "@/components/VideoComponent/VideoComponentIndex";
import NavBar from "@/components/NavBarComponent/NavBarIndex";
import Footer from "@/components/FooterComponent/FooterComponentIndex";
import MockUpBlok from "@/components/MockUpBlok";
import SectionCTA from "@/components/SectionCTA";
import ClientsComponentIndex from "@/components/ClientsComponent/ClientsComponentIndex";
import FAQComponent from "@/components/FAQComponent/FAQComponent";
const Home = () => {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full overflow-y-auto banner-main-aoki overflow-x-hidden">
      <NavBar />
      <Banner />
      <Video width="90vw" height="auto" className='video-banner'/>
      <Video />
      <BenefitsComponent />

      <WhyComponent />
      <SectionCTA />
      <ClientsComponentIndex />

      <MockUpBlok />
      <SectionCTA />

      <FAQComponent/>
      <Footer />
    </div>
  );
};

export default Home;
