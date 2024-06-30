// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";

// // const LetterColumn = ({ className, letters }) => (
// //   <div className={`w-[8%] h-full relative overflow-hidden   ${className}`}>
// //     <div
// //       className={`h-fit w-full tracking-tighter leading-none text-center  text-[7rem] absolute ${
// //         className.includes("c1") ? "bottom-0" : ""
// //       }`}
// //     >
// //       {letters.map((letter, index) => (
// //         <h1 key={index}>{letter}</h1>
// //       ))}
// //     </div>
// //   </div>
// // );

// // const Loader = () => {
// //   const containerRef = useRef(null);
// //   const containerRef2 = useRef(null);
// //   useEffect(() => {
// //     const b1Elements = containerRef.current.querySelectorAll(".b1 h1");
// //     const c1Elements = containerRef.current.querySelectorAll(".c1 h1");

// //     gsap.to(b1Elements, {
// //       y: "-500%",
// //       duration: 3,
// //     });

// //     gsap.to(c1Elements, {
// //       y: "500%",
// //       duration: 3,
// //     });
// //   }, []);

// //   const lettersData = [
// //     { className: "b1", letters: ["B", "B", "B", "B", "B", "B"] },
// //     { className: "c1", letters: ["A", "A", "A", "A", "A", "A"] },
// //     { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
// //     { className: "c1", letters: ["G", "G", "G", "G", "G", "G"] },
// //     { className: "b1", letters: ["&", "&", "&", "&", "&", "&"] },
// //   ];

// //   const lettersData2 = [
// //     { className: "c1", letters: ["O", "O", "O", "O", "O", "O"] },
// //     { className: "b1", letters: ["L", "L", "L", "L", "L", "L"] },
// //     { className: "c1", letters: ["U", "U", "U", "U", "U", "U"] },
// //     { className: "b1", letters: ["F", "F", "F", "F", "F", "F"] },
// //     { className: "c1", letters: ["S", "S", "S", "S", "S", "S"] },
// //     { className: "b1", letters: ["E", "E", "E", "E", "E", "E"] },
// //     { className: "c1", letters: ["N", "N", "N", "N", "N", "N"] },
// //   ];

// //   return (
// //     <div className="h-screen w-full flex justify-center items-center font-Secondary">
// //       <div
// //         className="h-[7rem] w-[55%] flex gap-1 text-white justify-center items-center"
// //         ref={containerRef}
// //       >
// //         {lettersData.map((item, index) => (
// //           <LetterColumn
// //             key={index}
// //             className={item.className}
// //             letters={item.letters}
// //           />
// //         ))}
// //       </div>
// //       <div
// //         className="h-[7rem] w-[55%] flex gap-1 text-white justify-center items-center"
// //         ref={containerRef2}
// //       >
// //         {lettersData2.map((item, index) => (
// //           <LetterColumn
// //             key={index}
// //             className={item.className}
// //             letters={item.letters}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Loader;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LetterColumn = ({ className, letters }) => (
  <div className={` h-full w-[15%] relative overflow-hidden ${className}`}>
    <div
      className={`h-fit w-full tracking-tighter leading-none flex flex-col items-center justify-center absolute ${
        className.includes("c1") ? "bottom-0" : ""
      }`}
    >
      {letters.map((letter, index) => (
        <h1 className="text-[7rem]" key={index}>
          {letter}
        </h1>
      ))}
    </div>
  </div>
);

const Loader = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const b1Elements = containerRef.current.querySelectorAll(".b1 h1");
    const c1Elements = containerRef.current.querySelectorAll(".c1 h1");

    const b2Elements = containerRef2.current.querySelectorAll(".b1 h1");
    const c2Elements = containerRef2.current.querySelectorAll(".c1 h1");

    gsap.to(b1Elements, {
      y: "-500%",
      duration: 3,
    });

    gsap.to(c1Elements, {
      y: "500%",
      duration: 3,
    });

    gsap.to(b2Elements, {
      y: "-500%",
      duration: 3,
    });

    gsap.to(c2Elements, {
      y: "500%",
      duration: 3,
      onComplete:()=>{
        gsap.to('.loader',{
          height:"0vh",
          delay:1
        })
      }
    });
  }, []);

  const lettersData = [
    { className: "b1", letters: ["B", "B", "B", "B", "B", "B"] },
    { className: "c1", letters: ["A", "A", "A", "A", "A", "A"] },
    { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
    { className: "c1", letters: ["G", "G", "G", "G", "G", "G"] },
  ];
  const lettersData2 = [
    { className: "c1", letters: ["O", "O", "O", "O", "O", "O"] },
    { className: "b1", letters: ["L", "L", "L", "L", "L", "L"] },
    { className: "c1", letters: ["U", "U", "U", "U", "U", "U"] },
    { className: "b1", letters: ["F", "F", "F", "F", "F", "F"] },
    { className: "c1", letters: ["S", "S", "S", "S", "S", "S"] },
    { className: "b1", letters: ["E", "E", "E", "E", "E", "E"] },
    { className: "c1", letters: ["N", "N", "N", "N", "N", "N"] },
  ];
  return (
    <div className="h-screen loader overflow-hidden fixed top-0 z-[99] bg-black w-full flex justify-center items-center font-Secondary">
      <div
        className="h-[7rem] w-[30%]  flex gap-1 text-white justify-center items-center"
        ref={containerRef}
      >
        {lettersData.map((item, index) => (
          <LetterColumn
            key={index}
            className={item.className}
            letters={item.letters}
          />
        ))}
      </div>
      <div
        className="h-[7rem] w-[35%]  flex gap-1 text-white justify-center items-center"
        ref={containerRef2}
      >
        {lettersData2.map((item, index) => (
          <LetterColumn
            key={index}
            className={item.className}
            letters={item.letters}
          />
        ))}
      </div>
    </div>
  );
  ;
};

export default Loader;

// import { useRef, useEffect } from 'react';

// export default function Loader() {

//   const container = useRef(null);
//   const stickyMask = useRef(null);

//   // const initialMaskSize = .8;
//   // const targetMaskSize = 30;
//   // const easing = 0.15;
//   // let easedScrollProgress = 0;

//   // useEffect( () => {
//   //   requestAnimationFrame(animate)
//   // }, [])

//   // const animate = () => {
//   //   const maskSizeProgress = targetMaskSize * getScrollProgress();
//   //   stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
//   //   requestAnimationFrame(animate)
//   // }

//   // const getScrollProgress = () => {
//   //   const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
//   //   const delta = scrollProgress - easedScrollProgress;
//   //   easedScrollProgress += delta * easing;
//   //   return easedScrollProgress
//   // }

//   return (
//     <main className={``}>
//       <div ref={container} className={`relative h-screen`}>
//         <div ref={stickyMask} className={`stickyMask flex overflow-hidden sticky top-0 h-[100vh] items-center justify-center `}>
//          <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719662595/Clot-A1-Digital-0002-SoMe-Crop_zmavkc.png" alt="" />
//         </div>
//       </div>
//     </main>
//   )
// }

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";

// // const Loader = () => {

// //   const svgRef = useRef(null);
// //   useEffect(() => {

// //     gsap.to(svgRef.current, {
// //       scale: 10,
// //       transformOrigin: "center center",
// //       duration:10,

// //     });
// //   }, []);

// //   return (
// //     <main className="h-screen flex items-center justify-center">
// //       <svg
// //         ref={svgRef}
// //         xmlns="http://www.w3.org/2000/svg"
// //         width="200"
// //         height="200"
// //         viewBox="0 0 58 60"
// //         fill="none"
// //         className="max-sm:h-[2rem] max-md:h-[2.2rem] h-[5rem]"
// //       >
// //         <path
// //           className="part1"
// //           fillRule="evenodd"
// //           clipRule="evenodd"
// //           d="M33.2787 17.4522C33.2787 19.1723 33.9573 20.7546 35.2392 22.0313C37.0421 23.8237 39.0166 24.0686 40.3599 23.9611C41.958 23.8307 43.5654 23.1038 44.6632 22.0147L44.9444 21.7346C45.7511 20.931 46.2457 20.4383 46.7275 19.9731L50.0375 23.1838L52.3616 20.8599L52.3931 20.8026L49.132 17.5532L51.4515 15.2408L49.0267 12.8259L46.7069 15.1406C46.7069 15.1406 39.9283 8.37288 39.0873 7.52677C38.6355 7.06986 38.3585 6.58897 38.3585 5.82527C38.3585 5.01591 38.7252 4.47583 39.0372 4.16748C39.4905 3.71445 40.1583 3.4328 40.7693 3.4328C41.7012 3.4328 42.2761 3.92452 42.4727 4.13305L42.5232 4.18334L42.5737 4.13537L43.9515 2.76775L44.9025 1.82066L44.9433 1.77308L44.8788 1.7015C44.2553 1.06624 42.8852 0 40.7611 0C39.1424 0 37.6434 0.642996 36.5444 1.80906C35.5146 2.89813 34.9273 4.35744 34.9273 5.81405C34.9273 8.23322 36.3098 9.72 37.2876 10.6253L35.2248 12.6359C34.0249 13.8294 33.2787 15.6776 33.2787 17.4522ZM37.6578 15.0644L39.7061 13.0228L44.2914 17.5462C44.0821 17.7609 43.194 18.6535 42.2163 19.6187C41.0354 20.7751 39.0795 21.0181 37.6578 19.6044C37.0374 18.9827 36.7099 18.212 36.7099 17.3698C36.7099 16.5214 37.0657 15.6571 37.6578 15.0644Z"
// //           fill="#fff"
// //         />
// //       </svg>
// //     </main>
// //   );
// // };

// // export default Loader;
