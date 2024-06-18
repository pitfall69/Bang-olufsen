import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";
const Button = ({ text, customclassName, borderColor }) => {
  const { contextSafe } = useGSAP();
  const buttonh1Ref1 = useRef();
  const buttonh1Ref2 = useRef();
  const splitTextRef1 = useRef();
  const splitTextRef2 = useRef();

  useEffect(() => {
    if (buttonh1Ref1.current && buttonh1Ref2.current) {
      splitTextRef1.current = new SplitTextJS(buttonh1Ref1.current);
      splitTextRef2.current = new SplitTextJS(buttonh1Ref2.current);
    }
    
  }, []);

  const animateChars = (chars, yValue, duration, stagger) => {
    gsap.to(chars, {
      y: yValue,
      duration: duration,
      stagger: stagger,
    });
  };

  const handleMouseEnter = contextSafe(() => {
    if (splitTextRef1.current && splitTextRef2.current) {
      animateChars(splitTextRef1.current.chars, "-100%", 0.5, 0.01);
      animateChars(splitTextRef2.current.chars, "-100%", 0.5, 0.01);
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (splitTextRef1.current && splitTextRef2.current) {
      animateChars(splitTextRef1.current.chars, "0%", 0.5, 0.01);
      animateChars(splitTextRef2.current.chars, "0%", 0.5, 0.01);
    }
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`h-[2.1rem] text-[1rem] relative rounded-full leading-[2rem] px-8 button overflow-hidden w-fit border-[1px] ${
        borderColor ? borderColor : "bg-[#FFC55C]"
      }`}
    >
      <h1 ref={buttonh1Ref1} className={`${customclassName}`}>
        {text}
      </h1>
      <h1 ref={buttonh1Ref2} className={`${customclassName}`}>
        {text}
      </h1>
    </div>
  );
};

export default Button;
