import React, { useEffect, useState } from "react";
import Inner from "../Components/latouts/Inner";
import Footer from "../Components/Footer";
import HomeWorldBandO from "../Components/HomeWorldBandO";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import SincePage from "../Components/SincePage";
const Home = () => {
  return (
    <Inner>
      <LandingPage />
      <div className="w-full h-screen "></div>
      <HomePagePoduct />
      <SincePage/> 
      <div className="w-full h-screen"></div>
      <HomeWorldBandO />
      <div className="w-full h-screen bg-white"></div>
      <HomePageVideo />
      <div className="w-full h-screen"></div>
      {/* <MarqueeText/> */}
      <div className="w-full h-screen bg-white"></div>
      <Footer />
    </Inner>
  );
};
export default Home;
