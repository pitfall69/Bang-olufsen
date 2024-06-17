import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { RiVolumeMuteFill } from "react-icons/ri";
import { GoUnmute } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";
import TextAnimation from "./TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const HomePageVideo = () => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="pt-[10vh] max-sm:pt-[5vh] bg-[#Fff] overflow-hidden">
      <div className="text-container-video h-[15vh] w-full pb-10 max-md:pb-5 flex items-center justify-center flex-col gap-3">
        <TextAnimation
          text={"Experience the joy in Motion"}
          textSize={"text-[3rem] max-sm:text-2xl"}
        />
        <TextAnimation className={'my-2'} text={"Beopoly Ex"} textSize={"text-[1.5rem] max-sm:text-xl"} />
      </div>
      <div
        ref={container}
        className="relative flex items-center mt-5 justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div
            style={{ y }}
            className="relative overflow-hidden w-full h-full"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
              src="/src/assets/videos/hpvideo.mp4"
            ></video>
          </motion.div>
        </div>
        <div className="w-[10%] flex text-white gap-6 max-xl:gap-4 max-sm:gap-0 max-sm:right-[12%] absolute bottom-[2%] max-xl:right-[5%] right-0 h-[6vh]">
          <button onClick={toggleMuteUnmute}>
            {isMuted ? (
              <RiVolumeMuteFill className="p-3 h-[5vh] w-[5vh]" />
            ) : (
              <GoUnmute className="p-3 h-[5vh] w-[5vh]" />
            )}
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <IoPauseOutline className="p-3 h-[5vh] w-[5vh]" />
            ) : (
              <IoIosPlay className="p-3 h-[5vh] w-[5vh]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageVideo;
