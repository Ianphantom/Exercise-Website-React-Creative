import React from "react";
import WhyChooseUs from "../components/HomeWhyChooseUs";
import AboutBlockchain from "../components/HomeAboutBlockchain";
import TopDeals from "../components/HomeTopDeals";
import HomeSection1 from "../components/HomeSection1";

const Beranda = () => {
  return (
    <div className='beranda'>
      <HomeSection1 />
      <WhyChooseUs />
      <AboutBlockchain />
      <TopDeals />
    </div>
  );
};

export default Beranda;
