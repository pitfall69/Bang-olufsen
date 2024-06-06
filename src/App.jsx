// nfgdfj

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";
import Support from "./Pages/Support"
import Television from "./Pages/Television"
import Soundbars from "./Pages/Soundbars";``
import Headphones from "./Pages/Headphones"
import Worldbando from "./Pages/Worldbando"
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.5, 
  smoothDuration: 800, 
  smoothDistance: 100,
});
//k.,fkldfnjkls
const App = () => {
  const location = useLocation();
  return (
    <div data-scroll-container>
      {/* <Loader/> */}
      <Navbar location={location} key={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/support" element={<Support/>} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/soundbars" element={<Soundbars />} />
          <Route path="/television" element={<Television/>} />
          <Route path="/worldb&o" element={<Worldbando />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

