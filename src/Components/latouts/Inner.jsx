import { motion } from "framer-motion";
const Inner = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: .3,
        ease:[0.32, 0, 0.67, 0]
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: .2,
        ease:[0.32, 0, 0.67, 0]
      },
    },
  };
  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
      transition: {
        duration: 2,
        ease: [0.64, 0, 0.78, 0],
      },
    },
    exit: {
      top: "0vh",
      transition: {
        duration: 2,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  };
  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity:1
    },
    enter: {
      y: 0,
      scale: 1,
      opacity:1
    },
    exit: {
      y: 20,
      x: 100,
      scale:0.90,
      transition: {
        duration: 1.8,
        ease: [0.64, 0, 0.78, 0],
      },
      opacity:0.001
    },
  };
  return (
    <div className="inner bg-[#fff]">
      <motion.div
        {...anim(slide)}
        className="slide fixed top-0 z-[9999] bg-black left-0 h-screen w-screen"
      ></motion.div>
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
