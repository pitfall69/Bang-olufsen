// // // import { motion } from "framer-motion";
// // // import gsap from "gsap"
// // // import { useEffect, useState } from "react";
// // // const Inner = ({ children }) => {
// // //   const anim = (variants) => {
// // //     return {
// // //       initial: "initial",
// // //       animate: "enter",
// // //       exit: "exit",
// // //       variants,
// // //     };
// // //   };
// // //   const opacity = {
// // //     initial: {
// // //       opacity: 0,
// // //     },
// // //     enter: {
// // //       opacity: 1,
// // //       transition: {
// // //         duration: .2,
// // //         ease:[0.32, 0, 0.67, 0]
// // //       },
// // //     },
// // //     exit: {
// // //       opacity: 1,
// // //     },
// // //   };
// // //   const slide = {
// // //     initial: {
// // //       top: "100vh",
// // //     },
// // //     enter: {
// // //       top: "100vh",
// // //       transition: {
// // //         duration: 2,
// // //         ease: [0.64, 0, 0.78, 0],
// // //       },
// // //     },
// // //     exit: {
// // //       top: "0vh",
// // //       transition: {
// // //         duration: 2,
// // //         ease: [0.64, 0, 0.78, 0],
// // //       },
// // //     },
// // //   };
// // //   const perspective = {
// // //     initial: {
// // //       y: 0,
// // //       scale: 1,
// // //       opacity:1
// // //     },
// // //     enter: {
// // //       y: 0,
// // //       scale: 1,
// // //       opacity:1
// // //     },
// // //     exit: {
// // //       y: 200,
// // //       rotate:"5deg",
// // //       scale:.8,
// // //       transition: {
// // //         duration: 1.8,
// // //         ease: [0.64, 0, 0.78, 0],
// // //       },
// // //       opacity:.05
// // //     },
// // //   };
// // //   const [loaderCompleted, setloaderCompleted] = useState(false)
// // //   useEffect(()=>{
// // //     const tl = gsap.timeline({
// // //       onComplete:()=>{
// // //          setloaderCompleted(prev => !prev)
// // //          console.log(loaderCompleted);
// // //       }
// // //     })
// // //     tl.from('.black-div',{
// // //       y:"0",
// // //       duration:.9
// // //     })
// // //     tl.to('.black-div',{
// // //       height:"0vh",
// // //       duration:.9
// // //     })
// // //     tl.to('.inner',{
// // //       scale:1
// // //     })
// // //   },[])
 
// // //   return (
// // //     <div className={`inner scale-50 bg-black h-screen overflow-hidden`}>
// // //       <div className="black-div w-full h-screen bg-black"></div>
// // //       <motion.div
// // //         {...anim(slide)}
// // //         className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"
// // //       ></motion.div>
// // //       <motion.div className="page" {...anim(perspective)}>
// // //         <motion.div {...anim(opacity)}>{children}</motion.div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default Inner;


// // // // import { motion } from "framer-motion";
// // // // const Inner = ({ children }) => {
// // // //   const anim = (variants) => {
// // // //   };
// // // //   const opacity = {
// // // //     initial: {
// // // //       opacity: 0,
// // // //     },
// // // //     enter: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         duration: .2,
// // // //         ease:[0.32, 0, 0.67, 0]
// // // //       },
// // // //     },
// // // //     exit: {
// // // //       opacity: 1,
// // // //     },
// // // //   };
// // // //   const slide = {
// // // //     initial: {
// // // //       top: "100vh",
// // // //     },
// // // //     enter: {
// // // //       top: "100vh",
// // // //       transition: {
// // // //         duration: 2,
// // // //         ease: [0.64, 0, 0.78, 0],
// // // //       },
// // // //     },
// // // //     exit: {
// // // //       top: "0vh",
// // // //       transition: {
// // // //         duration: 2,
// // // //         ease: [0.64, 0, 0.78, 0],
// // // //       },
// // // //     },
// // // //   };
// // // //   const perspective = {
// // // //     initial: {
// // // //       y: 0,
// // // //       scale: 1,
// // // //       opacity:1
// // // //     },
// // // //     enter: {
// // // //       y: 0,
// // // //       scale: 1,
// // // //       opacity:1
// // // //     },
// // // //     exit: {
// // // //       y: -300,
// // // //       x: 100,
// // // //       scale:.9,
// // // //       transition: {
// // // //         duration: 1.9,
// // // //         ease: [0.64, 0, 0.78, 0],
// // // //       },
// // // //       opacity:.05
// // // //     },
// // // //   };
// // // //   return (
// // // //     <div className="inner bg-black">
// // // //       <motion.div
// // // //         {...anim(slide)}
// // // //         className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"
// // // //       ></motion.div>
// // // //       <motion.div className="page" {...anim(perspective)}>
// // // //         <motion.div {...anim(opacity)}>{children}</motion.div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Inner;


// // import { motion } from "framer-motion";
// // import gsap from "gsap";
// // import { useEffect, useState } from "react";

// // const Inner = ({ children }) => {
// //   const anim = (variants) => {
// //     return {
// //       initial: "initial",
// //       animate: "enter",
// //       exit: "exit",
// //       variants,
// //     };
// //   };

// //   const opacity = {
// //     initial: {
// //       opacity: 0,
// //     },
// //     enter: {
// //       opacity: 1,
// //       transition: {
// //         duration: 0.2,
// //         ease: [0.32, 0, 0.67, 0],
// //       },
// //     },
// //     exit: {
// //       opacity: 1,
// //     },
// //   };

// //   const slide = {
// //     initial: {
// //       top: "100vh",
// //     },
// //     enter: {
// //       top: "100vh",
// //       transition: {
// //         duration: 2,
// //         ease: [0.64, 0, 0.78, 0],
// //       },
// //     },
// //     exit: {
// //       top: "0vh",
// //       transition: {
// //         duration: 2,
// //         ease: [0.64, 0, 0.78, 0],
// //       },
// //     },
// //   };

// //   const perspective = {
// //     initial: {
// //       y: 0,
// //       scale: 1,
// //       opacity: 1,
// //     },
// //     enter: {
// //       y: 0,
// //       scale: 1,
// //       opacity: 1,
// //     },
// //     exit: {
// //       y: 200,
// //       rotate: "5deg",
// //       scale: 0.8,
// //       transition: {
// //         duration: 1.8,
// //         ease: [0.64, 0, 0.78, 0],
// //       },
// //       opacity: 0.05,
// //     },
// //   };

// //   const [loaderCompleted, setLoaderCompleted] = useState(false);

// //   useEffect(() => {
// //     const tl = gsap.timeline({
// //       onComplete: () => {
// //         setLoaderCompleted(true);
// //         console.log(loaderCompleted);
// //       },
// //     });
// //     tl.from(".black-div", {
// //       y: "0",
// //       duration: 0.9,
// //     });
// //     tl.to(".black-div", {
// //       height: "0vh",
// //       duration: 0.9,
// //     });
// //     tl.to(".inner", {
// //       scale: 1,
// //     });
// //   }, []);

// //   return (
// //     <div className={`inner bg-black ${loaderCompleted ? "" : "scale-50 h-screen overflow-hidden"}`}>
// //       {!loaderCompleted && <div className="black-div w-full h-screen bg-black"></div>}
// //       <motion.div
// //         {...anim(slide)}
// //         className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"
// //       ></motion.div>
// //       <motion.div className="page" {...anim(perspective)}>
// //         <motion.div {...anim(opacity)}>{children}</motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Inner;


// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { useEffect, useState } from "react";

// const Inner = ({ children }) => {
//   const anim = (variants) => {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       variants,
//     };
//   };

//   const opacity = {
//     initial: {
//       opacity: 0,
//     },
//     enter: {
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//         ease: [0.32, 0, 0.67, 0],
//       },
//     },
//     exit: {
//       opacity: 1,
//     },
//   };

//   const slide = {
//     initial: {
//       top: "100vh",
//     },
//     enter: {
//       top: "0vh",
//       transition: {
//         duration: 2,
//         ease: [0.64, 0, 0.78, 0],
//       },
//     },
//     exit: {
//       top: "100vh",
//       transition: {
//         duration: 2,
//         ease: [0.64, 0, 0.78, 0],
//       },
//     },
//   };

//   const perspective = {
//     initial: {
//       y: 0,
//       scale: 1,
//       opacity: 1,
//     },
//     enter: {
//       y: 0,
//       scale: 1,
//       opacity: 1,
//     },
//     exit: {
//       y: 200,
//       rotate: "5deg",
//       scale: 0.8,
//       transition: {
//         duration: 1.8,
//         ease: [0.64, 0, 0.78, 0],
//       },
//       opacity: 0.05,
//     },
//   };

//   const [loaderCompleted, setLoaderCompleted] = useState(false);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setLoaderCompleted(true);
//       },
//     });
//     tl.from(".black-div", {
//       y: "0",
//       duration: 0.9,
//     });
//     tl.to(".black-div", {
//       height: "0vh",
//       duration: 0.9,
//     });
//     tl.to(".inner", {
//       scale: 1,
//     });
//   }, []);

//   return (
//     <div className={`inner bg-black ${loaderCompleted ? "" : "scale-50 h-screen overflow-hidden"}`}>
//       {!loaderCompleted && <div className="black-div w-full h-screen bg-black"></div>}
//       <motion.div
//         {...anim(slide)}
//         className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"
//       ></motion.div>
//       <motion.div className="page" {...anim(perspective)}>
//         <motion.div {...anim(opacity)}>{children}</motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Inner;
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Inner = ({ children }) => {
  const anim = (variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  });

  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
    },
    exit: { opacity: 1 },
  };

  const slide = {
    initial: { top: "100vh" },
    enter: {
      top: "100vh",
      transition: { duration: 2, ease: [0.64, 0, 0.78, 0] },
    },
    exit: {
      top: "0vh",
      transition: { duration: 2, ease: [0.64, 0, 0.78, 0] },
    },
  };

  const perspective = {
    initial: { y: 0, scale: 1, opacity: 1 },
    enter: { y: 0, scale: 1, opacity: 1 },
    exit: {
      y: 200,
      rotate: "5deg",
      scale: 0.8,
      transition: { duration: 1.8, ease: [0.64, 0, 0.78, 0] },
      opacity: 0.05,
    },
  };
  return (
    <div className={`inner bg-black`}>
      <motion.div {...anim(slide)} className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"></motion.div>
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
