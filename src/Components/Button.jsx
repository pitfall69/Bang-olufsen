import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Button = ({ text, customclassName }) => {
  const { contextSafe } = useGSAP();
  const handleMouseEnter = contextSafe(() => {
    gsap.to(`.${customclassName}`, {
      y: "-100%",
      // ease: "elastic.out(1,0.8)",
      duration:.4,
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(`.${customclassName}`, {
      y: "0%",
      // ease: "elastic.out(1,0.8)",
      duration:.4,
    });
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[2rem] text-[1rem] leading-[2rem] px-5 button overflow-hidden w-fit border-[1px] border-black "
    >
      <h1 className={`${customclassName}`}>{text}</h1>
      <h1 className={`${customclassName}`}>{text}</h1>
    </div>
  );
};

export default Button;
