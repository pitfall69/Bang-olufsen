// import React from "react";
// import Button from "../Components/Button";
// import ShopNowBTn from "../Components/ShopNowBtn";
// export default function Footer() {
//   return (
//     <div
//       className="relative h-[80vh]"
//       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
//     >
//       <div className="fixed bottom-0 text-white h-[80vh] w-full">
//         <div className="w-full h-full flex flex-col justify-between relative">
//           <button className="absolute right-10 top-5 font-Secondary text-lg">
//             <ShopNowBTn text={"Back to top"} />
//           </button>
//           <div className="w-full h-[40%] flex flex-col gap-3 items-center justify-center ">
//             <h3 className="text-sm font-primary">
//               EXPLORE THE HOUSE OF BANG & OLUFSEN
//             </h3>
//             <h2 className="font-Secondary text-5xl py-3 text-center ">
//               Join our global community for exclusive <br /> benefits and news
//               about
//             </h2>
//             <Button text={"Join us"} />
//           </div>
//           <div className="w-full h-[50%]">
//             <div className="w-full h-[30%] flex items-center justify-between px-10">
//               <div>
//                 <h1 className="font-primary">
//                   © Copyright 2024 Bang & Olufsen Ltd.
//                   <br /> All Rights reserved.
//                 </h1>
//                 <h3 className="font-Secondary py-3">Created by THE SPIRIT'S</h3>
//               </div>
//               <div>
//                 <h1 className="font-primary py-3">Socials</h1>
//                 <div className="flex items-center font-Secondary gap-3">
//                   <ShopNowBTn text={"Instagram"} />
//                   <ShopNowBTn text={"Twitter"} />
//                   <ShopNowBTn text={"LinkedIN"} />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="font-primary py-3">SAY HELLO</h1>
//                 <h3 className="font-Secondary ">hello@bang&olufsen.com</h3>
//               </div>
//             </div>
//             <div className="w-full h-[70%] flex items-center justify-center">
//               <h2 className="text-[13rem] font-[500] font-And   leading-none">BANG & OLUFSEN</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useRef } from "react";
import Button from "../Components/Button";
import ShopNowBTn from "../Components/ShopNowBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
export default function Footer() {

  const footerRef = useRef()
  
  useGSAP(() => {
    const splittext = new SplitTextJS(footerRef.current)
    gsap.from(splittext.chars, {
      y: 200,
      stagger: .035,
      duration: .5,
      scrollTrigger: {
        trigger: '.footer-main',
        start: '45% 30%',
        end: 'bottom 50%',
      }
    })
  })
  return (
    <div>
      <div
        className="footer-main w-full h-[40vh] flex flex-col gap-3 items-center  justify-center bg-[#FCFAEE]"
      >
        <h3 className="text-sm font-primary ">
          EXPLORE THE HOUSE OF BANG & OLUFSEN
        </h3>
        <h2 className="font-Secondary text-5xl py-3 text-center ">
          Join our global community for exclusive <br /> benefits and news
          about
        </h2>
        <Button text={"Join us"} />
      </div>
      <div
        className="relative h-[65vh]  max-md:h-[38vh] bg-black "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 text-white w-full max-md:pb-3  ">
          <div className="w-full h-full flex flex-col justify-between relative  ">
          <button onClick={()=>{
                // scroll.scrollTo(0)
                console.log("clicked");
              }} className="font-Secondary text-lg  max-md:mb-5 absolute bottom-[50%] right-10  ">
              <ShopNowBTn  text={"Back to top"} />
            </button>
            <div className=" w-full h-full  ">
              <div className="options w-full h-[45vh] pt-5 flex justify-between items-baseline  px-10 max-md:text-[2vw]  md:pb-5 ">
                <div className="copyright">
                  <h1 className="font-primary">
                    © Copyright 2024 Bang & Olufsen Ltd.
                    <br /> All Rights reserved.
                  </h1>
                  <h3 className="font-Secondary py-3 max-md:py-2">Created by THE SPIRIT'S</h3>
                </div>
                <div className="socials flex items-start gap-10 ">
                  <div>
                    <h1 className="font-primary py-3 max-md:py-2 font-bold">Socials</h1>
                    <div className="flex flex-col max-md:flex-row font-Secondary gap-3 max-md:gap-1">
                      <ShopNowBTn text={"Instagram"} />
                      <ShopNowBTn text={"Twitter"} />
                      <ShopNowBTn text={"LinkedIN"} />
                    </div>
                  </div>
                  
                </div>
                <div className="nav-items">
                    <h1 className="font-primary py-3 max-md:py-2 font-bold">Products</h1>
                    <div className="flex flex-col max-md:flex-row font-Secondary gap-3 max-md:gap-1 ">
                    <ShopNowBTn text={"Speakers"} />
                      <ShopNowBTn text={"Headphones"} />
                      <ShopNowBTn text={"Televisions"} />
                      <ShopNowBTn text={"Soundbars"} />
                      
                    </div>
                  </div>
                <div className="say">
                  <h1 className="font-primary py-3 max-md:py-2">SAY HELLO</h1>
                  <ShopNowBTn text={'hello@bang&olufsen.com'}/>
                </div>
              </div>
              
              
              <div  className=" flex items-center justify-center pt-4">
                <h2 ref={footerRef} className="brand text-[10rem] max-md:text-4xl font-[500] font-And leading-none">
                  BANG & OLUFSEN
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
