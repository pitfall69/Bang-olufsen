import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Button = ({ text, customclassName , borderColor }) => {
  const { contextSafe } = useGSAP();
  const handleMouseEnter = contextSafe(() => {
    gsap.to(`.${customclassName}`, {
      y: "-100%",
      duration:.4,
    });
    gsap.to(`.color-div`, {
      borderRadius:"0%",
      y: "-60%",
      
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(`.${customclassName}`, {
      y: "0%",
      duration:.4,
    });
    gsap.to(`.color-div`, {
      y: "-50%",
      duration:.4,
    });
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`h-[2.1rem] text-[1rem] relative rounded-full leading-[2rem] px-8 button overflow-hidden w-fit border-[1px] ${borderColor ? borderColor : "border-black"} `}
    >
      <h1 className={`${customclassName}`}>{text}</h1>
      <h1 className={`${customclassName}`}>{text}</h1>
      <div className="color-div absolute h-[5rem] rounded-[50%] bottom-[-150%] translate-y-1/2 left-0 w-[5rem] bg-red-500"></div>
    </div>
  );
};

export default Button;

