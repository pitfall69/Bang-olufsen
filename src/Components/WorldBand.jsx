import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

const galleryData = [
  {
    id: 1,
    headingTitle: "",
    roles: ["Branding", "Branding", "Branding"],
    cases: ["Case Study - 01"],
    thumbnails: [
      "/src/assets/images/Stories/stories1.webp",
      "https://images.unsplash.com/photo-1719253539799-78d43c1e8650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1719297523639-b104d382c497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    ],
    mediaSrc: "/src/assets/Mosaic_land_clot_1.png",
  },
  {
    id: 2,
    headingTitle: "",
    roles: ["Branding", "Branding", "Branding"],
    cases: ["Case Study - 02"],
    thumbnails: [
      "/src/assets/images/Stories/stories1.webp",
      "https://images.unsplash.com/photo-1718963892270-04300c864522?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1716113144091-b39ddf3f045a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    ],
    mediaSrc: "src/assets/Mosaic_land_clot_1.png",
  },
  {
    id: 3,
    headingTitle: "",
    roles: ["Branding", "Branding", "Branding"],
    cases: ["Case Study - 03"],
    thumbnails: [
      "/src/assets/images/Stories/stories1.webp",
      "https://plus.unsplash.com/premium_photo-1714226830474-e0b8b733340b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1718809070510-371f29994edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    ],
    mediaSrc: "https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WorldBand = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "+=8000 bottom",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    const initlenis = () => {
      const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    };

    const animatemedia = () => {
      gsap.set(".gallery-ending-title h1", {
        yPercent: 100,
      });

      const galleryContainer = gsap.utils.toArray(".gallery-container");
      console.log(galleryContainer);

      galleryContainer.forEach((element) => {
        const thumbnails = element.querySelectorAll(".gallery-thumbnail");
        const medias = element.querySelectorAll(".gallery-media");

        const heading = {
          title: element.querySelectorAll(".gallery-heading-title"),
          roles: element.querySelectorAll(".gallery-heading-roles > span"),
          cases: element.querySelectorAll(".gallery-heading-cases > span"),
        };

        gsap.set(thumbnails, {
          yPercent: 100,
        });
        gsap.set(medias, {
          clipPath: "inset(0 0 0 0)",
        });
        gsap.set([heading.title, heading.roles, heading.cases], {
          yPercent: 0,
        });

        tlMain
          .to(thumbnails, {
            duration: 2,
            yPercent: -100,
          })
          .to(
            medias,
            {
              duration: 2,
              scale: 1.2,
            },
            "<-0.5"
          )
          .to(
            medias,
            {
              clipPath: "inset(0 0 100% 0)",
            },
            "<-0.5"
          );
      });
    };

    initlenis();
    animatemedia();
  }, []);

  return (
    <main className="app text-white">
      <section className="section relative h-[80vh] bg-red-200 uppercase flex flex-col justify-center px-[4rem]">
        <h1 className="section-title">We create</h1>
        <h1 className="section-title">Strategic vision</h1>
        <h1 className="section-title">Strategic vision</h1>
        <h1 className="section-title">Strategic vision</h1>
        <h1 className="section-title">Strategic vision</h1>
      </section>

      <div className="gallery relative w-full h-full overflow-hidden">
        {galleryData.map((gallery) => (
          <div
            key={gallery.id}
            className="gallery-container absolute left-0 top-0 w-full h-inherit z-[20]"
          >
            <div className="gallery-heading absolute top-[20rem] left-[2rem] z-[10] overflow-hidden">
              <h2 className="gallery-heading-title overflow-hidden mb-[0.4rem] uppercase text-black">
                {gallery.headingTitle}
              </h2>
              <div className="gallery-heading-roles overflow-hidden mb-[0.4rem] uppercase text-black">
                {gallery.roles.map((role, index) => (
                  <span key={index}>{role}</span>
                ))}
              </div>
              <div className="gallery-heading-cases overflow-hidden mb-[0.4rem] uppercase text-black">
                {gallery.cases.map((caseItem, index) => (
                  <span key={index}>{caseItem}</span>
                ))}
              </div>
            </div>

            <div className="gallery-thumbnail absolute top-0 right-[4rem] flex flex-col gap-[2rem] z-[10]">
              {gallery.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  className="relative w-[50rem] h-[50rem] object-cover"
                  src={thumbnail}
                  alt=""
                />
              ))}
            </div>
            <div className="gallery-media absolute w-full h-screen">
              <figure className="gallery-media-figure relative h-inherit w-inherit overflow-hidden">
                <img
                  className="absolute w-full h-full object-cover"
                  src={gallery.mediaSrc}
                  alt=""
                />
              </figure>
            </div>
          </div>
        ))}

        <div className="gallery-ending relative w-full h-screen uppercase flex flex-col items-center justify-center">
          <div className="gallery-ending-title overflow-hidden">
            <h1>Design with purpose</h1>
          </div>
          <div className="gallery-ending-title overflow-hidden">
            <h1>Design with purpose</h1>
          </div>
          <div className="gallery-ending-title overflow-hidden">
            <h1>Design with purpose</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorldBand;
