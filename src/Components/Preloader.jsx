
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const digit1Ref = useRef();
  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const [numbers, setNumbers] = useState({
    digit1: ["0", "1"],
    digit2: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    digit3: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  });

  useEffect(() => {
    const animateCounter = (digit, duration, delay = 1) => {
      const numHeight = digit.querySelector(".num").clientHeight;
      const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;

      const tween = gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
        onComplete: () => {
          if (delay === 5) {
            gsap.to('.counter', {
              opacity: 0
            });
            gsap.to('.pre-loader', {
              height: 0,
              delay: 1,
              duration: 0.8,
              ease: "circ.in"
            });
          }
        }
      });

      return () => tween.kill();
    };

    const digit3Tween = animateCounter(digit3Ref.current, 5);
    const digit2Tween = animateCounter(digit2Ref.current, 6);
    const digit1Tween = animateCounter(digit1Ref.current, 2, 5);

    return () => {
      digit3Tween();
      digit2Tween();
      digit1Tween();
    };
  }, []);

  const renderDigits = (digitArray) => {
    return digitArray.map((num, index) => (
      <div key={index} className={`num ${index === 1 ? "relative right-[-12px]" : ""} `}>{num}</div>
    ));
  };

  return (
    <div className="pre-loader w-full h-screen font-primary overflow-hidden flex items-center justify-center bg-black text-white fixed top-0 left-0 z-[999]">
      <div
        style={{ clipPath: "polygon(0 0 , 100% 0, 100% 100px, 0 100px)" }}
        className="counter h-[10vh] flex text-[100px] max-sm:text-[50px] leading-[150px]"
      >
        <div ref={digit1Ref} className="digit-1 relative top-[-15px]">
          {renderDigits(numbers.digit1)}
        </div>
        <div ref={digit2Ref} className="digit-2 relative top-[-15px]">
          {renderDigits(numbers.digit2)}
        </div>
        <div ref={digit3Ref} className="digit-3 relative top-[-15px]">
          {renderDigits(numbers.digit3)}
        </div>
        <div className="digit-4 relative top-[-15px]">
          %
        </div>
      </div>
    </div>
  );
};

export default Preloader;
