// // // import React from "react";
// // // import Button from "../Components/Button";
// // // import ShopNowBTn from "../Components/ShopNowBtn";
// // // export default function Footer() {
// // //   return (
// // //     <div
// // //       className="relative h-[80vh]"
// // //       style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
// // //     >
// // //       <div className="fixed bottom-0 text-white h-[80vh] w-full">
// // //         <div className="w-full h-full flex flex-col justify-between relative">
// // //           <button className="absolute right-10 top-5 font-Secondary text-lg">
// // //             <ShopNowBTn text={"Back to top"} />
// // //           </button>
// // //           <div className="w-full h-[40%] flex flex-col gap-3 items-center justify-center ">
// // //             <h3 className="text-sm font-primary">
// // //               EXPLORE THE HOUSE OF BANG & OLUFSEN
// // //             </h3>
// // //             <h2 className="font-Secondary text-5xl py-3 text-center ">
// // //               Join our global community for exclusive <br /> benefits and news
// // //               about
// // //             </h2>
// // //             <Button text={"Join us"} />
// // //           </div>
// // //           <div className="w-full h-[50%]">
// // //             <div className="w-full h-[30%] flex items-center justify-between px-10">
// // //               <div>
// // //                 <h1 className="font-primary">
// // //                   © Copyright 2024 Bang & Olufsen Ltd.
// // //                   <br /> All Rights reserved.
// // //                 </h1>
// // //                 <h3 className="font-Secondary py-3">Created by THE SPIRIT'S</h3>
// // //               </div>
// // //               <div>
// // //                 <h1 className="font-primary py-3">Socials</h1>
// // //                 <div className="flex items-center font-Secondary gap-3">
// // //                   <ShopNowBTn text={"Instagram"} />
// // //                   <ShopNowBTn text={"Twitter"} />
// // //                   <ShopNowBTn text={"LinkedIN"} />
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <h1 className="font-primary py-3">SAY HELLO</h1>
// // //                 <h3 className="font-Secondary ">hello@bang&olufsen.com</h3>
// // //               </div>
// // //             </div>
// // //             <div className="w-full h-[70%] flex items-center justify-center">
// // //               <h2 className="text-[13rem] font-[500] font-And   leading-none">BANG & OLUFSEN</h2>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useRef } from "react";
// // import Button from "../Components/Button";
// // import ShopNowBTn from "../Components/ShopNowBtn";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import SplitTextJS from "split-text-js";
// // export default function Footer() {

// //   const footerRef = useRef()
  
// //   useGSAP(() => {
// //     const splittext = new SplitTextJS(footerRef.current)
// //     gsap.from(splittext.chars, {
// //       y: 200,
// //       stagger: .035,
// //       duration: .5,
// //       scrollTrigger: {
// //         trigger: '.footer-main',
// //         start: '45% 30%',
// //         end: 'bottom 50%',
// //       }
// //     })
// //   })
// //   return (
// //     <div>
// //       <div
// //         className="footer-main w-full h-[40vh] flex flex-col gap-3 items-center  justify-center bg-[#FCFAEE]"
// //       >
// //         <h3 className="text-sm font-primary ">
// //           EXPLORE THE HOUSE OF BANG & OLUFSEN
// //         </h3>
// //         <h2 className="font-Secondary text-5xl py-3 text-center ">
// //           Join our global community for exclusive <br /> benefits and news
// //           about
// //         </h2>
// //         <Button text={"Join us"} />
// //       </div>
// //       <div
// //         className="relative h-[65vh]  max-md:h-[38vh] bg-black "
// //         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
// //       >
// //         <div className="fixed bottom-0 text-white w-full max-md:pb-3  ">
// //           <div className="w-full h-full flex flex-col justify-between relative  ">
// //           <button onClick={()=>{
// //                 // scroll.scrollTo(0)
// //                 console.log("clicked");
// //               }} className="font-Secondary text-lg  max-md:mb-5 absolute bottom-[50%] right-10  ">
// //               <ShopNowBTn  text={"Back to top"} />
// //             </button>
// //             <div className=" w-full h-full  ">
// //               <div className="options w-full h-[45vh] pt-5 flex justify-between items-baseline  px-10 max-md:text-[2vw]  md:pb-5 ">
// //                 <div className="copyright">
// //                   <h1 className="font-primary">
// //                     © Copyright 2024 Bang & Olufsen Ltd.
// //                     <br /> All Rights reserved.
// //                   </h1>
// //                   <h3 className="font-Secondary py-3 max-md:py-2">Created by THE SPIRIT'S</h3>
// //                 </div>
// //                 <div className="socials flex items-start gap-10 ">
// //                   <div>
// //                     <h1 className="font-primary py-3 max-md:py-2 font-bold">Socials</h1>
// //                     <div className="flex flex-col max-md:flex-row font-Secondary gap-3 max-md:gap-1">
// //                       <ShopNowBTn text={"Instagram"} />
// //                       <ShopNowBTn text={"Twitter"} />
// //                       <ShopNowBTn text={"LinkedIN"} />
// //                     </div>
// //                   </div>
                  
// //                 </div>
// //                 <div className="nav-items">
// //                     <h1 className="font-primary py-3 max-md:py-2 font-bold">Products</h1>
// //                     <div className="flex flex-col max-md:flex-row font-Secondary gap-3 max-md:gap-1 ">
// //                     <ShopNowBTn text={"Speakers"} />
// //                       <ShopNowBTn text={"Headphones"} />
// //                       <ShopNowBTn text={"Televisions"} />
// //                       <ShopNowBTn text={"Soundbars"} />
                      
// //                     </div>
// //                   </div>
// //                 <div className="say">
// //                   <h1 className="font-primary py-3 max-md:py-2">SAY HELLO</h1>
// //                   <ShopNowBTn text={'hello@bang&olufsen.com'}/>
// //                 </div>
// //               </div>
              
              
// //               <div  className=" flex items-center justify-center pt-4">
// //                 <h2 ref={footerRef} className="brand text-[10rem] max-md:text-4xl font-[500] font-And leading-none">
// //                   BANG & OLUFSEN
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React from "react";
// import Button from "../Components/Button";
// import Logo from "../Components/Logo";
// import ShopNowBtn from "./ShopNowBtn";

// const contactDetails = [
//   { type: 'Email', value: 'bangandolufsen.com' },
//   { type: 'Phone', value: '+852 800 906672' },
// ];

// const socialLinks = [
//   { name: 'youtube', url: 'https://youtube.com' },
//   { name: 'twitter', url: 'https://twitter.com' },
//   { name: 'facebook', url: 'https://facebook.com' },
//   { name: 'instagram', url: 'https://instagram.com' },
//   { name: 'pinterest', url: 'https://pinterest.com' }
// ];

// const services = [
//   'Speakers',
//   'Headphones',
//   'Television',
//   'World of B&O',
// ];

// const Footer = () => {
//   return (
//     <div>
//       <div className="footer-main w-full h-[40vh] flex flex-col gap-3 items-center justify-center bg-gray-800">
//         <h3 className="text-sm font-primary text-white">EXPLORE THE HOUSE OF BANG & OLUFSEN</h3>
//         <h2 className="font-Secondary text-5xl py-3 text-center text-white">
//           Join our global community for exclusive <br /> benefits and news about
//         </h2>
//         <Button text={"Join us"} />
//       </div>
//       <div className="relative h-[80vh] max-md:h-[38vh] bg-black " style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
//         <div className="fixed bottom-0 w-full text-black max-md:pb-3 px-6">
//             <Logo/>
//           <div className="container mx-auto  py-12 flex flex-wrap justify-between">
            
//             <div className="first-col  w-full md:w-[40%] mb-6 md:mb-0   ">
//               <h1 className="text-5xl font-[500] md:mb-5 text-white">We would love to hear from you.</h1>
//               <p className="text-gray-500 md:mb-6 ">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
//               <button className="bg-white  text-black px-6 py-2 rounded-full md:mb-6 ">Become a Client &rarr;</button>

//               <p className="text-gray-500 md:mb-3 ">Don't like the forms? Drop us a line via email.</p>
//               <a className=" font-bold text-white " href="#">bangandolufsen.com</a>


//             </div>
//             <div className="right w-[60%] h-full flex flex-wrap justify-between pl-16">
//             <div className="contact w-full md:w-1/4 mb-6 md:mb-0">
//               <h3 className="text-xl text-white font-semibold mb-4">Contact us</h3>
//               <ul className="text-gray-500">
//                 {contactDetails.map((detail, index) => (
//                   <li key={index} className="mb-2 inline-block">
//                     {detail.type === 'Email' ? (
//                       <a  href={`mailto:${detail.value}`} className=""><ShopNowBtn  text={detail.value}/></a>
//                     ) : (
//                       <a href={`tel:${detail.value}`} className="hover:underline"><ShopNowBtn  text={detail.value}/></a>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="follow w-full md:w-1/4 mb-6 md:mb-0">
//               <h3 className="text-xl text-white  font-semibold mb-4">Follow us</h3>
//               <ul className="text-gray-500">
//                 {socialLinks.map((link, index) => (
//                   <li key={index} className="mb-2">
//                     <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="services  w-full md:w-1/4 mb-6 md:mb-0">
//               <h3 className="text-xl text-white  font-semibold mb-4">Services</h3>
//               <ul className="text-gray-500">
//                 {services.map((service, index) => (
//                   <li key={index} className="mb-2">{service}</li>
//                 ))}
//               </ul>
//             </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-center py-12 ">
//             <p className="text-gray-500 tracking-wide">&copy; Awsmd 2024. All rights reserved. 
//               <a href="/privacy-policy" className="hover:underline pl-2">• Privacy Policy</a>
//             </p>
//             <a href="#top" className="ml-4 text-gray-600 hover:underline">Back to the top &uarr;</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;




import React from "react";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import ShopNowBtn from "./ShopNowBtn";

const contactDetails = [
  { type: 'Email', value: 'bangandolufsen.com' },
  { type: 'Phone', value: '+852 800 906672' },
];

const socialLinks = [
  { name: 'youtube', url: 'https://youtube.com' },
  { name: 'twitter', url: 'https://twitter.com' },
  { name: 'facebook', url: 'https://facebook.com' },
  { name: 'instagram', url: 'https://instagram.com' },
  { name: 'pinterest', url: 'https://pinterest.com' }
];

const services = [
  'Speakers',
  'Headphones',
  'Television',
  'World of B&O',
];

const Footer = () => {
  return (
    <div>
      <div className="footer-main w-full h-[40vh] max-md:h-[30vh] flex flex-col gap-3 items-center justify-center bg-zinc-200">
        <h3 className="text-sm font-primary text-black font-bold">EXPLORE THE HOUSE OF BANG & OLUFSEN</h3>
        <h2 className="font-Secondary text-5xl max-md:text-sm py-3 max-md:py-0 text-center text-black">
          Join our global community for exclusive <br /> benefits and news about
        </h2>
        <Button text={"Join us"} />
      </div>
      <div className="relative h-[80vh] max-md:h-[90vh] bg-black " style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className="fixed bottom-0 w-full text-black px-6 max-md:px-4">
            <div className=" ml-[-.3vw] max-md:ml-[-3vw]">
            <Logo/>
            </div>
          <div className="container mx-auto  md:py-12 pt-3 flex flex-wrap  justify-between">
            
            <div className="first-col w-full md:w-[40%] mb-10 md:mb-0 ">
              <h1 className="md:text-5xl text-xl font-[500] md:mb-5 mb-2 text-white">We would love to hear from you.</h1>
              <p className="text-gray-500 max-md:text-sm md:mb-6 mb-4 ">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
              <button className="bg-white max-md:text-sm text-black px-4 md:px-6 py-2 rounded-full md:mb-6 mb-4 ">Become a Partner &rarr;</button>

              <p className="text-gray-500 md:mb-3 mb-2 ">Don't like the forms? Drop us a line via email.</p>
              <a className=" font-bold text-white " href="#">bangandolufsen.com</a>


            </div>
            <div className="right w-full md:w-[60%] h-full flex md:flex-wrap max-md:gap-5 justify-between md:pl-16">
            <div className="contact w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="md:text-xl text-sm text-white font-semibold mb-4">Contact us</h3>
              <ul className="text-gray-500">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="mb-2 inline-block max-md:text-sm">
                    {detail.type === 'Email' ? (
                      <a  href={`${detail.value}`} className=""><ShopNowBtn  text={detail.value}/></a>
                    ) : (
                      <a href={`${detail.value}`} className="hover:underline "><ShopNowBtn  text={detail.value}/></a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="follow w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="md:text-xl text-sm  text-white  font-semibold mb-4">Follow us</h3>
              <ul className="text-gray-500">
                {socialLinks.map((link, index) => (
                  <li key={index} className="mb-2 max-md:text-sm">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="services  w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="md:text-xl text-sm  text-white  font-semibold mb-4">Services</h3>
              <ul className="text-gray-500">
                {services.map((service, index) => (
                  <li key={index} className="mb-2  max-md:text-sm">{service}</li>
                ))}
              </ul>
            </div>
            </div>
          </div>
          <div className="flex max-md:flex-col justify-between items-center max-md:py-6  py-12 max-md:text-sm  max-md:gap-2 ">
            <p className="text-gray-500 md:tracking-wide max-md:text-center">&copy; Awsmd 2024. All rights reserved. 
              <a href="/privacy-policy" className="hover:underline md:pl-2  ">• Privacy Policy</a>
            </p>
            <a href="#top" className="ml-4 text-gray-600 hover:underline max-md:text-center ">Back to the top &uarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
