import React, { useRef } from "react";
import Inner from "../Components/latouts/Inner";
import Footer from "../Components/Footer";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import AboutPage from "../Components/AboutPage";
import OurStories from "../Components/OurStories";
import Wbo from "../Components/Wbo";
import Collaborators from "../Components/Collaborators";
import HistoryPage from "../Components/HistoryPage";
const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} data-scroll-container>
      <Inner>
        <LandingPage />
        <AboutPage />
        <HomePagePoduct />
        
        <Wbo />
        <HomePageVideo />
        <OurStories />
        <HistoryPage />
        <Collaborators />
        <Footer />
      </Inner>
    </div>
  );
};
export default Home;
