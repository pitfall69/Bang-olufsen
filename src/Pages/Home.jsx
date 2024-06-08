import React, { useEffect, useRef } from "react";
import Inner from "../Components/latouts/Inner";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".horizontal-container",
  //       start: "top 0%",
  //       end: "top -210%",
  //       markers: true,
  //       scrub:3,
  //       pin:".parent"
  //     },
  //   });
  //   tl.to('.horizontal-container',{
  //     xPercent:-100,
  //     duration:10
  //   })
  // }, []);
  return (
    <Inner>
      <Landingpage />
      {/* <div className="parent w-full h-screen bg-blue-500">
        <div className="horizontal-container flex w-fit  h-full bg-green-200">
          <div className="h-full w-[50rem] bg-red-500"></div>
          <div className="h-full w-[50rem] bg-red-300"></div>
          <div className="h-full w-[50rem] bg-red-100"></div>
          <div className="h-full w-[50rem] bg-red-400"></div>
          <div className="h-full w-[50rem] bg-blue-200"></div>
        </div>
      </div> */}
      <HorizontalSlider />
      <div className="w-full h-screen"></div>
      {/* <WorldofBandO /> */}
    </Inner>
  );
};

export default Home;

const Landingpage = () => {
  return (
    <div className="h-screen pointer-events-none relative w-full overflow-hidden">
      <video
        className="w-full max-sm:object-fit h-full object-cover"
        autoPlay
        loop
        muted
        src="src/assets/videos/videoplayback.mp4"
      ></video>
    </div>
  );
};

const HorizontalSlider = () => {
  const homepageproductdata = [
    {
      ProductType: "SPEAKERS",
      ProductData: [
        {
          ProductName: "BEOSOUND BALANCE",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/7AWZTPqCL2Y1sKynZm3dCS/95d263895ebbda6dbb8e27e162f4a664/Beosound_Balance_0196.png?q=90&fm=webp&w=1440&h=810&fit=fill",
          height: "h-[40vh]",
          width: "w-[30%]",
          left: "left-[5%]",
          top: "top-[25%]",
        },
        {
          ProductName: "BEOSOUND A1 2ND GEN",
          ProductImage:
            "https://avstore.in/cdn/shop/products/AVStore-Bang-Olufsen-Beosound-A1-Nordic-Ice-Artwork.jpg?v=1643003231&width=2048",
          left: "left-[40%]",
          top: "top-[70%]",
          height: "h-[40vh]",
          width: "w-[20%]",
        },
        {
          ProductName: " BEOSOUND A5",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/31DyKYm3j9cX64lo32iHQt/bf0b2f5fb2ba4277d559b67fe5a81426/Beosound_A5_-_Moodboard_Large_-_Image.jpg?q=90&w=1920&fit=fill&fm=webp",
          left: "left-[75%]",
          top: "top-[45%]",
          height: "h-[60vh]",
          width: "w-[20%]",
        },
      ],
    },
    {
      ProductType: "HEADPHONES",
      ProductData: [
        {
          ProductName: "Beoplay HX",
          ProductImage:
            "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_header_headphones.jpg",
          height: "h-[40vh]",
          width: "w-[30%]",
          left: "left-[5%]",
          top: "top-[25%]",
        },
        {
          ProductName: "BEOPLAY EX",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/6ddaSy1Le8EueZ67paf1Nh/22ec307eac6bd9783d87243cd967fe69/2202253_B_O_Hp_3446_copy.png?q=90&fm=webp&w=1440&h=810&fit=fill",
          left: "left-[40%]",
          top: "top-[70%]",
          height: "h-[40vh]",
          width: "w-[20%]",
        },
        {
          ProductName: " BEOPLAY H95",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/1OPQ4MwdmGGGMnndPauGQN/50d4e11a6ad4f6b3f3c559290d00022a/H95_Black_A_16_9.png?q=90&fm=webp&w=1440&h=810&fit=fill",
          left: "left-[75%]",
          top: "top-[45%]",
          height: "h-[60vh]",
          width: "w-[20%]",
        },
      ],
    },
    {
      ProductType: "TELEVISIONS",
      ProductData: [
        {
          ProductName: "BEOREMOTE HALO",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/7INQPqApUxn1cBocan7ZT8/e48d5c03f7c64551cbf9000f6c70a0c2/PA_Halo_Alu_Table_front.jpg?q=90&fm=webp&w=720",
          height: "h-[40vh]",
          width: "w-[30%]",
          left: "left-[5%]",
          top: "top-[25%]",
        },
        {
          ProductName: "BEOVISION HARMONY",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/2qDtQrfqzt8iOPLjy735jh/09b0d74387fccd92cf05c9b04a1b97ee/Harmony_BL28_16-9.png?q=90&fm=webp&w=1440&h=810&fit=pad",
          left: "left-[40%]",
          top: "top-[70%]",
          height: "h-[40vh]",
          width: "w-[20%]",
        },
        {
          ProductName: " BEOREMOTE ONE",
          ProductImage:
            "https://www.2luxury2.com/wp-content/uploads/Bang-Olufsen-The-Love-Affair-Collection-BeoRemote-One.jpg",
          left: "left-[75%]",
          top: "top-[45%]",
          height: "h-[60vh]",
          width: "w-[20%]",
        },
      ],
    },
    {
      ProductType: "SOUNDBARS",
      ProductData: [
        {
          ProductName: "BEOSOUND STAGE",
          ProductImage:
            "https://static.vplak.com/500-images/bang-olufsen/silver/image-5.jpg",
          height: "h-[40vh]",
          width: "w-[30%]",
          left: "left-[5%]",
          top: "top-[25%]",
        },
        {
          ProductName: "BEOLAB 28",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/178ZnUs9egHcRLPhcZqAZP/15b9ab32db11258fb3f428c20c3b9a8c/Gallerygrid_1_-_12.png",
          left: "left-[40%]",
          top: "top-[70%]",
          height: "h-[40vh]",
          width: "w-[20%]",
        },
        {
          ProductName: "BEOSOUND THEATRE",
          ProductImage:
            "https://images.ctfassets.net/8cd2csgvqd3m/22OJOnyJlCVcvcngPGEP1f/dcf1c78daa3ad66126d596b93f65e035/Sound-And-Vision-For-Your-Home-Beosound-Theatre-Digital-English-0156-Detail-6-Amazon-Hero.jpg?q=90&fm=webp&w=1178&h=1472&fit=fill",
          left: "left-[75%]",
          top: "top-[45%]",
          height: "h-[60vh]",
          width: "w-[20%]",
        },
      ],
    },
  ];
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  console.log();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const panels = panelsRef.current;
    const totalPanels = panels.length;
    const containerWidth = containerRef.current.scrollWidth;

    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        end: () => `+=${containerWidth}`,
      },
    });
  }, []);

  return (
    <div
      className="flex overflow-x-hidden w-screen bg-yellow-50 h-screen"
      ref={containerRef}
    >
      {homepageproductdata.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full h-full  text-4xl bg-red-500 text-white relative"
          ref={(el) => (panelsRef.current[index] = el)}
        >
          {item.ProductData &&
            item.ProductData.map((imgdata, idx) => (
              <div
                className={`${imgdata.height} ${idx % 2 === 0 ? "bg-green-500" : ""} ${imgdata.width}  ${imgdata.top} ${imgdata.left} absolute overflow-hidden -translate-y-1/2`}
              >
                <img
                  className={`w-full h-[85%] object-cover`}
                  src={imgdata.ProductImage}
                  alt=""
                />
                <h1 className="text-lg">{imgdata.ProductName}</h1>
              </div>
            ))}
        </div>
      ))}
      <ProgressBar />
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="progressbar h-[1px] w-[20%] bg-white absolute bottom-[5%] left-1/2 -translate-x-1/2">
      <div className="progressbarline h-full w-[10%] bg-black"></div>
    </div>
  );
};
