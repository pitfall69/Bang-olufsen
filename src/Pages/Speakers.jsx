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
      title: "BEOSOUND A1 2ND GEN",
      des: "Portable Bluetooth speaker",
      productImage:
        "/src/assets/images/Speakers/Beosound_A1.webp",
      price: "$299",
    },
    {
      title: "BEOSOUND A9",
      des: "Powerful, minimalist speaker",
      productImage: "/src/assets/images/Speakers/Beosound_A9.webp",
      price: "$3,399",
    },
    {
      title: "BEOSOUND EXPLORE",
      des: "Waterproof outdoor speaker",
      productImage:
        "/src/assets/images/Speakers/BEOSOUND EXPLORE.webp",
      price: "$249",
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:
        "/src/assets/images/Speakers/BEOLAB 8.webp",
      price: "$6,598",
     
    },
    {
     title: "BEOSOUND BALANCE",
      des: "Outstanding living room speaker",
      productImage:
        "/src/assets/images/Speakers/BEOSOUND BALANCE.webp",
      price: "$3,399",
    },
    {
      title: "BEOLIT 20",
      des: "Powerful Bluetooth speaker",
      productImage:
        "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/154852-speakers-review-bang-olufsen-beolit-20-review-image1-trfkvhzixt.jpg",
      price: "$599",
     
    },
    {
     title: "BEOSOUND LEVEL",
      des: "Portable WiFi Speaker",
      productImage:
        "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Bang-Olufsen-Beosound-Level-WiFi-Speaker-Featured-image.jpg",
      price: "$1,999",
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
      <div className="h-[40vh] w-full bg-[#fff]"></div>
      <Footer />
    </Inner>
  );
};

export default Speakers;
