import React, { useEffect, useRef } from "react";
import Inner from "../Components/latouts/Inner";
import Footer from "../Components/Footer";
import HomeWorldBandO from "../Components/HomeWorldBandO";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import SincePage from "../Components/SincePage";
import LocomotiveScroll from "locomotive-scroll";

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
        <div className="w-full h-screen"></div>
        <HomePagePoduct />
        {/* <SincePage /> */}
        <div className="w-full h-screen"></div>
        <HomeWorldBandO />
        <HomePageVideo />
        {/* <MarqueeText/> */}
        <div className="w-full h-screen bg-[#F5ECE7]"></div>
        <Footer />
      </Inner>
    </div>
  );
};

export default Home;
