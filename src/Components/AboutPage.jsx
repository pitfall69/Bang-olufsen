import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Button from "../Components/Button";
const AboutPara =
  "We believe in the power of sound and vision to enrich lives and connect people. This conviction fuels our relentless pursuit of innovation, merging our rich heritage with contemporary sensibilities to craft products that endure through time. At Bang & Olufsen, luxury transcends opulence it embodies delivering an extraordinary experience that surpasses the ordinary.";
const AboutPage = () => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: 2,
        start: "10% 30%",
        end: "10% 0%",
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2,
    });
  };

  const splitWords = (AboutPara) => {
    let body = [];
    AboutPara.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p
          key={word + "_" + i}
          className=" text-[3rem]  leading-tight max-sm:text-[1.4rem]"
        >
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_ " + i}
          ref={(el) => {
            refs.current.push(el);
          }}
          className="opacity-10"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div className="relative flex gap-5 xl:px-[20%] items-center h-screen w-full max-sm:h-[75vh] bg-[#ECDFD6]">
      <h2 className="font-Decorative text-3xl absolute top-[25%] left-[10%]">About</h2>
      <div
        ref={container}
        className="flex flex-col overflow-hidden h-[70%] justify-center "
      >
        <p
          ref={body}
          className="w-full max-sm:w-[75%] gap-x-2 pb-10 font-[500] uppercase font-['Melodrama'] flex flex-wrap"
        >
          {splitWords(AboutPara)}
        </p>
        <Button text={'learn More'} />
      </div>
     
    </div>
  );
};

export default AboutPage;

// import React from 'react'

// const AboutPage = () => {
//   return (
//     <div className='relative h-screen px-10 py-20 w-full bg-white'>
//       <h1 className='text-[10rem] leading-none w-[25%]   '>ABOUT US</h1>
//       <h2 className='absolute text-4xl  w-[46%] left-[20%] top-[38%] '>We believe in the power of sound and vision to enrich lives and connect people. This conviction fuels our relentless pursuit of innovation, merging our rich heritage with contemporary sensibilities to craft products that endure through time. At Bang & Olufsen, luxury transcends opulence it embodies delivering an extraordinary experience that surpasses the ordinary.</h2>
//       <div className='h-[50vh] w-[20vw] bg-green-400 absolute top-[40%] left-[75%] '>
//         <img className='object-cover h-full w-full' src="https://images.ctfassets.net/8cd2csgvqd3m/3xSG628osT5jItCw8npvGu/42e4616dc1086d5bcc88a8c4ec2603d4/Beogram_4000c_0035.png?q=85&fm=webp&w=828&h=828&fit=fill" alt="" />
//       </div>
//       <div className='h-[50vh] w-[30vw] bg-green-400 absolute top-[0%] left-[75%] -rotate-[20deg]' >
//        <div className='bg-red-200 w-[80%]  h-[30%] rotate-[20deg] -10% overflow-hidden'>

//        </div>
//       </div>
//     </div>
//   )
// }

// export default AboutPage
