import React, { useRef , useEffect} from "react";
import Inner from "../Components/latouts/Inner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
// ghjgj

const Worldbando = () => {
  return (
    <Inner>
      <div className="w-full h-screen bg-red-200"></div>
      <WorldofBandO/>
      <Footer/>
    </Inner>
  );
};

export default Worldbando;
const WorldofBandO = () => {
  const WorldofBandOdata = [
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/6x0VvmMsGGHcrGm6IE4ww6/d664ff7752d1b9508d58f44a86358ab4/Lifestyle-Beosystem-9000c-0027-W3840x2160px.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "RECREATED CLASSICS",
      Description: "Bringing the past into the future",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/4fxPSzDq19ug3lWUKAToLM/f59eceaf7d151aef486e8822216a489e/Kresten_IC_1.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      Title: "KRESTEN BJORN KRAB_BJERRE, CREATIVE DIRECTOR",
      Description: "Design Stories",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/3w6ZarDfWt7iWEpPctQK1i/72c9662844c69c9a8dc7f30212eb3297/Finn-2.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "FINN NORGAARD KLINT, POLISHING SPECIALIST",
      Description: "Craft Stories",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/WMQn2y0L3gE3B7Pu5tyLu/c6671c611c007544eb5ada4fd3383295/beolab90-169.png?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "BEOLAB 90",
      Description: "A Vision of Sound",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/3sJewp4W4vhZ7QHYBu1hmb/9770f0bde3b64d52b34076d979359319/Cercle_Hero.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "INTRODUCING A HARMONIOUS FUSION",
      Description: "The Bang & Olufsen X Cercle Partnership",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/6kFgHvbZ1iZDlPRTGyfwLw/cdb91a023fae2d0562059b2b6ab7d7ef/jj_per.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      Title: "LIVE FROM THE 10TH ARRONDISSEMENT",
      Description: "Sounds of Paris",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/1PwtVZnFumQn9RJRwffVVL/745c7313e83f66d11cff8c9db2938604/ASM_PlayerwithH95_1x1.png?q=90&fm=webp&w=480&h=480&fit=fill",
      Title: "BANG & OLUFSEN AND AS MONACO",
      Description: 'Bringing the "Sound of Monaco" to life',
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/1M9MoNIWbX4CF7YOEcdJ7t/8b841fa4c110060b5f1b5f9e75004f77/Lifestyle_-_Ferrari_Event_-_1920x1080px.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "AT MILIAN FERRARI FLAGSHIP STORE",
      Description: "Celebrating the launch of the ferrari Collection",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2qBKEeS0R8pA9pylXTYMld/df67d6fefd1baafef5eae7f2cf706640/Rimowa_Square.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      Title: "CLOSER TO THE JOURNEY",
      Description: "Bang & Olufsen X RIMOWA",
    },
    {
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/4nISV5C5VJVQ1fyH74PASL/46f7d6571e458cc94f7cca7b2b1b3459/Hero_outside.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      Title: "AT THE MAYFAIR FLAGSHIP STORE",
      Description: "Celebrating the launch of Mayfair Flagship",
    },
    {
      Image: "https://images.ctfassets.net/8cd2csgvqd3m/6zTOILiuwRx5OxENVpZbAV/85ef99ddf16a60d3126d4f88834e0e3e/Couple_square.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
      Title: "INTERVIEW WITH CAROLINE WOZNIACKI",
      Description: "From her new home in Miami",
    },
    {
      Image: "https://images.ctfassets.net/8cd2csgvqd3m/2Ui81JBX32QcFOOeHXl9rL/4ed574440dce963463d49ab5438c8ecb/Beolink_History_-_Mobile.png?q=90&fm=webp&w=480&h=718&fit=fill",
      Title: "THE CONNECTION BETWEEN YOUR SPEAKERS",
      Description: "What is Beolink?",
    },
    {
      Image: "https://images.ctfassets.net/8cd2csgvqd3m/491YJNhkZ60sVK96uDCrlS/1009defbb0bee787645fe9b0ccf609e2/Natale_1.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "SINCE 1925",
      Description: "Crafting Memories",
    },
    {
      Image: "https://images.ctfassets.net/8cd2csgvqd3m/3mDkxraEDDBBRBcRdOX22h/7cbe36afbfbec994fe63210ef8166b9d/BS_73_wide.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title: "THE BEOSYSTEMS",
      Description: "Timeless, for 50 years and counting",
    },
    {
      Image: "https://images.ctfassets.net/8cd2csgvqd3m/1XUQsO3YIwuVyEKiPYONah/267d44e043812ccc06be1a06aa7d5e50/Beosound-History-Mobile-Image.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
      Title: "BEOSOUND HISTORY",
      Description: "What is Beosound?",
    },
    {
      Image:"https://images.ctfassets.net/8cd2csgvqd3m/6t9TqS4r7BZ5HdFAD4whMj/0c02673c11ff5d4275d992c438d7372c/Hero_1x.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
      Title:"PERSONALISATION AT YOUR FINGERS",
      Description:"Bang & Olufsen Apps"
    },
    {
      Image:"https://images.ctfassets.net/8cd2csgvqd3m/2OsEyjb8oWt7LL1mutx3qc/851f6d8f9ee31effe5a4853cf909b927/HS_Gallery_2.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
      Title:"SPEAKERS TO SUIT YOUR SPACE",
      Description:"How to choose the right speakers for your home"
    },
    {
      Image:"https://images.ctfassets.net/8cd2csgvqd3m/72rbKQ2l6EHHzj34QFz4EW/9668b2c95668d49924a1feb68c60b478/GamFratesi_-_Hero_-_Homepage.png?q=90&fm=webp&w=480&h=480&fit=fill",
      Title:"THE DESIGNERS OF BEOSOUND A5",
      Description:"GamFratesi Studio"
    },
    // {
    //   Image:"https://images.ctfassets.net/8cd2csgvqd3m/3xPGTtKRSwZUx6Z4x9L7tn/495fdec4b1b2b72801304083e777fb47/ASM_outside.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
    //   Title:"BANG & OLUFSEN AND AS MONACO",
    //   Description:"Bringing the sound of Monaco to life"
    // }
  ];
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const img = gsap.utils.toArray('.col1')
    img.forEach((item)=>{
      gsap.set(item,{
        clipPath: "polygon(0 0, .1% 0, .1% .1%, 0 .1%)",
        opacity:1
      })
      const tl = gsap.timeline({
        scrollTrigger:{
             trigger:item,
             start:"20% 80%",
             end:"0 0%",
            //  markers:true,
             scrub:2
        }
      })
      tl.to(item,{
        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration:1.6,
        ease: "power4.out",
      })
    })
  },[])
  return (
    <div className="wofbando-container w-full bg-[#FFFFFF] pb-[20vh] text-black p-[5%] flex flex-col max-sm:gap-20 gap-5 ">
    {WorldofBandOdata.map((item,index)=>(
      <div className={`row flex w-full h-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        <div className="col1 w-[50%] max-sm:w-[80%] h-fit">
          <img className=" w-[80%] max-sm:h-[45vh] max-h-[65vh] max-sm:w-full object-cover" src={item.Image} alt="" />
          <h1 className="font-primary pt-2 opacity-75 max-sm:text-sm">{item.Title}</h1>
          <p className="font-Secondary py-1 max-sm:text-sm">{item.Description}</p>
        </div>
        <div className="col2 w-[50%] max-sm:w-[0%] h-fit"></div>
      </div>
    ))}
    </div>
  );
};
