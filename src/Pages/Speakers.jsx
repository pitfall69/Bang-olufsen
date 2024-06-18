import React from "react";
import Inner from "../Components/latouts/Inner";
import ShopLanding from "../Components/ShopLanding";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
const Speakers = () => {
  const Productsdata = [
    {
      title: "BEOSOUND 2",
      des: "Elegant home speaker",
      productImage: "/src/assets/images/Speakers/Beosound 2.webp",
      price: "$3,199",
    },
    {
      title: "BEOSOUND EMERGE",
      des: "Compact WiFi home speaker",
      productImage: "/src/assets/images/Speakers/Beosound Emerge.webp",
      price: "$899",
    },
    {
      title: "BEOLAB 90",
      des: "Advanced floor standing speakers",
      productImage: "/src/assets/images/Speakers/Beolab_90.webp",
      price: "$150,000",
    },
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage: "/src/assets/images/Speakers/Beosound_A5.webp",
      price: "$1,499",
    },
    {
      title: "BEOSOUND A9",
      des: "Powerful, minimalist speaker",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/3CWJSQIgCjweW5xDyQGO4M/fb720e5ebf4045fd09001671991d0901/Beolab_90_mosaic_landscape_1.png?q=90&fm=webp&w=720&h=405&fit=fill",
      price: "$",
    },
    {
      title: "BEOSOUND 2 FERRARI EDITION",
      des: "Powerful home speaker",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/5F0ZA0Jzhr5pECOXxt6pbR/175a6a5f3272fa2c0565adcffd1d8466/Tableau-Beosound-Balance-0312-front-s2000x2000px.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
      price: "$",
    },
    {
      title: "BEOLAB 50",
      des: "Classic floor standing speakers",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/3f7A1UsdHkxMJZbA4MbwSR/1cb1c8c433a125e46c49957e66045cfb/Beolab_50_design.png?q=85&fm=webp&w=828&h=828&fit=fill",
      price: "$",
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/2wONtteJLOcycGbvqXgfR0/a61146d95b8c237ce6432bced54ef465/Lifestyle-Beolab-8---0006---2000x2000.png.jpg?q=90&fm=webp&w=828&h=828&fit=fill",
      price: "$",
    },
    {
      title: "BEOLAB 18",
      des: "Acoustic work of art",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/6KImtrsmB3GfoLvLRnfgZj/985e57e13f6e4719fd2d5ca72a686759/Beauty-shot-Beoconnect-Core-0012-S2000x2000px.jpg?q=85&fm=webp&w=828&h=828&fit=fill",
      price: "$",
    },
  ];

  const ShopLandingdata = {
    Img: "https://images.ctfassets.net/8cd2csgvqd3m/70cNHd5dLL8kNFzeinUIWk/bf63508559310b45163c33c2850c44a9/Speaker-Beolit-20-0048-2048x1536.jpg?q=90&w=1080&fit=fill&fm=webp",
    Title: "Premium Audio Experience",
    Para: "Experience rich, authentic sound with Bang & Olufsen's premium speakers, crafted to perfection for stunning clarity and superior acoustics.",
    shopQue: "WHICH SPEAKER IS RIGHT FOR YOU?",
    shopCompare:
      "Compare our speakers and get help finding your perfect match.",
  };

  return (
    <Inner>
      <ShopLanding ShopLandingdata={ShopLandingdata} />
      <Products Productsdata={Productsdata} />
      <div className="h-screen w-full bg-[#fff]"></div>
      <Footer />
    </Inner>
  );
};

export default Speakers;
