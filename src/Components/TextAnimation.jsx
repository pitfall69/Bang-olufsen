import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

const TextAnimation = ({ text , textSize , className}) => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef();

  useEffect(() => {
    const splitedwbandoref = new SplitTextJS(textRef.current);
    gsap.from(splitedwbandoref.chars, {
      y: 200,
      stagger: 0.01,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        end: "top 20%",
      },
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className={`${textSize} ${className} max-sm:text-2xl w-full h-fit text-center leading-none overflow-hidden uppercase font-primary`}
    >
      {text}
    </h1>
  );
};

export default TextAnimation;
