import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ text, textSize, className }) => {
  const textRef = useRef();

  useEffect(() => {
    const splitText = new SplitTextJS(textRef.current);
    gsap.from(splitText.chars, {
      y: 100,
      stagger: 0.01,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "top 20%",
        // scrub: true, 
      },
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className={`${textSize} w-full text-center leading-none overflow-hidden ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextAnimation;

