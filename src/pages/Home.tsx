import React from 'react';
import Banner from '@/components/BannerComponent/BannerIndex';
import ClientsComponent from '@/components/ClientsComponent/ClientsComponent';
import BentoComponentIndex from '@/components/BentoComponent/BentoComponenteIndex';
import BenefitsComponent from '@/components/BenefitsComponent/BenefitsComponentIndex';
import WhyComponent from '@/components/WhyComponent/WhyComponentIndex';
const Home = () => {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full h-full overflow-y-auto banner-main-aoki overflow-x-hidden">
      <Banner />
      <BenefitsComponent/>
      <WhyComponent/>

      {/* <ClientsComponent/> */}
    <BentoComponentIndex />

    </div>
  );

};

export default Home;
