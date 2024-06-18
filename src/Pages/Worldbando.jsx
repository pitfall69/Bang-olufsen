import React, { useMemo, useEffect } from "react";
import Inner from "../Components/latouts/Inner";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";

const Worldbando = () => {
  return (
    <Inner>
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://images.ctfassets.net/8cd2csgvqd3m/hiqrVzIG3yrNETv6VusUc/07ac1ccbb2356d450128fe405e7479cc/Lifestyle-Beosound-A5-Spaced-Aluminium-PR-2023-Covers-BO4A5332-W3840x2160px.jpg?q=90&fm=webp&w=1440&h=810&fit=fill"
          alt=""
          onLoad={() => console.log("Image loaded")}
        />
      </div>
      <WorldofBandO />
      <Footer />
    </Inner>
  );
};

export default Worldbando;

const WorldofBandO = () => {
  const WorldofBandOdata = useMemo(
    () => [
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/6x0VvmMsGGHcrGm6IE4ww6/d664ff7752d1b9508d58f44a86358ab4/Lifestyle-Beosystem-9000c-0027-W3840x2160px.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "RECREATED CLASSICS",
        Description: "Bringing the past into the future",
        para: "We have always created products that can stand the test of time. Our Recreated Classics Programme takes our commitment to longevity even further. Join us in celebrating the revival of physical media, where cherished classics meet modern innovation",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/4fxPSzDq19ug3lWUKAToLM/f59eceaf7d151aef486e8822216a489e/Kresten_IC_1.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "KRESTEN BJORN KRAB_BJERRE, CREATIVE DIRECTOR",
        Description: "Design Stories",
        para: "“We don’t work from technology. We always work from the idea.”Creative Director of Design, Kresten Bjørn Krab-Bjerre, tells us how human experience always guides the development of new Bang & Olufsen products.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/3w6ZarDfWt7iWEpPctQK1i/72c9662844c69c9a8dc7f30212eb3297/Finn-2.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "FINN NORGAARD KLINT, POLISHING SPECIALIST",
        Description: "Craft Stories",
        para: "The work has become more refined,” says polishing specialist Finn Nørgaard Klint. As one of our expert craftspeople, Finn’s expertise ensures the high level of finish that makes Bang & Olufsen products so tactile.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/WMQn2y0L3gE3B7Pu5tyLu/c6671c611c007544eb5ada4fd3383295/beolab90-169.png?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "BEOLAB 90",
        Description: "A Vision of Sound",
        para: "Listen to our head Tonmeister, Geoff Martin, and product designer, André Poulheim, talk about reimagining the way that speakers work. We’ve pushed the boundaries further than ever before, allowing us to create the ultimate speaker. Introducing the Beolab 90, a vision of sound.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/3sJewp4W4vhZ7QHYBu1hmb/9770f0bde3b64d52b34076d979359319/Cercle_Hero.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "INTRODUCING A HARMONIOUS FUSION",
        Description: "The Bang & Olufsen X Cercle Partnership",
        para: "In a world where art, innovation, and music converge, a groundbreaking symphony of sight and sound has been created. Welcome to the partnership between Bang & Olufsen and Cercle..",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/6kFgHvbZ1iZDlPRTGyfwLw/cdb91a023fae2d0562059b2b6ab7d7ef/jj_per.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "LIVE FROM THE 10TH ARRONDISSEMENT",
        Description: "Sounds of Paris",
        para: "Music in its wildest form. Crafted on the spot. Right in front of you. Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris. Four groundbreaking artists. 60 minutes of yet-to-be-heard music. ",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/1PwtVZnFumQn9RJRwffVVL/745c7313e83f66d11cff8c9db2938604/ASM_PlayerwithH95_1x1.png?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "BANG & OLUFSEN AND AS MONACO",
        Description: 'Bringing the "Sound of Monaco" to life',
        para: "After this first year of fruitful collaboration, it was natural to continue the adventure together. As we celebrate the centenary of the club in a few months, we are delighted to share this occasion with the support of a partner with whom we share the same quest for excellence in our respective fields.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/1M9MoNIWbX4CF7YOEcdJ7t/8b841fa4c110060b5f1b5f9e75004f77/Lifestyle_-_Ferrari_Event_-_1920x1080px.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "AT MILIAN FERRARI FLAGSHIP STORE",
        Description: "Celebrating the launch of the ferrari Collection",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.  ",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/2qBKEeS0R8pA9pylXTYMld/df67d6fefd1baafef5eae7f2cf706640/Rimowa_Square.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "CLOSER TO THE JOURNEY",
        Description: "Bang & Olufsen X RIMOWA",
        para: "Bang & Olufsen and global leader in premium luggage, RIMOWA have joined forces for a partnership that celebrates the unique link between sound and travel. ",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/4nISV5C5VJVQ1fyH74PASL/46f7d6571e458cc94f7cca7b2b1b3459/Hero_outside.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "AT THE MAYFAIR FLAGSHIP STORE",
        Description: "Celebrating the launch of Mayfair Flagship",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/6zTOILiuwRx5OxENVpZbAV/85ef99ddf16a60d3126d4f88834e0e3e/Couple_square.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
        Title: "INTERVIEW WITH CAROLINE WOZNIACKI",
        Description: "From her new home in Miami",
        para: "We caught up with our brand ambassador Caroline about upcoming projects, her brand new home in the exclusive Fisher Island neighbourhood in Miami, and how she balances family and professional life following her successful tennis career.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/2Ui81JBX32QcFOOeHXl9rL/4ed574440dce963463d49ab5438c8ecb/Beolink_History_-_Mobile.png?q=90&fm=webp&w=480&h=718&fit=fill",
        Title: "THE CONNECTION BETWEEN YOUR SPEAKERS",
        Description: "What is Beolink?",
        para: "'You only first fully understand what the true benefits of Beolink are - when you have had it for a while, and someone takes it away from you' (Quote by Bang & Olufsen custom installer)",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/491YJNhkZ60sVK96uDCrlS/1009defbb0bee787645fe9b0ccf609e2/Natale_1.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "SINCE 1925",
        Description: "Crafting Memories",
        para: "Over the past 95 years, we have built products that embody the principles of iconic, classic and timeless design, craftsmanship and tech. It’s what defined us back when we started, and it’s what drives us towards the future.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/3mDkxraEDDBBRBcRdOX22h/7cbe36afbfbec994fe63210ef8166b9d/BS_73_wide.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "THE BEOSYSTEMS",
        Description: "Timeless, for 50 years and counting",
        para: "Bang & Olufsen is expanding its Recreated Classics Program with the launch of Beosystems – a limited edition music system that transcends time by bridging the gap between one of our iconic designs from 1972 and today’s cutting-edge digital technology. ",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/1XUQsO3YIwuVyEKiPYONah/267d44e043812ccc06be1a06aa7d5e50/Beosound-History-Mobile-Image.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
        Title: "BEOSOUND HISTORY",
        Description: "What is Beosound?",
        para: "Beosound was introduced in Bang & Olufsen products in 1992. The first was Beosound Ouverture, a name underlining the end of an era of black boxes and technical products, numbers and technical terms. The conceptual idea behind the product itself was to combine all sources and elements in an all-in-one system. It should stand out in your home environment and invite you in.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/6t9TqS4r7BZ5HdFAD4whMj/0c02673c11ff5d4275d992c438d7372c/Hero_1x.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
        Title: "PERSONALISATION AT YOUR FINGERS",
        Description: "Bang & Olufsen Apps",
        para: "Step into a realm of sonic excellence with Bang & Olufsen's suite of groundbreaking apps, engineered to deliver unparalleled audio performance tailored to your preferences.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/2OsEyjb8oWt7LL1mutx3qc/851f6d8f9ee31effe5a4853cf909b927/HS_Gallery_2.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "SPEAKERS TO SUIT YOUR SPACE",
        Description: "How to choose the right speakers for your home",
        para: "Sound moves you. The right music can instantly elevate your mood, and the right home speaker means you can enjoy those moments of magic with more depth and detail. Our unrivalled audio technology means your music sounds better in your space.",
      },
      {
        Image:
          "https://images.ctfassets.net/8cd2csgvqd3m/72rbKQ2l6EHHzj34QFz4EW/9668b2c95668d49924a1feb68c60b478/GamFratesi_-_Hero_-_Homepage.png?q=90&fm=webp&w=480&h=480&fit=fill",
        Title: "THE DESIGNERS OF BEOSOUND A5",
        Description: "GamFratesi Studio",
        para: "We visited the Danish-Italian design duo GamFratesi in their studio in Copenhagen to discuss the process, inspiration and work methods that has been used to create our new portable speaker Beosound A5.",
      },
    ],
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleImagesLoaded = () => {
      const img = gsap.utils.toArray(".col1 img");
      const textContents = gsap.utils.toArray(".col2");

      textContents.forEach((item) => {
        const paragraph = item.querySelector(".paragraph span");
        const title = item.querySelector(".title span");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: "top 40%",
            scrub: 1.5,
            // markers:true
          },
        });
        tl.from(title, { y: 50, opacity: 0, duration: 1.5 }).from(
          paragraph,
          { y: 50, opacity: 0, duration: 1.5 },
          "-=1"
        );
      });

      img.forEach((item) => {
        gsap.set(item, {
          clipPath: "polygon(0 0, .1% 0, .1% .1%, 0 .1%)",
          opacity: 1,
        });
        gsap.to(item, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "0% 80%",
            end: "0 40%",
            scrub: 3,
          },
        });
      });
    };

    // Wait for all images to be fully loaded before initializing GSAP animations
    const images = document.querySelectorAll(".col1 img");
    let loadedCount = 0;
    images.forEach((img) => {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          handleImagesLoaded();
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wofbando-container w-full bg-[#ffffff] p-[5%] flex flex-col max-sm:gap-14 gap-20">
      {WorldofBandOdata.map((item, index) => (
        <div
          key={index}
          className={`row flex w-full h-full ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="col1 w-[50%] max-sm:w-[100%] h-fit">
            <img
              className="w-[80%] max-sm:h-[45vh] max-h-[65vh] max-sm:w-full object-cover"
              src={item.Image}
              alt={item.Title}
            />
            <h1 className="font-primary pt-2 opacity-75 max-sm:text-sm">
              {item.Title}
            </h1>
          </div>
          <div className="col2 w-[50%] max-sm:w-[0%]">
            <div className="w-full h-full flex flex-col justify-center items-center max-sm:hidden gap-10 max-lg:gap-5">
              <p className="title font-primary py-1 h-fit overflow-hidden max-lg:text-lg text-3xl">
                <span className="inline-block w-full h-full">
                  {item.Description}
                </span>
              </p>
              <p className="paragraph text-lg font-secondary h-fit overflow-hidden w-[80%] max-lg:text-sm leading-tight">
                <span className="inline-block w-full h-full">{item.para}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
