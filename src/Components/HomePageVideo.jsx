import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { RiVolumeMuteFill } from "react-icons/ri";
import { GoUnmute } from "react-icons/go";

const HomePageVideo = () => {
  const container = useRef();
  const videoRef = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const [playAudio, setplayAudio] = useState(false);
  const [playVideo, setplayVideo] = useState(true);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (playVideo) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setplayVideo(!playVideo);
    }
  };
  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setplayAudio(!playAudio);
    }
  };
  return (
   <>
    <div className="h-[15vh] w-full flex bg-white items-center justify-center flex-col gap-5">
      <h1 className="text-5xl max-md:text-2xl font-Decorative uppercase">Experience Joy in Motion</h1>
      <h3 className="uppercase font-semibold font-Secondary text-xl opacity-60">Beopoly Ex</h3>
    </div>
    <div
      ref={container}
      className="relative bg-white  flex items-center justify-center h-screen overflow-hidden"
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
      <div className="w-[10%] flex text-white gap-6 max-xl:gap-4 max-sm:gap-0 max-sm:right-[12%]  absolute bottom-[2%] max-xl:right-[5%] right-0 h-[6vh] ">
        <button onClick={toggleMuteUnmute}>
          {playAudio ? (
            <GoUnmute className=" p-3 h-[5vh] w-[5vh]" />
          ) : (
            <RiVolumeMuteFill className=" p-3 h-[5vh] w-[5vh]" />
          )}
        </button>
        <button onClick={togglePlayPause}>
          {playVideo ? (
            <IoPauseOutline className=" p-3 h-[5vh] w-[5vh]" />
          ) : (
            <IoIosPlay className=" p-3 h-[5vh] w-[5vh]" />
          )}
        </button>
      </div>
    </div>
   </>
  );
};

export default HomePageVideo;



