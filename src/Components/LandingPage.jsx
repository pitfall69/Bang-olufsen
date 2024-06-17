import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import InteractiveImage from "./InteractiveImage";
const LandingPage = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
      {/* <img
          className="w-full absolute z-[99] h-screen object-cover"
          src="Naim Audio "
          fill
          alt="image"
        /> */}
        <InteractiveImage/>
      </motion.div>
    </div>
  );
};

export default LandingPage;

