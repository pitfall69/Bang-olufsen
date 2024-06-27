import React, { useRef } from "react";
import Footer from "../Components/Footer";
import HomePageVideo from "../Components/HomePageVideo";
import LandingPage from "../Components/LandingPage";
import HomePagePoduct from "../Components/HomePagePoduct";
import AboutPage from "../Components/AboutPage";
import OurStories from "../Components/OurStories";
import Wbo from "../Components/Wbo";
import Collaborators from "../Components/Collaborators";
<<<<<<< HEAD
=======
import HomeWorldBandO from "../Components/HomeWorldBandO";
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
import HistoryPage from "../Components/HistoryPage";
const Home = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} data-scroll-container>
        <LandingPage />
        <AboutPage />
        <HomePagePoduct />
        <HomePageVideo />
        <Wbo />
        <OurStories />
        <HistoryPage />
        <Collaborators />
        <Footer />
    </div>
  );
};
export default Home;
