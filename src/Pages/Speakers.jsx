import React from "react";
import Inner from "../Components/latouts/Inner";
import ShopLanding from "../Components/ShopLanding";
import Products from "../Components/Products"
const Speakers = () => {
  const Productsdata = [
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/5Cc3rxxAtXW2cB0UjuJib1/ada4137ba7dd9efe15f75279391dffe6/Beosound_A5_-Mosaic_-3.png?q=90&fm=webp&w=1440&h=810&fit=fill",
    },
    {
      productImage:
        "https://i.pinimg.com/564x/bd/d6/92/bdd692eccd9419d4bf8586a1a50e8ba8.jpg",
    },
    {
      productImage:
        "https://i.pinimg.com/474x/9a/82/6d/9a826deed825dace1000554974b5c29d.jpg",
    },
    {
      title: "BEOSOUND LEVEL",
      des: "Portable WiFi Speaker",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/UW4JhU9Eebcs4l6Lj5qqD/e543eb5e1838148556b75cf33cfb8ce0/Beosound_Level_0257_Sound_And_Vision_For_Your_Home.png?q=90&w=1920&fit=fill&fm=webp",
    },
    {
      title: "BEOSOUND A9",
      des: "Powerful, minimalist speaker",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/3ibJiZ2Y3fNxZoQDKkXNUr/d4e565e084a73310350162a47afefd8c/A9_square.jpg?q=90&w=1920&fit=fill&fm=webp",
    },
    {
      title: "BEOSOUND 2 FERRARI EDITION",
      des: "Powerful home speaker",
      productImage:"src/assets/images/beoplay ferrari.jpg"
    },
    {
      title: "BEOLAB 50",
      des: "Classic floor standing speakers",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/3f7A1UsdHkxMJZbA4MbwSR/1cb1c8c433a125e46c49957e66045cfb/Beolab_50_design.png?q=85&fm=webp&w=828&h=828&fit=fill"
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/2wONtteJLOcycGbvqXgfR0/a61146d95b8c237ce6432bced54ef465/Lifestyle-Beolab-8---0006---2000x2000.png.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
    },
    {
      title: "BEOLAB 18",
      des: "Acoustic work of art",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/6KImtrsmB3GfoLvLRnfgZj/985e57e13f6e4719fd2d5ca72a686759/Beauty-shot-Beoconnect-Core-0012-S2000x2000px.jpg?q=85&fm=webp&w=828&h=828&fit=fill"
    },
  ];
  return (
    <Inner>
      <div>
        <ShopLanding/>
      </div>
      <div className="w-full">
        <Products Productsdata={Productsdata} />
        <div className="h-screen w-full bg-zinc-800"></div>
      </div>
    </Inner>
  );
};

export default Speakers;
