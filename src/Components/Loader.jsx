import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

const Loader = ({ contentLoaded, onLoaderComplete }) => {
  const [count, setCount] = useState(0);
  const loaderTextRef = useRef();
  const timerRef = useRef();
  useEffect(() => {
    const splitedLoaderh1 = new SplitTextJS(loaderTextRef.current);
    if (contentLoaded) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 100) {
            return prevCount + 1;
          } else {
            clearInterval(timerRef.current);
            return 100;
          }
        });
      }, 70);

      if (count === 100) {
        const tl = gsap.timeline({
          onComplete: () => {
            onLoaderComplete();
          },
        });
        tl.to(".count-text", {
          opacity: 0,
          duration: 0.5,
        });
        tl.to(".main-loader", {
          height: 0,
          duration: 1,
        });
      }
    }

    return () => clearInterval(timerRef.current);
  }, [count, contentLoaded, onLoaderComplete]);

  return (
    <div className="w-full h-screen main-loader flex items-center justify-center text-white fixed z-[999] top-0 bg-black">
      <div className="flex count-text gap-5 font-primary">
        <h1>{count}</h1>
        <h1 ref={loaderTextRef}>BANG & OLUFSEN</h1>
      </div>
    </div>
  );
};

export default Loader;
