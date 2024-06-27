import React from 'react'
import Inner from '../Components/latouts/Inner'
import Products from '../Components/Products';
import ShopLanding from '../Components/ShopLanding';
import Footer from '../Components/Footer';
const Headphones = () => {
  const Productsdata = [
    {
      title: "BEOPLAY EX",
      des: "Next-gen wireless earbuds",
      productImage:
        "src/assets/images/Headphone/BEOPLAY EX.webp",
      price:"$399"
    },
    {
      title: "BEOPLAY EX FERRARI EDITION",
      des: "Next-gen wireless earbuds",
      productImage:
        "src/assets/images/Headphone/BEOPLAY EX FERRARI EDITION.webp",
      price:"$399"
    },
    
    {
      title: "BEOPLAY E8 2.0",
      des: "Cutting-edge true wireless earbuds",
      productImage:
        "https://i.pinimg.com/564x/98/31/0a/98310a7120988ff284700d9ff6f9010e.jpg",
        price:"$399"
    },
   
    {
      title: "BEOPLAY H8i",
      des: "Comfortable, do-it-all headphones",
      productImage: "src/assets/images/Headphone/BEOPLAY H8i.webp",
      price:"$399"
    },
    {
      title: "BEOPLAY H95",
      des: "Revitalizing a modern classic",
      productImage: "src/assets/images/Headphone/BEOPLAY H95.webp",
      price:"$999"
    },
    {
      title: "BEOPLAY H95 FERRARI EDITION",
      des: "Comfortable, do-it-all headphones",
      productImage:"/src/assets/images/HomepageImage/hp11.webp",
      price:"$1,299"
    },
    {
      title: "BEOPLAY H9i",
      des: "Elite gaming headset",
      productImage:"src/assets/images/Headphone/BEOPLAY H9i.webp",
      price: "$499​"
    },
    {
      title: "CASE FOR BEOPLAY H95",
      des: "Powerful compact speaker",
      productImage:"src/assets/images/Headphone/CASE FOR BEOPLAY H95.webp"
    },
    {
      title: "BEOPLAY H6",
      des: "ANC headphones with long battery life",
      productImage:"src/assets/images/Headphone/BEOPLAY H6.webp",
      price:"$500"
    },
  ];
  const ShopLandingdata = {
    Img: "/src/assets/images/HomepageImage/hp12.webp",
    Title: "Superior Sound On-the-Go",
    Para: "Experience unparalleled audio quality with Bang & Olufsen headphones, designed for comfort and precision to elevate your listening pleasure wherever you are.",
    shopQue: "WHICH HEADPHONE IS RIGHT FOR YOU?",
    shopCompare: "Compare our headphone and get help finding your perfect match.",
  };

  return (
    <Inner>
      <ShopLanding ShopLandingdata={ShopLandingdata}/>
        <Products Productsdata={Productsdata} />
         <Footer/> 
    </Inner>
  );
}

export default Headphones