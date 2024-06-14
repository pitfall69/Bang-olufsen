import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { RiVolumeMuteFill } from "react-icons/ri";
import { GoUnmute } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

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

  useEffect(() => {
    const splitedh1 = new SplitTextJS(h1Ref.current);
    const splitedh3 = new SplitTextJS(h3Ref.current);
    gsap.from(splitedh1.chars, {
      y: 100,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".text-container-video",
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(splitedh3.chars, {
      y: 100,
      stagger:0.01,
      ease:"power1.in",
      scrollTrigger: {
        trigger: ".text-container-video",
        start: "top 50%",
        end: "top 20%",
        
      },
    });
  }, []);

  return (
    <div className="pt-[20vh] max-sm:pt-[5vh] bg-[#F5ECE7] overflow-hidden">
      <div className="text-container-video h-[15vh] w-full pb-10 max-md:pb-5 flex  items-center justify-center flex-col gap-3">
        <h1
          ref={h1Ref}
          className="text-5xl h-fit w-fit overflow-hidden max-md:text-2xl leading-tight font-Decorative uppercase"
        >
          Experience Joy in Motion
        </h1>
        <h3
          ref={h3Ref}
          className="uppercase h-fit w-fit text-center overflow-hidden leading-tight font-semibold font-Secondary text-xl opacity-60 max-md:text-sm"
        >
        Beopoly Ex
        </h3>
      </div>
      <div
        ref={container}
        className="relative  flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative overflow-hidden w-full h-full">
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
        <div className="w-[10%] flex text-white gap-6 max-xl:gap-4 max-sm:gap-0 max-sm:right-[12%] absolute bottom-[2%] max-xl:right-[5%] right-0 h-[6vh] ">
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
