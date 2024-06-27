<<<<<<< HEAD
=======
// import React from 'react'
// import { useTransform, motion, useScroll } from 'framer-motion';
// import { useRef } from 'react';
// import Button from "../Components/Button"
// import TextAnimation from './TextAnimation';

// const Wbo = () => {
//  const projects = [
//         {
//           title: "Art",
//           subtitle:"KRESTEN BJØRN KRAB-BJERRE, CREATIVE DIRECTOR",
//           description: "We don’t work from technology. We always work from the idea.”Creative Director of Design, Kresten Bjørn Krab-Bjerre, tells us how human experience always guides the development of new Bang & Olufsen products.",
//           src: "/src/assets/images/WorldOFBnO/WoB3.webp",
//         },
//         {
//           title: "Music",
//           subtitle:"LIVE FROM THE 10TH ARRONDISSEMENT",
//           description: "Music in its wildest form. Crafted on the spot. Right in front of you.Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris. Four groundbreaking artists. 60 minutes of yet-to-be-heard music.",
//           src: "https://images.ctfassets.net/8cd2csgvqd3m/7CrqV1h5HtmVhgClCTJ2Mh/ec1c7c76fddb342fac2fa41f5dacde0d/JJ_mosaic_1.jpg?q=90&fm=webp&w=1440&h=1440&fit=fill",

//         },
//         {
//           title: "Culture",
//           subtitle:"AT MILAN FERRARI FLAGSHIP STORE",
//           description: "Bang & Olufsen and Ferrari hosted a celebration event on Tuesday, the 29 of August at the Ferrari Flagship Store in the heart of Milan. Guests were offered an exclusive first look at the newly launched product collection which was crafted in Bang & Olufsen HQ in Struer, Denmark, and were ablet to enjoy a motorsport exhibition as well.",
//           src: "/src/assets/images/WorldOFBnO/WoB7.webp",

//         },
//         {
//           title: "Living",
//           subtitle:"SPEAKERS TO SUIT YOUR SPACE",
//           description: "Sound moves you. The right music can instantly elevate your mood, and the right home speaker means you can enjoy those moments of magic with more depth and detail. Our unrivalled audio technology means your music sounds better in your space.",
//           src: "/src/assets/images/WorldOFBnO/WoB16.webp",

//         },
//         {
//           title: "timelessness",
//           subtitle:"THE BEOSYSTEMS",
//           description: "Bang & Olufsen is expanding its Recreated Classics Program with the launch of Beosystems – a limited edition music system that transcends time by bridging the gap between one of our iconic designs from 1972 and today’s cutting-edge digital technology. ",
//          src:"/src/assets/images/WorldOFBnO/WoB11.webp"
//         }
//       ]
//       const container = useRef(null);
//       const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//       })
//   return (
//     <>
//     <TextAnimation text={'Explore the World of B & O'} className={`bg-white text-[5rem] font-Decorative pt-[10vh]`}/>
//      <div ref={container} className={`relative bg-white`}>
//       {
//         projects.map( (project, i) => {
//           const targetScale = 1 - ( (projects.length - i) * 0.05);
//           return <Card key={`${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
//         })
//       }
//     </div>
//     </>

//   )
// }
// export default Wbo

// const Card = ({i, title, description, src, subtitle , progress, range, targetScale}) => {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   })

//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div ref={container} className={`h-screen  flex flex-col items-center justify-center sticky top-[0px]`}>
//       <motion.div
//         style={{backgroundColor: "#E4E4E7", scale, top:`calc(-5vh + ${i * 30}px)`}}
//         className={`flex flex-col relative top-[-25%] h-[70vh] max-lg:w-[90%] w-[70%] p-[50px] origin-top max-sm:p-[20px]`}
//       >
//         <h2 className='text-center m-0 text-3xl font-primary uppercase'>{title}</h2>
//         <div className={`flex max-lg:flex-col w-full mt-[50px] gap-[50px] max-lg:gap-10 `}>
//           <div className={`w-[40%] max-lg:w-full`}>
//             <h3 className='text-sm font-primary pb-5 max-lg:pb-2'>{subtitle}</h3>
//             <p className='text-lg max-lg:text-sm leading-tight font-Secondary pb-5'>{description}</p>
//             <Button text={'View More'} />
//           </div>
//           <div className={`w-[55%] max-lg:w-full h-full overflow-hidden`}>
//             <motion.div
//               className={`w-full h-full  overflow-hidden`}
//               style={{scale: imageScale}}
//             >
//               <img
//                 className='object-cover h-[45vh] max-lg:h-[30vh] max-sm:h-[28vh] w-full'
//                 src={src}
//                 alt="image"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// import React from "react";
// import { useState } from "react";
// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import TextAnimation from "./TextAnimation";
// import BorderAnim from "./BorderAnim"
// const projects = [
//   {
//     title: "Art",
//     para: "COLOUR HAS NEVER SOUNDED SO GOOD",
//     src: "https://images.ctfassets.net/8cd2csgvqd3m/2cx7Ycnlbw9DJDCGGF2hKI/7885012d341b2c9bbe66f2b173f1de7c/BS2_Hero_16x9_copy.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
//   },
//   {
//     title: "Music",
//     para: "LIVE FROM THE 10TH ARRONDISSEMENT",
//     src: "https://images.ctfassets.net/8cd2csgvqd3m/14gm3YXFSxJ7faCuyrO7pZ/d6b1762adf3325f3927e6380ef9c55eb/jj_loc.jpg?q=85&fm=webp&w=1440&h=1440&fit=fill",
//   },
//   {
//     title: "culture",
//     para: "AT MILAN FERRARI FLAGSHIP STORE",
//     src: "https://images.ctfassets.net/8cd2csgvqd3m/5hK1YG8tyY6oGpJm2rA0i/e76eab4a4bd861bc235ec38f6047759d/Fromthetop.jpg?q=90&w=1920&fit=fill&fm=webp",
//   },
//   {
//     title: "living",
//     para: "INTERVIEW WITH CAROLINE WOZNIACKI",
//     des: "From her new home in Miami",
//     src: "https://images.ctfassets.net/8cd2csgvqd3m/3lROC8EVABRApBreOcEmlB/92ec406e4a65f6558ee45312c0cb83e7/Hero_opt.jpg?q=90&w=1920&fit=fill&fm=webp",
//   },
//   {
//     title: "timelessness",
//     para: "THE BEOSYSTEMS",
//     des: "Timeless, for 50 years and counting",
//     src: "https://images.ctfassets.net/8cd2csgvqd3m/3BQRh5yu8C24EkXgjB0U5O/f807fc865738b4c5387637b26e19bf9c/BS_73_side.jpg?q=85&fm=webp&w=1440&h=1440&fit=fill",
//   },
// ];

// const Wbo = () => {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   return (
//     <div className="h-[140vh] max-sm:h-[90vh] w-full flex flex-col text-white items-center justify-between">
//       <TextAnimation
//         text={"EXPLORE THE WORLD OF B&O"}
//         textSize={"text-[6rem] max-sm:text-[2rem]"}
//         className={" pt-20 bg-[#000] text-white font-Decorative  "}
//       />
//       {/* <BorderAnim/> */}
//       <div className="w-[70vw] max-sm:w-[90%] flex flex-col items-center justify-center">
//         {projects.map((project, index) => {
//           return (
//             <Project
//               index={index}
//               para={project.para}
//               des={project.des}
//               title={project.title}
//               setModal={setModal}
//               key={index}
//             />
//           );
//         })}
//       </div>
//       <Modal modal={modal} projects={projects} />
//     </div>
//   );
// };

// export default Wbo;

// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//   },
// };

// const Modal = ({ modal, projects }) => {
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   useEffect(() => {
//     let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     let xMoveCursor = gsap.quickTo(cursor.current, "left", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     let yMoveCursor = gsap.quickTo(cursor.current, "top", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });

//     window.addEventListener("mousemove", (e) => {
//       const { pageX, pageY } = e;
//       xMoveContainer(pageX);
//       yMoveContainer(pageY);
//       xMoveCursor(pageX);
//       yMoveCursor(pageY);
//       xMoveCursorLabel(pageX);
//       yMoveCursorLabel(pageY);
//     });
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={modalContainer}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//         className={`h-[35vh] max-sm:h-[20vh] max-sm:w-[30vh] w-[20vw] absolute  overflow-hidden flex items-center justify-center pointer-events-none`}
//       >
//         <div
//           style={{
//             top: index * -100 + "%",
//             transition: "top 0.5s cubic-bezier(0.76, 0 ,0.24, 1)",
//           }}
//           className={`h-full w-full absolute`}
//         >
//           {projects.map((project, index) => {
//             const { src, color } = project;
//             return (
//               <div
//                 className={`h-full w-full flex items-center justify-center`}
//                 style={{ backgroundColor: color }}
//                 key={`modal_${index}`}
//               >
//                 <img
//                   src={src}
//                   className="h-full object-cover w-full"
//                   alt="image"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </motion.div>
//       <motion.div
//         ref={cursor}
//         className={`w-[80px] h-[80px] rounded-[50%] bg-[#00000043] pointer-events-none text-white absolute z-2 flex items-center justify-center text-xl`}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       ></motion.div>
//       <motion.div
//         ref={cursorLabel}
//         className={`bg-transparent w-[40px] h-[40px] rounded-[50%] pointer-events-none text-white text-sm absolute z-2 flex items-center justify-center `}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >
//         View
//       </motion.div>
//     </>
//   );
// };

// const Project = ({ index, title, setModal, des, para }) => {
//   return (
//     <div
//       onMouseEnter={() => {
//         setModal({ active: true, index });
//       }}
//       onMouseLeave={() => {
//         setModal({ active: false, index });
//       }}
//       className={`flex w-full justify-between items-center sm:px-[100px] py-[50px] cursor-pointer transition-all duration-200 title-hover:translate-x-[-10px] para-hover:transalte-x-[10px] hover:opacity-50 `}
//     >
//       <h2 className="title text-[60px] max-sm:text-xl transition-all uppercase font-primary duration-500">
//         {title}
//       </h2>
//       <div>
//         <p className="para transition-all max-sm:text-xs duration-500 uppercase text-end font-primary ">
//           {para}
//         </p>
//         <p className="text-end font-primary max-sm:text-xs">{des}</p>
//       </div>
//     </div>
//   );
// };

// import React from 'react';

// const Wbo = () => {
//     const data = [
//         {
//             title: 'Art',
//             img1: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww',
//             img2: 'https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww'
//         },
//         {
//             title: 'Music',
//             img1: 'https://images.unsplash.com/photo-1718964382789-57b24c5c4b97?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
//             img2: 'https://images.unsplash.com/photo-1719165104360-f7e637a1785a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
//         },
//         {
//             title: 'Culture',
//             img1: 'https://plus.unsplash.com/premium_photo-1714839369467-bc0d287c4d93?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
//             img2: 'https://plus.unsplash.com/premium_photo-1716968595578-d192a02f0425?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
//         },
//         {
//             title: 'Living',
//             img1: 'https://images.unsplash.com/photo-1718627829230-a3f11114adb5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
//             img2: 'https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D'
//         },
//         {
//             title: 'Timelessness',
//             img1: 'https://plus.unsplash.com/premium_photo-1717604724699-724a4005c819?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
//             img2: 'https://images.unsplash.com/photo-1718963892337-b6729c302b8f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D'
//         },
//     ];

//     return (
//         <div className="page4 h-[120vh] w-full bg-white relative z-10 px-10 py-[10%]">
//             {data.map((item, index) => (
//                 <ElemBlock key={index} item={item}/>
//             ))}
//         </div>
//     );
// };

// const ElemBlock = ({item}) => {
//     return (
//         <div className="elem mt-2 flex items-center justify-center relative group uppercase">
//             <img className=' absolute left-12 opacity-0 transition-all ease-out duration-[.5s] translate-y-[10%] rotate-[2deg] group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:rotate-0' src={item.img1} alt=""/>
//             <div className="text-div h-[8rem] overflow-hidden">
//                 <h1 className='text-[6rem] font-semibold transition-all ease-out duration-[.5s] group-hover:translate-y-[-100%] group-hover:text-[#ee6c6c]'>{item.title}</h1>
//                 <h1 className='text-[6rem] font-semibold transition-all ease-out duration-[.5s] group-hover:translate-y-[-100%] group-hover:text-[#ee6c6c]'>{item.title}</h1>
//             </div>
//             <img className=' absolute right-12 opacity-0 transition-all ease-out duration-[.5s] translate-y-[10%] rotate-[2deg] group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:rotate-0' src={item.img2} alt=""/>
//         </div>
//     );
// };

// export default Wbo;

// import { useRef } from "react";
// import gsap from "gsap";
// import TextAnimation from "./TextAnimation";

// export default function Wbo() {
//   const plane1 = useRef(null);
//   const plane2 = useRef(null);
//   const plane3 = useRef(null);
//   let requestAnimationFrameId = null;
//   let xForce = 0;
//   let yForce = 0;
//   const easing = 0.08;
//   const speed = 0.01;

//   const manageMouseMove = (e) => {
//     const { movementX, movementY } = e;
//     xForce += movementX * speed;
//     yForce += movementY * speed;

//     if (requestAnimationFrameId === null) {
//       requestAnimationFrameId = requestAnimationFrame(animate);
//     }
//   };

//   const lerp = (start, target, amount) =>
//     start * (1 - amount) + target * amount;

//   const animate = () => {
//     xForce = lerp(xForce, 0, easing);
//     yForce = lerp(yForce, 0, easing);
//     gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
//     gsap.set(plane2.current, {
//       x: `+=${xForce * 0.5}`,
//       y: `+=${yForce * 0.5}`,
//     });
//     gsap.set(plane3.current, {
//       x: `+=${xForce * 0.4}`,
//       y: `+=${yForce * 0.4}`,
//     });

//     if (Math.abs(xForce) < 0.01) xForce = 0;
//     if (Math.abs(yForce) < 0.01) yForce = 0;

//     if (xForce !== 0 || yForce !== 0) {
//       requestAnimationFrame(animate);
//     } else {
//       cancelAnimationFrame(requestAnimationFrameId);
//       requestAnimationFrameId = null;
//     }
//   };
//   const WboData = [
//     [
//       {
//         img: "8",
//         title: "Craft Stories",
//         style: "left-[10%] top-[58%] h-[40vh] w-[28vw]",
//       },
//       {
//         img: "7",
//         title: "Craft Stories",
//         style: "right-[8%] bottom-[42%] h-[55vh] w-[20vw]",
//       },
//     ],
//     [
//       {
//         img: "4",
//         title: "Craft Stories",
//         style: "left-[42%] bottom-[58%] h-[45vh] w-[18vw]",
//       },
//       {
//         img: "2",
//         title: "Craft Stories",
//         style: "left-[45%] bottom-[3%] h-[40vh] w-[32vw]",
//       },
//     ],
//     [
//       {
//         img: "3",
//         title: "Craft Stories",
//         style: "top-[12%] left-[8%] h-[38vh] w-[25vw]",
//       },

//     ],
//   ];
//   return (
//     <div
//       onMouseMove={(e) => manageMouseMove(e)}
//       className="main h-[120vh]  w-screen bg-white text-black overflow-hidden relative"
//     >
//       {WboData.map((item, index) => (
//         <div
//           key={index}
//           ref={index === 1 ? plane1 : index === 2 ? plane2 : plane3}
//           className={`plane w-full h-full absolute filter`}
//         >
//           {item.map((item, idx) => (
//             <div className={` absolute  ${item.style}`}>
//               <img
//               key={idx}
//               src={`src/assets/images/WorldOFBnO/WoB${item.img}.webp`}
//               className={`h-full w-full object-cover `}
//               alt="img"
//             />
//             <h3 className=" uppercase text-sm font-primary pt-1">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       ))}
//       <div className="title absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         {/* <h1 className="text-4xl font-medium mb-4">Floating Images Gallery</h1>
//         <p className="text-gray-400">Next.js and GSAP</p> */}
//         <TextAnimation
//           text={"with bang & olufsen"}
//           className={"text-[1rem] text-black uppercase font-primary"}
//         />
//         <TextAnimation
//           text={"Explore the World"}
//           className={"text-[3rem] pt-2 text-black uppercase font-primary"}
//         />
//       </div>
//     </div>
//   );
// }

>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
<<<<<<< HEAD
=======
import Button from "./Button";
const slider1 = [
  { img: "16", title: "SPEAKERS TO SUIT YOUR SPACE" },
  { img: "13", title: "Charles Leclerc x Bang & Olufsen" },
  { img: "10", title: "THE BEOSYSTEMS" },
  { img: "9", title: "INTERVIEW WITH CAROLINE WOZNIACKI" },
];

const slider2 = [
  { img: "15", title: "PERSONALISATION AT YOUR FINGERTIPS" },
  { img: "1", title: "RECREATED CLASSICS" },
  { img: "17", title: "THE DESIGNERS OF BEOSOUND A5" },
  { img: "5", title: "LIVE FROM THE 10TH ARRONDISSEMENT" },
];
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66

export default function Wbo() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div className="bg-white h-[150vh] max-md:h-[110vh] w-full overflow-hidden">
      <TextAnimation
        text={"Explore the World of B & O"}
        className={`text-[4rem] max-md:text-[1.8rem] pt-[10vh] font-Decorative`}
      />
      <div
        ref={container}
        className={`flex flex-col gap-[15vh] max-md:gap-[8vh] relative mt-[10vh] bg-white z-[1]`}
      >
        <motion.div
          style={{ x: x1 }}
          className={`flex relative gap-[3vw] w-[120vw] left-[-10vw] max-md:left-[-30vw]`}
        >
<<<<<<< HEAD
          {item.map((item, idx) => (
            <div className={`w-[15vw] absolute h-[35vh] ${item.style}`}>
              <img
              key={idx}
              src={`src/assets/images/WorldOFBnO/WoB${item.img}.webp`}
              className={`h-full w-full object-cover `}
              alt="img"
            />
            <h3 className=" uppercase text-sm font-primary pt-1">{item.title}</h3>
            </div>
          ))}
        </div>
      ))}
      <div className="title absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <TextAnimation
          text={"with bang & olufsen"}
          className={"text-[1rem] text-black uppercase font-primary"}
        />
        <TextAnimation
          text={"Explore the World"}
          className={"text-[3rem] pt-2 text-black uppercase font-primary"}
        />
=======
          {slider1.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[25%] h-[40vh] max-md:h-[30vh] max-md:w-[35%] flex-shrink-0 flex flex-col items-start  justify-center`}
              >
                <div className={`w-full h-full overflow-hidden`}>
                  <img
                    alt={"image"}
                    className="object-cover hover:scale-[1.2] duration-300 h-full w-full"
                    src={`/src/assets/images/WorldOFBnO/WoB${item.img}.webp`}
                  />
                </div>
                <h1 className="text-md uppercase py-1 max-md:text-xs font-primary">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className={`flex  gap-[3vw] w-[120vw] left-[-10vw]`}
        >
          {slider2.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-[25%] h-[40vh]  max-md:h-[30vh] max-md:w-[35%] flex-shrink-0 flex flex-col items-start justify-center`}
              >
                <div className={`w-full h-full overflow-hidden`}>
                  <img
                    alt={"image"}
                    className="object-cover hover:scale-[1.2] duration-300 h-full w-full"
                    src={`/src/assets/images/WorldOFBnO/WoB${item.img}.webp`}
                  />
                </div>
                <h1 className="text-md uppercase py-1 max-md:text-xs font-primary">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </motion.div>
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
      </div>
      <Button
        text={"View More"}
        customclass={` w-fit mx-auto mt-[10vh] max-sm:mt-[5vh] bg-white border-[1px]`}
        circ={`bg-black`}
        p={`group-hover:text-white`}
      />
    </div>
  );
}
