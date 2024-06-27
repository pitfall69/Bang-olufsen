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
import Inner from "./Components/latouts/Inner";
const App = () => {
  const location = useLocation();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.01,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="relative bg-white" data-scroll-container>
      {/* <Preloader/> */}
      <div className="mouse-followerw-5 h-5 absolute rounded-[50%] bg-white top-0 left-0 z-[999]"></div>
      <Navbar location={location} key={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Inner>
                <Home />
              </Inner>
            }
          />
          <Route
            path="/speakers"
            element={
              <Inner>
                <Speakers />
              </Inner>
            }
          />
          <Route
            path="/headphones"
            element={
              <Inner>
                <Headphones />
              </Inner>
            }
          />
          <Route
            path="/soundbars"
            element={
              <Inner>
                <Soundbars />
              </Inner>
            }
          />
          <Route
            path="/television"
            element={
              <Inner>
                <Television />
              </Inner>
            }
          />
          <Route
            path="/worldb&o"
            element={
              <Inner>
                <Worldbando />
              </Inner>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
