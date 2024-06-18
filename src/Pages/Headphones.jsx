import React from 'react'
import Inner from '../Components/latouts/Inner'
import Products from '../Components/Products';
import ShopLanding from '../Components/ShopLanding';
import Footer from '../Components/Footer';
const Headphones = () => {
  const Productsdata = [
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage:
        "https://www.thecoolector.com/wp-content/uploads/2022/04/Beoplay-EX-0009-1.png",
    },
    {
      title: "BEOSOUND A5",
      des: "Powerful portable speaker",
      productImage:
        "https://assets.hardwarezone.com/img/2022/01/beoplay-eq-intro1.jpg",
    },
    {
      title: "BEOPLAY E8 2.0",
      des: "Powerful portable speaker",
      productImage:
        "https://i.pcmag.com/imagery/reviews/02xU1WDV1kBYulztvQ9GkY5-3.fit_lim.size_1050x591.v1645222869.png",
    },
   
    {
      title: "BEOPLAY H95 FERRARI EDITION",
      des: "premium over-ear headphones",
      productImage: "https://techmgzn.com/wp-content/uploads/2023/08/bo-ferrari-collection-beoplay-headphones.jpg",
    },
    {
      title: "BEOPLAY H8I",
      des: "Revitalizing a modern classic",
      productImage: "https://images.ctfassets.net/8cd2csgvqd3m/2mQqIOB0evLI52G8Vm2CPg/ea5b5e67cdf0e782f8217f56fd3f6ea4/H8i_Pink_front2.png?q=90&fm=webp&w=720&h=720&fit=fill",
      price:"$400"
    },
    {
      title: "BEOPLAY HX",
      des: "Comfortable, do-it-all headphones",
      productImage:"https://luxussound.com/cdn/shop/files/Beoplay_HX_0174.jpg?v=1648624272&width=1500",
      price:"$599"
    },
    {
      title: "BEOPLAY PORTAL",
      des: "Elite gaming headset",
      productImage:"https://images.idgesg.net/images/article/2021/03/beoplayportal-closeup-100882730-large.jpg",
      price: "$499​"
    },
    {
      title: "BEOLAB 8",
      des: "Powerful compact speaker",
      productImage:"https://images.ctfassets.net/8cd2csgvqd3m/2wONtteJLOcycGbvqXgfR0/a61146d95b8c237ce6432bced54ef465/Lifestyle-Beolab-8---0006---2000x2000.png.jpg?q=90&fm=webp&w=828&h=828&fit=fill"
    },
    {
      title: "BEOPLAY H9 3RD GEN",
      des: "ANC headphones with long battery life",
      productImage:"https://www.digitaltrends.com/wp-content/uploads/2021/03/bang-and-olufsen-beoplay-hx-003.jpeg?p=1",
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
        <div className="h-screen w-full bg-zinc-800"></div>
         <Footer/> 
    </Inner>
  );
}

export default Headphones