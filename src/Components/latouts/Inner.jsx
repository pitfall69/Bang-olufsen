import { motion } from "framer-motion";
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
      // transition: { duration: 2, ease: [0.64, 0, 0.78, 0] },
    },
    exit: {
      top: "0vh",
      transition: { duration: 1.6, ease: [0.76, 0, 0.24, 0] },
    },
  };

  const perspective = {
    initial: { y: 0, scale: 1, opacity: 1 },
    enter: { y: 0, scale: 1, opacity: 1 },
    exit: {
      y: -100,
      // rotate: "5deg",
      scaleX: 0.85,
      // x:50,
      transition: { duration: 1.8, ease: [0.76, 0, 0.24, 0] },
      opacity: 0.5,
    },
  };
  return (
    <div className={`inner bg-black`}>
      <motion.div
        {...anim(slide)}
        className="slide fixed top-0 z-[9999] bg-white left-0 h-screen w-screen"
      ></motion.div>
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
