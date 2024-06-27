import React from "react";
import Inner from "../Components/latouts/Inner";

import ShopLanding from "../Components/ShopLanding";
import Products from "../Components/Products";

const Television = () => {
  const Productsdata = [
    {},
    {  title: "BEOVISION HARMONY",
      des: "Watch the magic unfold",
      productImage:
      "src/assets/images/Television/BEOVISION HARMONY.webp",
       price: "$3,199"
    },
    {  title: "BEOVISION THEATRE",
      des: "Cinematic home theatre",
      productImage:
        "src/assets/images/Television/BEOVISION THEATRE.webp",
       price: "$3,199"
    },
    {
      title: "BEOVISION CONTOUR",
      des: "All-in-one OLED TV",
      productImage:
        "src/assets/images/Television/BEOVISION CONTOUR.webp",
       price: "$3,199"
    },
    {
      title: "BEOREMOTE HALO",
      des: "Easy access to Music and Smart Home",
      productImage:
        "src/assets/images/Television/BEOREMOTE HALO.webp",
         price: "$900"
    },
    {
      title: "BEOCONNECT CORE",
      des: "Elevate your legacy",
      productImage:
        "src/assets/images/Television/BEOCONNECT CORE.webp",
         price: "$1150"
       
    },
    {
      title: "BEOSOUND CORE",
      des: "The heart of your music",
      productImage:
        "src/assets/images/Television/BEOSOUND CORE.webp",
      price: "$1,100"
    },
    {
      title: "BEOREMOTE ONE",
      des: "Do more with less",
      productImage:
        "src/assets/images/Television/BEOREMOTE ONE.webp",
      price: "$450"  
    },
    {
      title: "BEOSOUND STAGE",
      des: "Powerful Dolby Atmos soundbar",
      productImage:
        "src/assets/images/Television/BEOSOUND STAGE.webp",
      price: "$1,150"   
    },
  ];
  const ShopLandingdata = {
    Img: "src/assets/images/Television/TelevisionLanding.webp",
    Title: "Ultimate Viewing Experience",
    Para: "Discover the perfect fusion of cutting-edge technology and sleek design with Bang & Olufsen televisions, delivering stunning visuals and exceptional sound for an immersive entertainment experience.",
    shopQue: "WHICH TELEVISION IS RIGHT FOR YOU?",
    shopCompare:
      "Compare our television and get help finding your perfect match.",
  };

  return (
    <Inner>
      <ShopLanding ShopLandingdata={ShopLandingdata} />
     <Products Productsdata={Productsdata} isfirstactive = {"true"} />
      <div className="h-screen w-full bg-zinc-800"></div>
    </Inner>
  );
};

export default Television;