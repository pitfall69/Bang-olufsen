import React, { useMemo, useEffect } from "react";
import Inner from "../Components/latouts/Inner";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
import ShopLanding from "../Components/ShopLanding"
const Worldbando = () => {
  const ShopLandingdata = {
    Img: "https://images.ctfassets.net/8cd2csgvqd3m/hiqrVzIG3yrNETv6VusUc/07ac1ccbb2356d450128fe405e7479cc/Lifestyle-Beosound-A5-Spaced-Aluminium-PR-2023-Covers-BO4A5332-W3840x2160px.jpg?q=90&fm=webp&w=1440&h=810&fit=fill",
    Title: "Superior Sound On-the-Go",
    Para: "Experience unparalleled audio quality with Bang & Olufsen headphones, designed for comfort and precision to elevate your listening pleasure wherever you are.",
  };

  return (
    <Inner>
      {/* <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src=""
          alt=""
          onLoad={() => console.log("Image loaded")}
        />
      </div> */}
      <ShopLanding ShopLandingdata={ShopLandingdata} />
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
          "src/assets/images/WorldOFBnO/WoB1.webp",
        Title: "RECREATED CLASSICS",
        Description: "Bringing the past into the future",
        para: "We have always created products that can stand the test of time. Our Recreated Classics Programme takes our commitment to longevity even further. Join us in celebrating the revival of physical media, where cherished classics meet modern innovation",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB2.webp",
        Title: "KRESTEN BJORN KRAB_BJERRE, CREATIVE DIRECTOR",
        Description: "Design Stories",
        para: "“We don't work from technology. We always work from the idea.”Creative Director of Design, Kresten Bjørn Krab-Bjerre, tells us how human experience always guides the development of new Bang & Olufsen products.",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB3.webp",
        Description: "Craft Stories",
        para: "The work has become more refined,” says polishing specialist Finn Nørgaard Klint. As one of our expert craftspeople, Finn’s expertise ensures the high level of finish that makes Bang & Olufsen products so tactile.",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB4.webp",
        Title: "BEOLAB 90",
        Description: "A Vision of Sound",
        para: "Listen to our head Tonmeister, Geoff Martin, and product designer, André Poulheim, talk about reimagining the way that speakers work. We’ve pushed the boundaries further than ever before, allowing us to create the ultimate speaker. Introducing the Beolab 90, a vision of sound.",
      },
      // {
      //   Image:
      //     "https://images.ctfassets.net/8cd2csgvqd3m/3sJewp4W4vhZ7QHYBu1hmb/9770f0bde3b64d52b34076d979359319/Cercle_Hero.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      //   Title: "INTRODUCING A HARMONIOUS FUSION",
      //   Description: "The Bang & Olufsen X Cercle Partnership",
      //   para: "In a world where art, innovation, and music converge, a groundbreaking symphony of sight and sound has been created. Welcome to the partnership between Bang & Olufsen and Cercle..",
      // },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB5.webp",
        Title: "LIVE FROM THE 10TH ARRONDISSEMENT",
        Description: "Sounds of Paris",
        para: "Music in its wildest form. Crafted on the spot. Right in front of you. Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris. Four groundbreaking artists. 60 minutes of yet-to-be-heard music. ",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB6.webp",
        Title: "BANG & OLUFSEN AND AS MONACO",
        Description: 'Bringing the "Sound of Monaco" to life',
        para: "After this first year of fruitful collaboration, it was natural to continue the adventure together. As we celebrate the centenary of the club in a few months, we are delighted to share this occasion with the support of a partner with whom we share the same quest for excellence in our respective fields.",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB7.webp",
        Title: "AT MILIAN FERRARI FLAGSHIP STORE",
        Description: "Celebrating the launch of the ferrari Collection",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.  ",
      },
      // {
      //   Image:
      //     "https://images.ctfassets.net/8cd2csgvqd3m/2qBKEeS0R8pA9pylXTYMld/df67d6fefd1baafef5eae7f2cf706640/Rimowa_Square.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      //   Title: "CLOSER TO THE JOURNEY",
      //   Description: "Bang & Olufsen X RIMOWA",
      //   para: "Bang & Olufsen and global leader in premium luggage, RIMOWA have joined forces for a partnership that celebrates the unique link between sound and travel. ",
      // },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB8.webp",
        Title: "AT THE MAYFAIR FLAGSHIP STORE",
        Description: "Celebrating the launch of Mayfair Flagship",
        para: "Bang & Olufsen hosted a celebration event on Thursday, the 14th of December on the opening day for the new Flagship store on London’s prestigious New Bond Street. Offering an exclusive first look at the space which has been designed to cater to the needs of individual customers by offering an immersive and tailored shopping experience.",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB9.webp",
        Title: "INTERVIEW WITH CAROLINE WOZNIACKI",
        Description: "From her new home in Miami",
        para: "We caught up with our brand ambassador Caroline about upcoming projects, her brand new home in the exclusive Fisher Island neighbourhood in Miami, and how she balances family and professional life following her successful tennis career.",
      },
      // {
      //   Image:
      //     "https://images.ctfassets.net/8cd2csgvqd3m/2Ui81JBX32QcFOOeHXl9rL/4ed574440dce963463d49ab5438c8ecb/Beolink_History_-_Mobile.png?q=90&fm=webp&w=480&h=718&fit=fill",
      //   Title: "THE CONNECTION BETWEEN YOUR SPEAKERS",
      //   Description: "What is Beolink?",
      //   para: "'You only first fully understand what the true benefits of Beolink are - when you have had it for a while, and someone takes it away from you' (Quote by Bang & Olufsen custom installer)",
      // },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB10.webp",
        Title: "SINCE 1925",
        Description: "Crafting Memories",
        para: "Over the past 95 years, we have built products that embody the principles of iconic, classic and timeless design, craftsmanship and tech. It’s what defined us back when we started, and it’s what drives us towards the future.",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB11.webp",
        Title: "THE BEOSYSTEMS",
        Description: "Timeless, for 50 years and counting",
        para: "Bang & Olufsen is expanding its Recreated Classics Program with the launch of Beosystems – a limited edition music system that transcends time by bridging the gap between one of our iconic designs from 1972 and today’s cutting-edge digital technology. ",
      },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB12.webp",
        Title: "BEOSOUND HISTORY",
        Description: "What is Beosound?",
        para: "Beosound was introduced in Bang & Olufsen products in 1992. The first was Beosound Ouverture, a name underlining the end of an era of black boxes and technical products, numbers and technical terms. The conceptual idea behind the product itself was to combine all sources and elements in an all-in-one system. It should stand out in your home environment and invite you in.",
      },
      // {
      //   Image:
      //     "src/assets/images/WorldOFBnO/WoB13.webp",
      //   Title: "PERSONALISATION AT YOUR FINGERS",
      //   Description: "Bang & Olufsen Apps",
      //   para: "Step into a realm of sonic excellence with Bang & Olufsen's suite of groundbreaking apps, engineered to deliver unparalleled audio performance tailored to your preferences.",
      // },
      // {
      //   Image:
      //     "src/assets/images/WorldOFBnO/WoB14.webp",
      //   Title: "SPEAKERS TO SUIT YOUR SPACE",
      //   Description: "How to choose the right speakers for your home",
      //   para: "Sound moves you. The right music can instantly elevate your mood, and the right home speaker means you can enjoy those moments of magic with more depth and detail. Our unrivalled audio technology means your music sounds better in your space.",
      // },
      {
        Image:
          "src/assets/images/WorldOFBnO/WoB17.webp",
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
