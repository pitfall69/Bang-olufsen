import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import InteractiveImage from "./InteractiveImage";
import Button from "./Button";

const LandingPage = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "00vh"]);

  return (
    <div className="max-sm:h-[80vh]  overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
        <div className="w-full relative px-10 flex flex-col justify-end items-center py-5 text-white h-[55vh]">
          <h1 className="text-[9rem] text-center w-full font-[400] leading-none uppercase font-Decorative">Experience the Ultimate <br /> Audio Innovation and Design</h1>
        </div>
        <InteractiveImage />
      </motion.div>
    </div>
  );
};

export default LandingPage;
