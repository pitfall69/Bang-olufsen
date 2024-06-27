import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
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
