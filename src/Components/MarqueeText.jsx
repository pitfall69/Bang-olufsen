import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/020/502/973/original/bentley-brand-logo-symbol-with-name-white-design-british-cars-automobile-illustration-with-black-background-free-vector.jpg",
    "https://pbs.twimg.com/profile_images/800568493041061889/otswt7hN_400x400.jpg",
    "https://static.vecteezy.com/system/resources/previews/020/502/469/original/ferrari-logo-brand-car-symbol-with-name-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/020/502/472/original/lamborghini-brand-logo-car-symbol-white-design-italian-automobile-illustration-with-black-background-free-vector.jpg",
    "https://yt3.googleusercontent.com/ytc/AIdro_k3M3eAal5lByrw4fAqTFCdWpn4S8ppExK2iREwa2I8YOQ=s900-c-k-c0x00ffffff-no-rj",
    "https://www.gardenberg.se/wp-content/uploads/2019/03/thumb_p_berluti.jpg",
    "https://www.penboutique.com/cdn/shop/collections/pininfarina-logo.jpg?v=1710621985",
    "https://i0.wp.com/hypebeast.com/image/2021/02/Ermenegildo-Zegna.png?w=210",
    "https://mir-s3-cdn-cf.behance.net/projects/404/79d5d6152225355.Y3JvcCwxMTE0LDg3MSwxODIsMzg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3-yyzQ9KyB6HIZiVX8xlMHIsCkWMqYfRaQ&usqp=CAU",
    "https://static.vecteezy.com/system/resources/previews/020/927/742/non_2x/lg-logo-brand-phone-symbol-with-name-white-design-south-korea-mobile-illustration-with-black-background-free-vector.jpg",
  ];
  const [marqueeSpeed, setMarqueeSpeed] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSpeed = Math.min(250, 10 + scrollY / 10);
      setMarqueeSpeed(newSpeed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Marquee speed={marqueeSpeed} direction="left">
      <div className="flex gap-20 max-sm:gap-20 mt-[10vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`h-[8vh] ${
              index === 0 ? "ml-20" : ""
            } flex-shrink-0 text-white mx-10`}
          >
            <img
              className="h-full w-full aspect-[3/2] object-cover"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex gap-20 max-sm:gap-20 mt-[10vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`h-[8vh] ${
              index === 0 ? "ml-20" : ""
            } flex-shrink-0 text-white mx-10`}
          >
            <img
              className="h-full w-full aspect-[3/2] object-cover"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeText;
