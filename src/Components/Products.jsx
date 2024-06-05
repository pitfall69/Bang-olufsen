import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Products = () => {
  const Productsdata = [
    {
      productTitle: "BESOUND A5",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/31DyKYm3j9cX64lo32iHQt/bf0b2f5fb2ba4277d559b67fe5a81426/Beosound_A5_-_Moodboard_Large_-_Image.jpg?q=90&w=1920&fit=fill&fm=webp",
    },
    {
      productTitle: "BEOSOUND A1 2ND GEN",
      productImage:
        "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_userguide_speakers_a1.jpg",
    },
    {
      productTitle: "BEOSOUND EXPLORE",
      productImage:
        "https://b1985624.smushcdn.com/1985624/wp-content/uploads/2022/02/Beosound-Explore-0124.jpg?lossy=2&strip=1&webp=1",
    },
    {
      productTitle: "BEOSOUND STAGE",
      productImage:
        "https://images.ctfassets.net/8cd2csgvqd3m/2Dcey9pjAdR7lfTGZE0N7B/04245b535f2aa02bd4ebc17b5dd92e29/Stage_Bronze_SBI_1.jpg?q=90&fm=webp&w=720&h=1280&fit=fill",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
    {
      productTitle: "",
      productImage: "",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".product-image", {
      y: 300,
      stagger: 1,
      ease: "power3.inOut",
      duration: 8,
      scrollTrigger: {
        trigger: ".product-image",
        start: "-100% 85%",
        end: "top 60%",
        // markers:true,
        scrub: 10,
      },
    });
  }, []);

  return (
    <div className="products-container flex gap-[2.5vw] max-md:p-0  flex-wrap p-[3vw] bg-white text-white items-center justify-center w-full">
      {Productsdata.map((item, index) => (
        <div
          key={index}
          className="h-[50vh] max-lg:h-[30vh] product-image w-[30%] max-md:w-[45%] relative"
        >
          <img
            className="w-full h-full bg-blue-500 object-cover"
            src={item.productImage}
            alt={item.productTitle}
          />
          <h3 className="font-primary max-sm:text-xs max-sm:p-2 absolute bottom-0 p-5">
            {item.productTitle}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
