// import React, { useState, useEffect, useRef } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";
// import Navbar from "./Components/Navbar";

// // Lazy loaded pages
// const Home = React.lazy(() => import("./Pages/Home"));
// const Speakers = React.lazy(() => import("./Pages/Speakers"));
// const Support = React.lazy(() => import("./Pages/Support"));
// const Television = React.lazy(() => import("./Pages/Television"));
// const Soundbars = React.lazy(() => import("./Pages/Soundbars"));
// const Headphones = React.lazy(() => import("./Pages/Headphones"));
// const Worldbando = React.lazy(() => import("./Pages/Worldbando"));

// const App = () => {
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 0.01,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, [isLoading]);

//   return (
//     <div ref={scrollRef}>
//       <Navbar />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/speakers" element={<Speakers />} />
//           <Route path="/support" element={<Support />} />
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


import {React , useRef} from 'react'

const App = () => {
  const scrollRef = useRef()
  return (
    <div ref={scrollRef}>
         <Navbar />
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/speakers" element={<Speakers />} />
             <Route path="/support" element={<Support />} />
              <Route path="/headphones" element={<Headphones />} />
             <Route path="/soundbars" element={<Soundbars />} />
              <Route path="/television" element={<Television />} />
               <Route path="/worldb&o" element={<Worldbando />} />
             </Routes>
          </AnimatePresence>
         </div>
  )
}

export default App