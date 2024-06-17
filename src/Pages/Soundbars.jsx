import React from 'react'
import Inner from '../Components/latouts/Inner'
import Products from '../Components/Products';
import ShopLanding from '../Components/ShopLanding';

const Soundbars = () => {
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
      title: "BEOPLAY H95 FERRARI EDITION",
      des: "premium over-ear headphones",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/26UvbAcVWwHiPghvRKIkT2/9bbce0d3cce217a1c7c22af6643a00cb/FerrariFashionShow_BeoplayH95FerrariEdition_feed-0928-03_W1080x607px.jpg?q=90&fm=webp&w=720&h=405&fit=fill",
    },
    {
      title: "BEOVISION HARMONY",
      des: "Watch the magic unfold",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/3IV4ffFlHeopnXmsPbFGPk/4dcd79ef00ec5b82de41bcd3f7ce0598/Sound_And_Vision_For_Your_Home_Beovision_Harmony___Beolab_28_0017_Interior_Shot__1_.png?q=90&fm=webp&w=828&h=828&fit=fill",
    },
    {
      title: "BEOVISION THEATRE",
      des: "Cinematic home theatre",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/4QBps5McpzQqOwA8n4lZ3s/82bdd9067ad484d4b650a35c0b56dc93/TV_Immersive_Mobile.jpg?q=90&w=828&fit=fill&fm=webp"
    },
    {
      title: "BEOPLAY EX",
      des: "Next-gen wireless earbuds",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/67L5yl96I5icdB2H33Rzyn/b056cfa0717154733c025b33c6e84086/Lifestyle---Beoplay-EX---0562---The-Gift-Of-Music-2023---2000x2800.jpg?q=90&w=1920&fit=fill&fm=webp"
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/2wONtteJLOcycGbvqXgfR0/a61146d95b8c237ce6432bced54ef465/Lifestyle-Beolab-8---0006---2000x2000.png.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
    },
    {
      title: "BEOSOUND STAGE",
      des: "Powerful Dolby Atmos soundbar",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/29mUtF3dItfkSGBYvj6XjW/28560904f19dcf1cffe06a1698d2be07/STAGE_square.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
    },
  ];
  const ShopLandingdata = {
    Img: "https://manofmany.com/wp-content/uploads/2022/09/Beosound-Theatre-5.jpg",
    Title: "Powerful Audio Enhancement",
    Para: "Enhance your home entertainment with Bang & Olufsen soundbars, offering powerful, crystal-clear sound and elegant design to elevate your audio experience to new heights",
    shopQue: "WHICH SOUNDBAR IS RIGHT FOR YOU?",
    shopCompare: "Compare our soundbar and get help finding your perfect match.",
  };

  return (
    <Inner>
   
       <ShopLanding ShopLandingdata={ShopLandingdata}/>
        <Products Productsdata={Productsdata} />
        <div className="h-screen w-full bg-zinc-800"></div>
    
    </Inner>
  );
}

export default Soundbars