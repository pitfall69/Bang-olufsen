

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const OurStories = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const images = [
    {
      src: "https://images.ctfassets.net/8cd2csgvqd3m/tvKDdRFsh9rUlex20q7PV/abb2a569be115b0ea68b6caa84736bd8/david-lewis-gallerygrid1.jpg?q=90&w=1920&fit=fill&fm=webp",
      style: "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh] max-lg:h-[30vh] max-lg:w-[25vw] max-lg:left-[-32vw] max-sm:w-[30vw] max-[450px]:top-[-30vh]",
    },
    {
      src: "https://images.ctfassets.net/8cd2csgvqd3m/4R2Q2A9M05UJJDBVXB09EH/75ebfa94922ffb054ac5a1c9acba6c82/Story_Caro_2.jpg?q=85&fm=webp&w=1440&h=810&fit=fill",
      style: "top-[-30vh] left-[10vh] w-[35vw] h-[30vh] max-lg:w-[45vw] max-sm:w-[55vw]",
    },
    {
      src: "https://images.ctfassets.net/8cd2csgvqd3m/4Ni5X4NNwCzRFVWQ9GJgR3/21b36d01d2de8f4a9f0174d79d5bd4ac/Jensen_10.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
      style: "top-[2vh] left-[27vw] w-[25vw] h-[30vh] max-lg:left-[30vw] max-sm:w-[30vw] max-sm:left-[32vw]",
    },
    {
      src: "https://images.ctfassets.net/8cd2csgvqd3m/18NMIQC7jUxu011nuq42GR/019454da0e2206cc9b1b58cc6a98b55e/Neo-3.jpg?q=85&fm=webp&w=1656&h=931&fit=fill",
      style: " left-[-20vw] top-[30vh] w-[35vw] h-[30vh] max-sm:left-[-28vw]",
    },
    {
      src: "https://global.discourse-cdn.com/mcneel/uploads/default/optimized/4X/3/e/d/3ed22acf928c169c77ebe701362931af6dc60d39_2_689x475.jpeg",
      style: " top-[33vh] left-[12vw] w-[25vw] h-[25vh] max-sm:w-[35vw]",
    },
    {
      src: "https://images.ctfassets.net/8cd2csgvqd3m/2R2dqnLM8TNx4lKTTy3qbU/5cf729439554ef330b94ed447291c7cd/Beocenter-7000_-_Image.png?q=85&fm=webp&w=1656&h=931&fit=fill",
      style: "top-[0vh] left-[0vh] w-[25vw] h-[25vh] max-lg:w-[30vw]",
    },
  ];

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 overflow-hidden h-[100vh]">
        {images.map(({ src, style }, idx) => (
          <motion.div
            key={idx}
            style={{ scale }}
            className="w-full h-full absolute top-0 flex items-center justify-center"
          >
            <div className={`relative ${style}`}>
              <img className="object-cover w-full h-full" src={src} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurStories;
