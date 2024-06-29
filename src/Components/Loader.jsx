

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Loader = () => {
//   const lettersRef = useRef([]);

//   useEffect(() => {
//     lettersRef.current.forEach((element, index) => {
//       gsap.set(element.querySelectorAll("h1"), { y: index % 2 === 0 ? "100%" : "-100%" });
//       gsap.to(element.querySelectorAll("h1"), {
//         y: "0%",

//         duration: 1,
//         stagger: 0.1,

//       });
//     });
//   }, []);

//   return (
//     <div className="h-screen w-full bg-white flex justify-center items-center">
//       <div className="h-[15vh] w-[50%] bg-blue-100 flex text-9xl">
//         {["B", "A", "N", "G", "&", "O", "L", "U", "F", "S", "E", "N"].map((letter, index) => (
//           <div key={index} className="bg-red-500 relative overflow-hidden" ref={(el) => (lettersRef.current[index] = el)}>
//             <div className={`letter ${letter.toLowerCase()}`}>
//               {[...Array(6)].map((_, i) => (
//                 <h1 key={i}>{letter}</h1>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Loader;


// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Loader = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const b1Elements = containerRef.current.querySelectorAll(".b1 h1");
//     const c1Elements = containerRef.current.querySelectorAll(".c1 h1");

//     gsap.to(b1Elements, {
//       y: "-500%",
//       duration: 2,
      
    
//     });

//     gsap.to(c1Elements, {
//       y: "500%",
//       duration: 2,
   
    
//     });
//   }, []);

//   return (
//     <div className='h-screen w-full flex justify-center items-center bg-white font-Decorative '>
//       <div className="h-[14%] w-[55%] flex " ref={containerRef}>
//         <div className="w-[6%] h-full relative overflow-hidden ">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem] absolute">
//             <h1>B</h1>
//             <h1>B</h1>
//             <h1>B</h1>
//             <h1>B</h1>
//             <h1>B</h1>
//             <h1>B</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute bottom-0">
//             <h1>A</h1>
//             <h1>A</h1>
//             <h1>A</h1>
//             <h1>A</h1>
//             <h1>A</h1>
//             <h1>A</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full relative overflow-hidden">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute">
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//           </div>
//         </div>
//         <div className="w-[8%] h-full relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem] absolute bottom-0">
//             <h1>G</h1>
//             <h1>G</h1>
//             <h1>G</h1>
//             <h1>G</h1>
//             <h1>G</h1>
//             <h1>G</h1>
//           </div>
//         </div>
//         <div className="w-[14%] h-full  relative overflow-hidden">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute">
//             <h1>&</h1>
//             <h1>&</h1>
//             <h1>&</h1>
//             <h1>&</h1>
//             <h1>&</h1>
//             <h1>&</h1>
//           </div>
//         </div>
//         <div className="w-[8.2%] h-full  relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute bottom-0">
//             <h1>O</h1>
//             <h1>O</h1>
//             <h1>O</h1>
//             <h1>O</h1>
//             <h1>O</h1>
//             <h1>O</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute">
//             <h1>L</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//             <h1>L</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute bottom-0">
//             <h1>U</h1>
//             <h1>U</h1>
//             <h1>U</h1>
//             <h1>U</h1>
//             <h1>U</h1>
//             <h1>U</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute">
//             <h1>F</h1>
//             <h1>F</h1>
//             <h1>F</h1>
//             <h1>F</h1>
//             <h1>F</h1>
//             <h1>F</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute bottom-0">
//             <h1>S</h1>
//             <h1>S</h1>
//             <h1>S</h1>
//             <h1>S</h1>
//             <h1>S</h1>
//             <h1>S</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="b1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem]  absolute">
//             <h1>E</h1>
//             <h1>E</h1>
//             <h1>E</h1>
//             <h1>E</h1>
//             <h1>E</h1>
//             <h1>E</h1>
//           </div>
//         </div>
//         <div className="w-[6%] h-full  relative overflow-hidden">
//           <div className="c1 h-fit w-full tracking-tighter leading-[8rem] text-center text-[7rem] absolute bottom-0">
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//             <h1>N</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LetterColumn = ({ className, letters }) => (
  <div className={`w-[8%] h-full relative overflow-hidden  ${className}`}>
    <div className={`h-fit w-full tracking-tighter leading-none text-center  text-[7rem] absolute ${className.includes('c1') ? 'bottom-0' : ''}`}>
      {letters.map((letter, index) => (
        <h1 key={index}>{letter}</h1>
      ))}
    </div>
  </div>
);

const Loader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const b1Elements = containerRef.current.querySelectorAll(".b1 h1");
    const c1Elements = containerRef.current.querySelectorAll(".c1 h1");

    gsap.to(b1Elements, {
      y: "-500%",
      duration: 3,
    });

    gsap.to(c1Elements, {
      y: "500%",
      duration: 3,
    });
  }, []);

  const lettersData = [
    { className: "b1", letters: ["B", "B", "B", "B", "B", "B"] },
    { className: "c1", letters: ["A", "A", "A", "A", "A", "A"] },
    { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
    { className: "c1", letters: ["G", "G", "G", "G", "G", "G"] },
    { className: "b1", letters: ["&", "&", "&", "&", "&", "&"] },
    { className: "c1", letters: ["O", "O", "O", "O", "O", "O"] },
    { className: "b1", letters: ["L", "L", "L", "L", "L", "L"] },
    { className: "c1", letters: ["U", "U", "U", "U", "U", "U"] },
    { className: "b1", letters: ["F", "F", "F", "F", "F", "F"] },
    { className: "c1", letters: ["S", "S", "S", "S", "S", "S"] },
    { className: "b1", letters: ["E", "E", "E", "E", "E", "E"] },
    { className: "c1", letters: ["N", "N", "N", "N", "N", "N"] },
  ];

  return (
    <div className='h-screen w-full flex justify-center items-center bg-white font-Decorative'>
      <div className="h-[7rem] w-[55%] flex gap-1  justify-center items-center" ref={containerRef}>
        {lettersData.map((item, index) => (
          <LetterColumn key={index} className={item.className} letters={item.letters} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
