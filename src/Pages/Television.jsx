import React from 'react'
import Inner from '../Components/latouts/Inner'
import Products from "../Components/Products";
import ShopLanding from '../Components/ShopLanding';

const Television = () => {
  const Productsdata = [
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/2qDtQrfqzt8iOPLjy735jh/09b0d74387fccd92cf05c9b04a1b97ee/Harmony_BL28_16-9.png?q=90&fm=webp&w=1440&h=810&fit=pad",
    },
    {
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/0nHZnsYKbu3uXHrhkrQGD/029907d95c97ca0d8fc41d9146ab08dc/Harmony_carousel_movement_-_16.png?q=90&fm=webp&w=828&h=828&fit=fill",
    },
    {
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/3IV4ffFlHeopnXmsPbFGPk/4dcd79ef00ec5b82de41bcd3f7ce0598/Sound_And_Vision_For_Your_Home_Beovision_Harmony___Beolab_28_0017_Interior_Shot__1_.png?q=90&fm=webp&w=828&h=828&fit=fill",
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
    Img: "https://media.gqmagazine.fr/photos/6273d80700babce15a415355/16:9/w_2560%2Cc_limit/tv%2520cover.png",
    Title: "Ultimate Viewing Experience",
    Para: "Discover the perfect fusion of cutting-edge technology and sleek design with Bang & Olufsen televisions, delivering stunning visuals and exceptional sound for an immersive entertainment experience.",
    shopQue: "WHICH TELEVISION IS RIGHT FOR YOU?",
    shopCompare: "Compare our television and get help finding your perfect match.",
  };

  return (
    <Inner>
     
      <ShopLanding ShopLandingdata={ShopLandingdata}/>
    
        <Products Productsdata={Productsdata} />
        <div className="h-screen w-full bg-zinc-800"></div>
     
    </Inner>
  );
}

export default Television