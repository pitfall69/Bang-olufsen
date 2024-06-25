import React, { useRef } from "react";
import Inner from "../Components/latouts/Inner";
import Footer from "../Components/Footer";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import AboutPage from "../Components/AboutPage";
import OurStories from "../Components/OurStories";
import TextAnimation from "../Components/TextAnimation";
import Wbo from "../Components/Wbo";
import Collaborators from "../Components/Collaborators";
import HomeWorldBandO from "../Components/HomeWorldBandO";
const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} data-scroll-container>
      <Inner>
        <LandingPage />
        <AboutPage />
        <HomePagePoduct />
        <HomePageVideo />
        {/* <HomeWorldBandO/> */}
        <Wbo />
        {/* <div className="h-[10vh] w-full bg-[#000]"></div> */}
        {/* <TextAnimation
          text={"OUR STORIES"}
          textSize={"text-[5rem]"}
          className={" pt-20 text-white font-Decorative  "}
        />
        <div className="h-[10vh] w-full "></div> */}
        <OurStories />
        <div className="w-full h-[150vh] bg-white flex flex-col items-center gap-20 ">
          <TextAnimation
            text={"THE HISTORY OF BANG & OLUFSEN"}
            textSize={"text-[3rem]"}
            className={"pt-10 font-Decorative"}
          />
        </div>
        <Collaborators />
        <Footer />
      </Inner>
    </div>
  );
};
export default Home;
