import React from "react";
import Paragraph from "./Paragraph";
import TextAnimation from "./TextAnimation";
import Button from "./Button";
const HistoryPage = () => {
  const History = [
    {
      when: ["1968"],
      title: ["Beocenter 9000"],
      paragraph: [
        "Designed by Jacob Jensen, this cassette recorder, CD player ",
        "and radio was a further development of the Beomaster 1900 ",
        "by the same designer. Avantgarde not only in its mirroring ",
        "aluminium and glass surface, but in its easy touch fields of the ",
        "glass panels and the hidden functions only visible when the CD ",
        "or cassette tape was changed.",
      ],
      imgsrc:
        "https://images.ctfassets.net/8cd2csgvqd3m/1TMf742YT7YoMpiRANsYWp/98de9310bf88d168e7d5cf91ffc50de7/Legacy_product_8.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
    },
    {
      when: ["2012"],
      title: ["Beoplay A9"],
      paragraph: [
        "Designed by Øivind Alexander Slaatto, this perfectluy round, ",
        "powerful one-point music system is a multiroom speaker ",
        "designed like a piece of furniture. Embellished with beautiful ",
        "fabric, an aluminium ring and wooden legs, the speaker is ",
        "customisable making it fit into every room. ",
      ],
      imgsrc:
        "https://images.ctfassets.net/8cd2csgvqd3m/4dNbI9cAjS7SlQFulaBruC/5ec5af643ed39642afbb3a0e0ffb501a/Legacy_product_12.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
    },
    {
      when: ["2019"],
      title: ["Beovision Harmony"],
      paragraph: [
        "Designed by Torsten Valeur, this television is a brand new ",
        "experience in sound and vision: a choreographed performance ",
        "of magical movement and acoustic clarity, vivid imagery and ",
        "human-centric design. Sound, craftsmanship and design merge ",
        "in this new, visionary TV. The crafted oak wood and aluminium ",
        "fronts sublime technical instruments, delicately tuned by hand ",
        "and ear to reveal all details of music and sound.",
      ],
      imgsrc:
        "https://images.ctfassets.net/8cd2csgvqd3m/7iqDBFRs34MBZ5TDzXpAjD/b3f6bb075434c9cb2ac09adbbb16f3fc/Legacy_product_15.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
    },
  ];
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center overflow-hidden  justify-between gap-20 pt-10 ">
      <TextAnimation
        text={"THE HISTORY OF BANG & OLUFSEN"}
        textSize={"text-[3rem]"}
        className={"pt-10 font-Decorative"}
      />
      <div className="w-full h-[200vh] gap-[10%] flex flex-col px-10 ">
        {History.map((item, index) => (
          <div
            className={`w-[100%] h-[45vh] ${
              index % 2 === 1 && "flex-row-reverse"
            } flex justify-between`}
          >
            <div className="h-full w-[40%] ">
              <div
                className={`flex flex-col justify-between ${
                  index % 2 === 1 ? "text-end" : "text-start"
                } w-full h-full`}
              >
                <div>
                  <Paragraph
                    phrases={item.when}
                    className={`text-[3rem] font-Decorative`}
                  />
                  <Paragraph
                    phrases={item.title}
                    className={`text-[2rem] font-primary uppercase`}
                  />
                </div>
                <Paragraph
                  phrases={item.paragraph}
                  className={`text-xl font-primary`}
                />
              </div>
            </div>
            <div className="h-full w-[35%] bg-green-300 overflow-hidden">
              <img
                className="w-full h-screen object-cover"
                src={item.imgsrc}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <Button text={"View More"} className={`text-white bg-black`} />
    </div>
  );
};

export default HistoryPage;
