// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "./Components/Navbar";
// import Loader from "./Components/Loader";
// import Home from "./Pages/Home";
// import Speakers from "./Pages/Speakers";

// import Television from "./Pages/Television"
// import Soundbars from "./Pages/Soundbars";``
// import Headphones from "./Pages/Headphones"
// import Worldbando from "./Pages/Worldbando"
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   lerp: 0.01,
// });
// const App = () => {
//   const location = useLocation();
//   return (
//     <div className="relative" data-scroll-container>
//       {/* <Loader/> */}
//       <Navbar location={location} key={location.pathname} />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/speakers" element={<Speakers />} />
//           <Route path="/headphones" element={<Headphones />} />
//           <Route path="/soundbars" element={<Soundbars />} />
//           <Route path="/television" element={<Television />} />
//           <Route path="/worldb&o" element={<Worldbando />} />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;

// import React, { useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "./Components/Navbar";
// import Loader from "./Components/Loader";
// import Home from "./Pages/Home";
// import Speakers from "./Pages/Speakers";
// import Television from "./Pages/Television";
// import Soundbars from "./Pages/Soundbars";
// import Headphones from "./Pages/Headphones";
// import Worldbando from "./Pages/Worldbando";
// import LocomotiveScroll from 'locomotive-scroll';

// const App = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("[data-scroll-container]"),
//       smooth: true,
//       lerp: 0.01,
//     });

//     return () => {
//       scroll.destroy(); // Cleanup LocomotiveScroll instance
//     };
//   }, []);

//   // Simulating data or resource loading completion after 3 seconds
//   // Replace with actual logic to determine when your content is fully loaded
//   const contentLoaded = true;

//   return (
//     <div className="relative" data-scroll-container>
//       {!contentLoaded && <Loader />} {/* Display loader until content is loaded */}
//       <Navbar location={location} key={location.pathname} />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/speakers" element={<Speakers />} />
//           <Route path="/headphones" element={<Headphones />} />
//           <Route path="/soundbars" element={<Soundbars />} />
//           <Route path="/television" element={<Television />} />
//           <Route path="/worldbando" element={<Worldbando />} />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;

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
