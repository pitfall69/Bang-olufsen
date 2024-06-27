import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import TextAnimation from "../Components/TextAnimation";
const Collaborators = () => {
  const data = [
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485838/audi-logo_zzugth.webp",
      style: "top-[3vh] left-[2vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485853/bentley-logo_yiiqto.webp",
      style: "top-[3vh] left-[15vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485862/fordy_nqxqm5.webp",
      style: "top-[50vh] left-[2vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485877/lamborghini-logo_z0itoh.webp",
      style: "top-[70vh] left-[15vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485886/gennnnny_frmln3.webp",
      style: "top-[40vh] left-[27.5vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485917/hp-logo-transparrent_b0o7yu.webp",
      style: "top-[30vh] left-[50vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485930/xbox-logo_sboclz.webp",
      style: "top-[15vh] left-[80vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485939/Cisco_Logo_no_TM_Black_transparrent_qrmlyn.webp",
      style: "top-[55vh] left-[80vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719485954/Sagecome-Company-Logo.png6_o1deci.webp",
      style: "top-[55vh] left-[67vw]",
    },
    {
      images:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719486160/Acura-logo_uhzi5q.webp",
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
    <div className="relative w-full pt-[15vh] bg-white ">
      <TextAnimation
        text={"WE CALL THEM PARTNERS"}
        textSize={"text-[4rem]"}
        className={"font-Decorative mb-[10vh]"}
      />
      <div
        ref={imgRef}
        className="relative flex  flex-wrap justify-center  h-screen w-full  gap-5 overflow-hidden pb-2"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`box hover:drop-shadow-lg hover:duration-200 hover:scale-[1.05]   md:absolute md:h-[25vh] md:w-[25vh] h-[18vh] w-[40%]  bg-[#F0F0F0] ${item.style}  overflow-hidden`}
          >
            <img src={item.images} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;
