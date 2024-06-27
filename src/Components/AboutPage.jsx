// import React from "react";
// import Paragraph from "./Paragraph";
// import Button from "./Button"
// import ShopNowBtn from "./ShopNowBtn"
// import BorderAnim from "./BorderAnim"
// const AboutPage = () => {
//   const Abouttext = [
//     "The collaboration between Bang & Olufsen and leading designers integrates cutting-edge ",
//     "technology with timeless design, resulting in exceptional audio and visual experiences that",
//     "redefine the standards of luxury and innovation. ",
//   ];

//   const Aboutpara = [
//     "Today, Bang & Olufsen continues to lead the way in high-fidelity audio and innovative design.",
//     "Our global network of stores and showrooms provides a space where you can immerse yourself",
//     "in the Bang & Olufsen experience, explore our latest innovations, and receive personalized service",
//     "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
//     "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
//     "Join us in celebrating a legacy of innovation and design excellence. Experience the unparalleled ",
//     "craftsmanship, sophisticated aesthetics, and outstanding performance that define Bang & Olufsen. ",
//     "We look forward to welcoming you into our world and helping you create moments of pure auditory ",
//     "and visual pleasure. Welcome to the future of sound and vision, welcome to Bang & Olufsen",
//   ];

//   return (
//     <div className="w-full h-screen flex-col bg-white flex items-center justify-center font-primary">
//       {/* <BorderAnim customindex={8}/> */}
//       <div className="w-[90%] h-[30%] flex items-start justify-between">
//         <Paragraph phrases={["THE COMPANY"]} />
//         <Paragraph
//           phrases={Abouttext}
//           className={`text-[1.9rem] font-primary`}
//         />
//       </div>
//       <div className="w-[90%] h-[50%] flex items-start justify-between  ">
//        <div className="w-full h-full flex flex-col items-start justify-start">
//        <Paragraph
//           phrases={Aboutpara}
//           className={`text-[1.6rem] font-primary`}
//         />
//        {/* <ShopNowBtn text={'Learn More'} className={`mt-10`}/> */}
//        </div>
//         <div className="w-[25%] h-full bg-red-500">
//           <img className="w-full h-full object-cover" src="https://images.ctfassets.net/8cd2csgvqd3m/4w2WiH9iFxmKQtDaU60vZC/65a9307e6cc30cb3fd665bfd99d648f5/BS2_Footer_TIO_Immersive_copy.jpg?q=90&fm=webp&w=480&h=718&fit=fill" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



import React from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ShopNowBtn from "./ShopNowBtn";
import BorderAnim from "./BorderAnim";

const AboutPage = () => {
  const aboutText = [
    "The collaboration between Bang & Olufsen and leading designers integrates cutting-edge",
    "technology with timeless design, resulting in exceptional audio and visual experiences that",
    "redefine the standards of luxury and innovation."
  ];

  const aboutParagraph = [
    "Today, Bang & Olufsen continues to lead the way in high-fidelity audio and innovative design.",
    "Our global network of stores and showrooms provides a space where you can immerse yourself",
    "in the Bang & Olufsen experience, explore our latest innovations, and receive personalized service",
    "from our expert team. Whether you are a longtime aficionado or new to our brand, we invite you to",
    "join us in celebrating a legacy of innovation and design excellence. Experience the unparalleled",
    "craftsmanship, sophisticated aesthetics, and outstanding performance that define Bang & Olufsen.",
    "We look forward to welcoming you into our world and helping you create moments of pure auditory",
    "and visual pleasure. Welcome to the future of sound and vision, welcome to Bang & Olufsen."
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-white items-center justify-center font-primary">
      {/* <BorderAnim customindex={8}/> */}
      <div className="w-[90%] h-[30%] flex justify-between">
        <Paragraph phrases={["THE COMPANY"]} />
        <Paragraph phrases={aboutText} className="text-[1.9rem] font-primary" />
      </div>
      <div className="w-[90%] h-[50%] flex justify-between">
        <div className="w-full flex flex-col">
          <Paragraph phrases={aboutParagraph} className="text-[1.6rem] font-primary" />
          {/* <ShopNowBtn text={'Learn More'} className="mt-10"/> */}
        </div>
        <div className="w-[25%] h-full bg-red-500">
          <img 
            className="w-full h-full object-cover"
            src="https://images.ctfassets.net/8cd2csgvqd3m/4w2WiH9iFxmKQtDaU60vZC/65a9307e6cc30cb3fd665bfd99d648f5/BS2_Footer_TIO_Immersive_copy.jpg?q=90&fm=webp&w=480&h=718&fit=fill" 
            alt="Bang & Olufsen Experience" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
