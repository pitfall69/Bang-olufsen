import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import {useRef, useEffect} from "react"
const NavLinkAnimation = ({ text }) => {
  const lineRef = useRef(null);
  const { contextSafe } = useGSAP();

  useEffect(() => {
    const line = lineRef.current;

    const handleMouseEnter = contextSafe(() => {
      gsap.fromTo(
        line,
        { width: "0%", left: "0%" },
        { width: "100%", ease: "power2.out", duration: 0.5 }
      );
    });

    const handleMouseLeave = contextSafe(() => {
      gsap.fromTo(
        line,
        { width: "100%", left: "0%" },
        { width: "0%", left: "100%", ease: "power2.out" }
      );
    });

    const container = line.parentElement;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [contextSafe]);

  return (
    <div className="relative overflow-hidden">
      <h1>{text}</h1>
      <div
        ref={lineRef}
        className="w-0 h-[1px] bg-white absolute bottom-0"
      ></div>
    </div>
  );
};

export default NavLinkAnimation;
