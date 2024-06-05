import React, { useEffect } from "react";
import Inner from "../Components/latouts/Inner";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Home = () => {
  return (
    <Inner>
      <Landingpage />
      <div className="w-full h-screen"></div>
      <div className="w-full h-screen"></div>
      {/* <WorldofBandO /> */}
    </Inner>
  );
};

export default Home;

const Landingpage = () => {
  return (
    <div className="h-screen pointer-events-none relative w-full overflow-hidden">
      <video
        className="w-full max-sm:object-fit h-full object-cover"
        autoPlay
        loop
        muted
        src="src/assets/videos/videoplayback.mp4"
      ></video>
    </div>
  );
};


