import React from "react";

const HomePagePoduct = () => {
  const HomePageProductData = [
    {
      img1: "/src/assets/images/HomepageImage/hp11.webp",
      img2: "/src/assets/images/HomepageImage/hp12.webp",
      imgTitle: "BEOPLAY H95",
      imgDes: "Premium over-ear headphones",
    },

    {
      img1: "/src/assets/images/HomepageImage/hp21.webp",
      img2: "/src/assets/images/HomepageImage/hp22.webp",
      imgTitle: "BEOSOUND A1  EX",
      imgDes: "Portable Bluetooth speaker",
    },
    {
      img1: "/src/assets/images/HomepageImage/hp31.webp",
      img2: "/src/assets/images/HomepageImage/hp32.webp",
      imgTitle: "BALENCIAGA I BANG",
      imgDes: "Haute Couture HI-FI",
    },
  ];

  return (
    <div className=" w-full flex flex-col ">
      {HomePageProductData.map((item, index) => (
        <div
          key={index}
          className="relative h-[80vh] max-md:h-[100vh] px-2 flex max-md:flex-col-reverse w-full"
        >
          <div className="w-1/2 h-full max-md:w-full max-md:h-[50%] ">
            <img
              className="h-full w-full object-cover p-1"
              src={item.img1}
              alt=""
            />
          </div>
          <div  className="w-1/2 h-full max-md:w-full p-1 max-md:h-[50%]">
            <img
              className={`h-full w-full object-cover  ${
                index === 2 && "object-top"
              } `}
              src={item.img2}
              alt=""
            />
          </div>
          <div className="absolute w-full -translate-x-1/2 translate-y-[-50%] top-[50%] left-[50%] text-white flex flex-col items-center justify-center gap-5">
            <h2 className="text-xl max-md:text-lg font-Secondary">
              {item.imgDes}
            </h2>
            <h1 className="text-5xl max-md:text-3xl font-semibold font-primary ">
              {item.imgTitle}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePagePoduct;
