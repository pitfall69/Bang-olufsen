import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import TextAnimation from "../Components/TextAnimation";
const Collaborators = () => {
  const data = [
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/46fxbLXbZMYSMbtkrs0WX4/30606b77f33d1320dfecbffd9ec984ad/audi-logo.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[3vh] left-[2vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/3XD07s6EWXkzhkgXcdJWfN/b653732d2171647a8c67aa88ea4648bf/bentley-logo.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[3vh] left-[15vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/ToOivqV77f4doYGvG2aQV/c16bb92bb41cb0bcb4a7c4b05cc87c96/fordy.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[50vh] left-[2vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/6ZSDqxf74jrz600SNYzw0P/3793df61b065656eed37b1331bcb6e6f/lamborghini-logo.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[70vh] left-[15vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/1Amb7WnezX2sAgB6l2hETD/1f45b5f34cfe10f72f46ac11f92d6439/gennnnny.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[40vh] left-[27.5vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/NCvfsNwWUXzizCpydEhbX/0c664247c5b5b3db389448fee1dfa7da/Acura-logo.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[30vh] left-[50vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/s0Lmog6Sp7ou3FxT33Y2K/5b2a73af0c8fcb0bffd17b160f0c92c5/hp-logo-transparrent.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[15vh] left-[80vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/2trdAvlPeWxd5Rm5QjUVkh/d8f25dabdb32f47076684c80786451e8/xbox-logo.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[55vh] left-[80vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/3fodKrxviRd0kFVUruiqhi/a299dcac2a94641b9691c860b5599c42/Cisco_Logo_no_TM_Black_transparrent.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[55vh] left-[67vw]",
    },
    {
      images:
        "https://images.ctfassets.net/8cd2csgvqd3m/3SYrufaBisX57vBgJAvZjp/17cd273851bdc396eed22ccca716c8ec/Sagecome-Company-Logo.png6.png?fm=webp&q=85&w=340&h=340&fit=fill",
      style: "top-[70vh] left-[54vw]",
    },
  ];
  const imgRef = useRef();
  useGSAP(() => {
    gsap.from(".box", {
      height: "0vh",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 20%",
        end: "top center",
      },
    });
  });

  return (
    <div className="relative w-full ">
      <TextAnimation
        text={"WE CALL THEM PARTNERS"}
        textSize={"text-[6rem]"}
        className={"font-Decorative text-white"}
      />
      <div
        ref={imgRef}
        className="relative mt-[10vh]  flex  flex-wrap justify-center  h-screen w-full  gap-5 overflow-hidden pb-2"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`box   md:absolute md:h-[25vh] md:w-[25vh] h-[18vh] w-[40%]  bg-[#F0F0F0] ${item.style}  overflow-hidden`}
          >
            <img src={item.images} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;
