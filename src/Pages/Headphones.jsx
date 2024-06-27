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
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489057/https_3A_2F_2Fhypebeast.com_2Fimage_2F2022_2F04_2Fbang-olufsen-beoplay-ex-anc-wireleses-earphones-release-info-001_aupe1a.jpg",
      price:"$399"
    },
    {
      title: "BEOPLAY EX FERRARI EDITION",
      des: "Next-gen wireless earbuds",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489099/i-img900x1200-1707977918r0vdkf28_ze8q4h.jpg",
      price:"$399"
    },
    {
      title: "BEOPLAY E8 2.0",
      des: "Cutting-edge true wireless earbuds",
      productImage:
        "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489162/82c1d1840415f682827df2fbd5e0790c_fexjrc.jpg",
      price:"$399"
    },
    {
      title: "BEOPLAY H8i",
      des: "Comfortable, do-it-all headphones",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489247/BEOPLAY_H8i_mnvvlw.webp",
      price:"$399"
    },
    {
      title: "BEOPLAY H95",
      des: "Revitalizing a modern classic",
      productImage: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489248/BEOPLAY_H95_ynbi5f.webp",
      price:"$999"
    },
    {
      title: "BEOPLAY H95 FERRARI EDITION",
      des: "Comfortable, do-it-all headphones",
      productImage:"https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483132/hp11_tbo0ia.jpg",
      price:"$1,299"
    },
    {
      title: "BEOPLAY H9i",
      des: "Elite gaming headset",
      productImage:"https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489247/BEOPLAY_H9i_zrkhel.webp",
      price: "$499"
    },
    {
      title: "CASE FOR BEOPLAY H95",
      des: "Powerful compact speaker",
      productImage:"https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489249/CASE_FOR_BEOPLAY_H95_iyytdp.webp"
    },
    {
      title: "BEOPLAY H6",
      des: "ANC headphones with long battery life",
      productImage:"https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719489246/BEOPLAY_H6_zz6zq2.webp",
      price:"$500"
    },
];

  const ShopLandingdata = {
    Img: "https://res.cloudinary.com/dtkyjnbvf/image/upload/f_webp/v1719483133/hp12_osyk6o.jpg",
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