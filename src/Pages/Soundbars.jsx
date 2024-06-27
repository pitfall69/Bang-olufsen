import React from "react";
import Products from "../Components/Products";
import ShopLanding from "../Components/ShopLanding";
import Footer from "../Components/Footer";

const Soundbars = () => {
  const Productsdata = [
    {
      title: "BEOSOUND THEATRE",
      des: "Rule-defying, heart-racing soundbar",
      productImage: "src/assets/images/Soundbar/BEOSOUND THEATRE.webp",
      price: "$2,499",
    },
    {
      title: "BEOSOUND STAGE",
      des: "Powerful Dolby Atmos soundbar",
      productImage: "src/assets/images/Soundbar/BEOSOUND STAGE.webp",
      price: "$2,999",
    },
  ];
  const ShopLandingdata = {
    Img: "src/assets/images/Soundbar/SoundbarLanding1.webp",
    Title: "Powerful Audio Enhancement",
    Para: "Enhance your home entertainment with Bang & Olufsen soundbars, offering powerful, crystal-clear sound and elegant design to elevate your audio experience to new heights",
    shopQue: "WHICH SOUNDBAR IS RIGHT FOR YOU?",
    shopCompare:
      "Compare our soundbar and get help finding your perfect match.",
  };

  return (
    <div className="">
      <ShopLanding ShopLandingdata={ShopLandingdata} />
      <Products Productsdata={Productsdata} />
      <Footer/>
    </div>
  );
};

export default Soundbars;
