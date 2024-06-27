import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";
import Television from "./Pages/Television";
import Soundbars from "./Pages/Soundbars";
import Headphones from "./Pages/Headphones";
import Worldbando from "./Pages/Worldbando";
import LocomotiveScroll from "locomotive-scroll";
import Preloader from "./Components/Preloader";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.2,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="relative bg-white" data-scroll-container>
      {/* <Preloader/> */}
      <Navbar location={location} key={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/soundbars" element={<Soundbars />} />
          <Route path="/television" element={<Television />} />
          <Route path="/worldb&o" element={<Worldbando />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
