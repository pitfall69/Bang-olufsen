import { useRef } from "react";
import gsap from "gsap";
import TextAnimation from "./TextAnimation";

export default function Wbo() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId === null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };
  const WboData = [
    [
      {
        img: "1",
        title: "Craft Stories",
        style: "left-[2%] top-[55%]",
      },
      {
        img: "5",
        title: "Craft Stories",
        style: "right-[5%] bottom-[10%]",
      },
    ],
    [
      {
        img: "4",
        style: "left-[45%] bottom-[72%]",
      },
      {
        img: "2",
        title: "Craft Stories",
        style: "left-[25%] bottom-[10%]",
      },
    ],
    [
      {
        img: "9",
        title: "Craft Stories",
        style: "top-[5%] left-[5%]",
      },
     
    ],
  ];
  return (
    <div
      onMouseMove={(e) => manageMouseMove(e)}
      className="main h-[150vh] w-screen bg-white text-black overflow-hidden relative"
    >
      {WboData.map((item, index) => (
        <div
          key={index}
          ref={index === 1 ? plane1 : index === 2 ? plane2 : plane3}
          className={`plane w-full h-full absolute filter ${
            index === 1
              ? " brightness-[0.7]"
              : index === 2
              ? "brightness-[0.6]"
              : "brightness-[0.5]"
          }`}
        >
          {item.map((item, idx) => (
            <div className={`w-[15vw] absolute h-[35vh] ${item.style}`}>
              <img
              key={idx}
              src={`src/assets/images/WorldOFBnO/WoB${item.img}.webp`}
              className={`h-full w-full object-cover `}
              alt="img"
            />
            <h3 className=" uppercase text-sm font-primary pt-1">{item.title}</h3>
            </div>
          ))}
        </div>
      ))}
      <div className="title absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <TextAnimation
          text={"with bang & olufsen"}
          className={"text-[1rem] text-black uppercase font-primary"}
        />
        <TextAnimation
          text={"Explore the World"}
          className={"text-[3rem] pt-2 text-black uppercase font-primary"}
        />
      </div>
    </div>
  );
}
