import React from "react";
import ShopLanding from "../Components/ShopLanding";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const Television = () => {
  const Productsdata = [
    {},
    {
      title: "BEOVISION HARMONY",
      des: "Watch the magic unfold",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505072/BEOVISION_HARMONY_qc2rpz.webp",
      price: "$3,199",
    },
    {
      title: "BEOVISION THEATRE",
      des: "Cinematic home theatre",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505072/BEOVISION_THEATRE_kntdal.webp",
      price: "$3,199",
    },
    {
      title: "BEOVISION CONTOUR",
      des: "All-in-one OLED TV",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505072/BEOVISION_CONTOUR_juqfzp.webp",
      price: "$3,199",
    },
    {
      title: "BEOREMOTE HALO",
      des: "Easy access to Music and Smart Home",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505070/BEOREMOTE_HALO_p0cp4m.webp",
      price: "$900",
    },
    {
      title: "BEOCONNECT CORE",
      des: "Elevate your legacy",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505070/BEOCONNECT_CORE_miror0.webp",
      price: "$1150",
    },
    {
      title: "BEOSOUND CORE",
      des: "The heart of your music",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505071/BEOSOUND_CORE_qohf3j.webp",
      price: "$1,100",
    },
    {
      title: "BEOREMOTE ONE",
      des: "Do more with less",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505072/BEOREMOTE_ONE_fortmx.webp",
      price: "$450",
    },
    {
      title: "BEOSOUND STAGE",
      des: "Powerful Dolby Atmos soundbar",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505071/BEOSOUND_STAGE_fhguan.webp",
      price: "$1,150",
    },
  ];
  const ShopLandingdata = {
    Img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505161/TelevisionLanding_psbvjz.webp",
    Title: "Ultimate Viewing Experience",
    Para: "Discover the perfect fusion of cutting-edge technology and sleek design with Bang & Olufsen televisions, delivering stunning visuals and exceptional sound for an immersive entertainment experience.",
    shopQue: "WHICH TELEVISION IS RIGHT FOR YOU?",
    shopCompare:
      "Compare our television and get help finding your perfect match.",
  };

  return (
    <div className="">
      <ShopLanding ShopLandingdata={ShopLandingdata} />
      <Products Productsdata={Productsdata} isfirstactive={"true"} />
      <Footer/>
    </div>
  );
};

export default Television;
