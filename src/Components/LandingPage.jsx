import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import InteractiveImage from "./InteractiveImage";
const LandingPage = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full w-full">
      {/* <img
          className="w-full h-screen object-cover"
          src="https://www.lbtechreviews.com/wp-content/uploads/2022/06/BO-Beoplay-EX-lifestyle3-scaled-1.jpg"
          fill
          alt="image"
        /> */}
        <InteractiveImage/>
      </motion.div>
    </div>
  );
};

export default LandingPage;

