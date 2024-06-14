import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const SincePage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline()
    tl.from('.since',{
      y:-200,
      scale:.2,

    })
  }, []);
  return (
    <div>
      <div className="w-full since-parent text-white flex items-center flex-col  justify-center h-screen">
        <h1 className="text-[10rem] since font-primary">Since 1925</h1>
        <p className="text-xl since-para font-Secondary w-[70%] mt-[10vh]">Since 1925, Bang & Olufsen has been synonymous with creating iconic audio and home entertainment products that epitomize the highest standards of sound, craft, and design. Founded by Peter Bang and Svend Olufsen in Struer, Denmark, the company began with innovative breakthroughs like the Eliminator, which allowed radios to run on AC power, revolutionizing home audio technology. Over the decades, Bang & Olufsen has continued to set industry benchmarks with products that seamlessly blend cutting-edge technology with sleek, modern aesthetics.</p>
      </div>
    </div>
  );
};

export default SincePage;
