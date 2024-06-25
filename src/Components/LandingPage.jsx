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
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);

  return (
    <div className="max-sm:h-[80vh]  overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
        <InteractiveImage />
      </motion.div>
    </div>
  );
};

export default LandingPage;
