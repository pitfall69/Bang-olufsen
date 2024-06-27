import React, { useMemo } from "react";
import ShopNowBtn from "../Components/ShopNowBtn";
import { Link } from "react-router-dom";
const HomePagePoduct = () => {
  const HomePageProductData = useMemo(
    () => [
      {
        img1: "/src/assets/images/HomepageImage/hp11.webp",
        img2: "/src/assets/images/HomepageImage/hp12.webp",
        imgTitle: "BEOPLAY H95",
        imgDes: "Premium over-ear headphones",
        route: "/headphones",
      },
      {
        img1: "/src/assets/images/HomepageImage/hp21.webp",
        img2: "/src/assets/images/HomepageImage/hp22.webp",
        imgTitle: "BEOSOUND A1  EX",
        imgDes: "Portable Bluetooth speaker",
        route:"/speakers"
      },
      {
        img1: "/src/assets/images/HomepageImage/hp31.webp",
        img2: "/src/assets/images/HomepageImage/hp32.webp",
        imgTitle: "BALENCIAGA I BANG",
        imgDes: "Haute Couture HI-FI",
        route:"/speakers"
      },
    ],
    [] 
  );

  return (
    <div className="w-full flex flex-col gap-2 bg-[#fff]">
      {HomePageProductData.map((item, index) => (
        <Link to={item.route}
          key={index}
          className="relative  h-[80vh] max-md:h-[100vh] px-2  flex max-md:flex-col-reverse w-full gap-2"
        >
          <div className="w-1/2 h-full relative max-md:w-full max-md:h-[50%] overflow-hidden">
            <img
              className="h-full hover:scale-[1.1] transition-all duration-300   w-full object-cover"
              src={item.img1}
              alt=""
            />
            <div className="absolute bottom-3 max-sm:hidden font-primary text-white right-[3%]">
              <ShopNowBtn />
            </div>
          </div>
          <div className="w-1/2   h-full relative max-md:w-full  max-md:h-[50%] overflow-hidden">
            <img
              className={`h-full w-full object-cover hover:scale-[1.1] transition-all duration-300  ${
                index === 2 ? "object-top" : ""
              }`}
              src={item.img2}
              alt=""
            />
            <div className="absolute bottom-3 max-sm:hidden font-primary text-white right-[3%]">
              <ShopNowBtn />
            </div>
          </div>
          <div className="absolute w-full -translate-x-1/2 translate-y-[-50%] top-[50%] left-[50%] text-white flex flex-col items-center justify-center gap-5">
            <h2 className="text-xl max-md:text-lg font-Secondary">
              {item.imgDes}
            </h2>
            <h1 className="text-5xl max-md:text-3xl font-semibold font-primary">
              {item.imgTitle}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePagePoduct;

<<<<<<< HEAD

=======
// import { useRef } from 'react';

// const projects = [
//   {
//       name: "Google Pixel Creator Labs",
//       client: "Grow",
//       description: "A partnership between Google & SN37.",
//       src: "/src/assets/images/HomepageImage/hp11.webp",
//       year: 2023,
//   },
//   {
//       name: "Decimal",
//       client: "Decimal",
//       description: "Portfolio site for Decimal.",
//       src: "/src/assets/images/HomepageImage/hp12.webp",
//       year: 2023,
//   },
//   {
//       name: "MAVEN 11",
//       client: "analogueagency",
//       description: "New web design for the blockchain investment fund Maven 11.",
//       src: "maven.jpg",
//       year: 2022,
//   },
//   {
//       name: "Wix Playground Homepage",
//       client: "Wix Playground",
//       description: "Wix Playground is powered by the Wix.com design team.",
//       src: "wix.jpg",
//       year: 2022,
//   },
//   {
//       name: "POWELL—STUDIO",
//       client: "POWELL—STUDIO",
//       description: "The online presence for Powell—Studio.",
//       src: "powell.jpg",
//       year: 2023,
//   },
//   {
//       name: "ROCKETPANDA",
//       client: "ET Studio",
//       description: "An Italian animation studio.",
//       src: "panda.jpg",
//       year: 2022,
//   },
//   {
//       name: "C2 Montreal",
//       client: "Ingamana",
//       description: "C2 Montréal is Canada's premier creative-business event.",
//       src: "c2.jpg",
//       year: 2021,
//   },
//   {
//       name: "Design Is Funny",
//       client: "Shader Studio",
//       description: "Funny is the design work of Daniele Buffa.",
//       src: "funny.jpg",
//       year: 2020,
//   }
// ]

// export default function HomePagePoduct() {
//   return (
//     <main className={`m-[5vh] text-white pb-[5vh]`}>
//       <h1 className="p-[20px] text-[5vw] max-w-[80%]">We use design and technology to create brands and products that perform, delight, and scale.</h1>
//       <div className={``}>
//         <Double projects={[projects[0], projects[1]]}/>
//         <Double projects={[projects[2], projects[3]]} reversed={true}/>
//         <Double projects={[projects[4], projects[5]]}/>
//         <Double projects={[projects[6], projects[7]]} reversed={true}/>
//       </div>
//     </main>
//   )
// }

// function Double({ projects, reversed }) {
//     const firstImage = useRef(null);
//     const secondImage = useRef(null);
//     let requestAnimationFrameId = null;
//     let xPercent = reversed ? 100 : 0;
//     let currentXPercent = reversed ? 100 : 0;
//     const speed = 0.15;

//     const manageMouseMove = (e) => {
//         const { clientX } = e;
//         xPercent = (clientX / window.innerWidth) * 100;

//         if (!requestAnimationFrameId) {
//             requestAnimationFrameId = window.requestAnimationFrame(animate);
//         }
//     };

//     const animate = () => {
//         const xPercentDelta = xPercent - currentXPercent;
//         currentXPercent = currentXPercent + xPercentDelta * speed;

//         const firstImagePercent = 66.66 - currentXPercent * 0.33;
//         const secondImagePercent = 33.33 + currentXPercent * 0.33;

//         firstImage.current.style.width = `${firstImagePercent}%`;
//         secondImage.current.style.width = `${secondImagePercent}%`;

//         if (Math.round(xPercent) === Math.round(currentXPercent)) {
//             window.cancelAnimationFrame(requestAnimationFrameId);
//             requestAnimationFrameId = null;
//         } else {
//             window.requestAnimationFrame(animate);
//         }
//     };

//     return (
//         <div
//             onMouseMove={manageMouseMove}
//             className="flex mt-[10vh] h-[45vw]"
//         >
//             <div
//                 ref={firstImage}
//                 className={`relative ${
//                     reversed ? 'w-[33.33%]' : 'w-[66.66%]'
//                 } transition-all duration-300`}
//             >
//                 <div className="pb-[66%] relative">
//                     <img
//                         src={`${projects[0].src}`}
//                         alt="image"
//                         className="object-cover"
//                     />
//                 </div>
//                 <div className="p-2 text-base">
//                     <h3 className="text-lg mb-1 mt-0 font-normal">
//                         {projects[0].name}
//                     </h3>
//                     <p className="text-gray-700">{projects[0].description}</p>
//                     <p className="text-gray-400">{projects[0].year}</p>
//                 </div>
//             </div>

//             <div
//                 ref={secondImage}
//                 className={`relative ${
//                     reversed ? 'w-[66.66%]' : 'w-[33.33%]'
//                 } transition-all duration-300`}
//             >
//                 <div className="pb-[66%] relative">
//                     <img
//                         src={`${projects[1].src}`}
//                         alt="image"
//                         className="object-cover"
//                     />
//                 </div>
//                 <div className="p-2 text-base">
//                     <h3 className="text-lg mb-1 mt-0 font-normal">
//                         {projects[1].name}
//                     </h3>
//                     <p className="text-gray-700">{projects[1].description}</p>
//                     <p className="text-gray-400">{projects[1].year}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
>>>>>>> 062b682f62fcafd2314016d9ce63fbd0062c4c66
