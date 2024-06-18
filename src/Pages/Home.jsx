import React, { useEffect, useRef } from "react";
import Inner from "../Components/latouts/Inner";
import Footer from "../Components/Footer";
import HomeWorldBandO from "../Components/HomeWorldBandO";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import SincePage from "../Components/SincePage";
import LocomotiveScroll from "locomotive-scroll";

import MarqueeText from "../Components/MarqueeText"

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Inner>
        <LandingPage />
        <div className="w-full h-screen flex overflow-hidden bg-[#fff]">
          <div className="w-[35%] h-screen bg-red-300"></div>
          <div className="w-[65%] h-screen relative bg-red-500">
            <div className="w-[45%] h-[40%] absolute left-[10%] top-[5%] bg-green-400"></div>
            <div className="w-[60%] h-[45%] absolute right-[10%] top-[50%] bg-green-400"></div>
          </div>
        </div>
        <HomePagePoduct />
        <div className="w-full h-screen bg-red-500 "></div>
        <HomeWorldBandO />
        <HomePageVideo />
        <div className="w-full h-[80vh] bg-[#000]">
        <MarqueeText/>
        <MarqueeText/>
        </div>
        <div className="w-full h-[50vh] bg-[#fff]">
          </div>
        <Footer />
      </Inner>
    </div>
  );
};
export default Home;
