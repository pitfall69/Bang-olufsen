import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
const BorderAnim = ({ customindex }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(`.border-line${customindex}`, {
      width: "50%",
      scrollTrigger: {
        trigger: `.border-line${customindex}`,
        start: "top 55%",
        end: "top 40%",
      },
    });
  });
  return (
    <div>
      <div className={`h-[1px] w-[96%] mt-10 flex  mx-auto relative`}>
        <div
          className={`${`border-line${customindex}`} absolute left-1/2 top-0 w-[0] h-full bg-zinc-500`}
        ></div>
        <div
          className={`${`border-line${customindex}`} absolute right-1/2 top-0 w-[0] h-full bg-zinc-500`}
        ></div>
      </div>
    </div>
  );
};

export default BorderAnim;