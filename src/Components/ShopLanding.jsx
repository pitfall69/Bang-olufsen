import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Button from "./Button";

const ShopLanding = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);

  return (
    <div>
      <div className="h-[80vh] overflow-hidden">
        <motion.div
          style={{ y }}
          className=" bg-red-300 flex re   h-full w-full"
        >
          <img
            className=" h-full w-full object-cover  absolute"
            src="http://localhost:5173/src/assets/images/HomepageImage/hp21.webp"
            alt=""
          />

          <div className="h-full w-full backdrop-blur-sm top-0  flex px-20 max-lg:px-10    ">
            <div className=" text-white  flex flex-col justify-center     gap-8">
              <h1 className="  text-7xl font-primary font-[650] max-md:text-5xl  ">
                Premium <br />
                Audio Experience
              </h1>
              <h2 className=" text-zinc-300  font-Secondary w-[60%] tracking-tight leading-5 max-md:text-sm max-sm:w-full ">
                Experience rich, authentic sound with Bang & Olufsen's premium
                speakers, crafted to perfection for stunning clarity and
                superior acoustics.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-[40vh] w-full bg-[#FFF9F1] flex flex-col justify-center items-center  gap-5 ">
        <h1 className=" px-10  text-5xl font-primary font-[650]  max-lg:text-3xl text-center   max-sm:text-xl  ">
        WHICH SPEAKER IS RIGHT FOR YOU?
        </h1>
        <h2 className=" font-Secondary text-xl w-[50%]  max-lg:text-sm max-xl:text-lg  max-sm:w-[80%] text-center max-md:px-10   ">
        Compare our speakers and get help finding your perfect match.
        </h2>
        <Button text={'Explore'} customclassName={"explore"}/>
      </div>
    </div>
  );
};
export default ShopLanding;
