
import React, { useEffect, useMemo, useCallback, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import BorderAnim from "./BorderAnim";
import TextAnimation from "./TextAnimation";
const HomeWorldBandO = React.memo(() => {
  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }),
    []
  );

  const observerCallback = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const service = entry.target;
        const imgContainer = service.querySelector(".img");
        const title = service.querySelector(".service-info h1");

        ScrollTrigger.create({
          trigger: service,
          start: "bottom bottom",
          end: "top top",
          scrub: 5,
          onUpdate: (self) => {
            const progress = self.progress;
            const newWidth = 40 + 60 * progress;
            gsap.to(imgContainer, {
              width: `${newWidth}%`,
              duration: 0.1,
              ease: "none",
            });
          },
        });
        ScrollTrigger.create({
          trigger: service,
          start: "top bottom",
          end: "top top",
          scrub: 5,
          onUpdate: (self) => {
            const progress = self.progress;
            const newHeight = 150 + 310 * progress;
            gsap.to(service, {
              height: `${newHeight}px`,
              duration: 0.1,
              ease: "none",
            });

            const screenWidth = window.innerWidth;
            let newFontSize;

            if (screenWidth < 640) {
              newFontSize = 1 + 1 * progress;
            } else if (screenWidth < 1024) {
              newFontSize = 1.3 + 2 * progress;
            } else {
              newFontSize = 1.5 + 2.5 * progress;
            }
            gsap.to(title, {
              fontSize: `${newFontSize}rem`,
              duration: 0.1,
            });
          },
        });
        observer.unobserve(service);
      }
    });
  }, []);
  const wbandoref = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
   
    const services = document.querySelectorAll(".service");
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    services.forEach((service) => observer.observe(service));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [observerCallback, observerOptions]);

  const homebandodata = useMemo(
    () => [
      {
        category: "Art",
        title: "FINN NØRGAARD KLINT, POLISHING SPECIALIST",
        description:
          "The work has become more refined,” says polishing specialist Finn Nørgaard Klint. As one of our expert craftspeople, Finn’s expertise ensures the high level of finish that makes Bang & Olufsen products so tactile.",
        image:
          "https://images.ctfassets.net/8cd2csgvqd3m/3w6ZarDfWt7iWEpPctQK1i/72c9662844c69c9a8dc7f30212eb3297/Finn-2.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      },
      {
        category: "Music",
        title: "LIVE FROM THE 10TH ARRONDISSEMENT",
        description:
          "Music in its wildest form. Crafted on the spot. Right in front of you Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris.",
        image:
          "https://images.ctfassets.net/8cd2csgvqd3m/44CfWwSWDTAzPQrIGSOngA/6c10371bfdae67f1f5067f50645ac44d/JJ_Hero.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      },
      {
        category: "Culture",
        title: "THE SOUND OF UNSTOPPABLE",
        description:
          "Bang & Olufsen and running brand On have joined forces to create a limited edition of Beoplay E8 Sport wireless earphones, tapping into the powerful link between music and running.",
        image:
          "https://images.ctfassets.net/8cd2csgvqd3m/dQQRRyR2jKUb4QK1lqyrA/c0ea139ff0f0b4c147ca48bfed1565d8/On_story_landscape.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      },
      {
        category: "Living",
        title: "Make Working from Home a Pleasure",
        description:
          "Working from home has moved from an occasional occurrence to an everyday expectation. Embrace the potential for flexibility and reduce challenges by creating a home office space that supports and nourishes you. ",
        image:
          "https://images.ctfassets.net/8cd2csgvqd3m/0S2AMQsUvECSym8Vxy5XZ/b82d4a1c0f6d5cc51f31836673e87f3d/Hero_Hero.jpg?q=90&fm=webp&w=1178&h=662&fit=fill",
      },
      {
        category: "Timelessness",
        title: "Crafting Memories",
        description:
          "Over the past 95 years, we have built products that embody the principles of iconic, classic and timeless design, craftsmanship and tech.",
        image:
          "https://images.ctfassets.net/8cd2csgvqd3m/491YJNhkZ60sVK96uDCrlS/1009defbb0bee787645fe9b0ccf609e2/Natale_1.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      },
    ],
    []
  );
  return (
    <div className="bg-[#Fff] py-[5vh]">
        <TextAnimation text={"World of b & o"} textSize={"text-[10rem] max-sm:text-[3rem] max-md:tracking-tighter "}/>
        <BorderAnim customindex={1} />
      <div className="w-full h-full p-5 flex pt-[10vh] max-sm:pt-[5vh] flex-col max-sm:gap-[15vw] max-md:gap-[25vw] max-lg:gap-[30vw] gap-10 bg-[#fff]">
        {homebandodata.map((item, index) => (
          <div
            key={index}
            className="service sm:p-5 max-lg:flex-col gap-10 flex items-center justify-between w-full h-[50vh] max-sm:gap-5"
          >
            <div className="service-info pt-3 max-sm:h-[50vh] md:max-w-[25%]">
              <h1 className="text-3xl max-sm:text-xl max-lg:text-3xl uppercase font-primary">
                {item.category}
              </h1>
              <div className="py-5">
                <h1 className="text-lg py-2 opacity-60 font-primary uppercase max-sm:text-xs max-lg:text-xl">
                  {item.title}
                </h1>
                <p className="text-md w-[90%] font-Secondary max-sm:leading-tight max-sm:text-sm max-lg:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="service-img">
              <div className="img w-[35%] max-sm:w-[50%] h-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <BorderAnim customindex={2}/>
    </div>
  );
});

export default HomeWorldBandO;