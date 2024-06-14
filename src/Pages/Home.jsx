import React, { useEffect, useRef } from "react";
import Inner from "../Components/latouts/Inner";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Home = () => {
  return (
    <Inner>
      {/* <Landingpage /> */}
      {/* <FirstAnim /> */}
      <div className="w-full h-screen">
        <OurStories />
      </div>
      {/* <div className="w-full h-screen"></div> */}
    </Inner>
  );
};

export default Home;

// const FirstAnim = () => {

//   const images = [
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/11/Prada-Les-Infusions-visuel-310x387.png" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/11/Prada-Les-Infusions-visuel-310x387.png" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/MONCLER_SS22_LOOK_07_NOLOGO_16_9-310x387.jpg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/prada-paradoxe-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/loreal-eva-at-home-310x387.jpeg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/Bread-Exam-310x387.jpeg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/Prada-Luna-Rossa-Ocean-Header-1-310x387.jpeg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/03/Nespresso-Header-GCxOL-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/03/Chandon-Garden-Spritz-header-310x387.jpg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/03/Nespresso-Header-GCxOL-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/11/Prada-Les-Infusions-visuel-310x387.png" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/MONCLER_SS22_LOOK_07_NOLOGO_16_9-310x387.jpg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/prada-paradoxe-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/loreal-eva-at-home-310x387.jpeg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/Bread-Exam-310x387.jpeg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/prada-paradoxe-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/loreal-eva-at-home-310x387.jpeg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/Bread-Exam-310x387.jpeg" }
//     ],
//     [
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/prada-paradoxe-310x387.jpg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/loreal-eva-at-home-310x387.jpeg" },
//       { image: "https://www.mccann.fr/wp-content/uploads/2023/01/Bread-Exam-310x387.jpeg" }
//     ],
//   ];
//   return (
   
    
//     <div className="main">
//   <div className="main2 w-full bg-red-300 flex gap-5 -translate-x-4 overflow-hidden">
//     {images.map((col, index) => (
//       <div key={index} className="container w-[20%] flex-shrink-0  h-full bg-green-100 " >
//         {col.map((item, i) => (
//           <div key={i} className="box mb-3 w-full bg-blue-400">
//             <img className="opacity-15" src={item.image} alt="" />
//           </div>
//         ))}
//       </div>
//     ))}
//   </div>
// </div>

//   );
// };


const Landingpage = () => {
  return (
    <div className="h-screen pointer-events-none relative w-full overflow-hidden">
      <video
        className="w-full max-sm:object-fit h-full object-cover"
        autoPlay
        loop
        muted
        src="src/assets/videos/videoplayback.mp4"
      ></video>
    </div>
  );
};

const OurStories = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const scatterAndShrink = () => {
      imageRefs.current.forEach((ref, i) => {
        gsap.to(ref, {
          top: images[i].top,
          left: images[i].left,
          transform: 'none',
          width: '75px',
          height: '100px',
          stagger: 0.07,
          duration: 0.7,
          ease: 'power2.out',
        });
      });
    };

    imageRefs.current.forEach((ref) => {
      gsap.set(ref, {
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0)',
      });

      gsap.to(ref, {
        scale: 1,
        width: '300px',
        height: '400px',
        stagger: 0.15,
        duration: 0.75,
        ease: 'power2.out',
        delay: 1,
        onComplete: scatterAndShrink,
      });
    });
  }, []);

  const images = [
    {
      image: "https://images.unsplash.com/photo-1634291934402-7968f44a2939?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: '0%',
      left: '0%',
    },
    {
      image: "https://images.unsplash.com/photo-1673140964834-9b3ff179af32?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      top: '0%',
      left: '10%',
    },
    {
      image: "https://images.unsplash.com/photo-1570077297047-72d3fde57cb5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      top: '00%',
      left: '60%',
    },
    {
      image: "https://images.unsplash.com/photo-1634291934402-7968f44a2939?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: '40%',
      left: '50%',
    },
    {
      image: "https://images.unsplash.com/photo-1673140964834-9b3ff179af32?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      top: '70%',
      left: '30%',
    },
    {
      image: "https://images.unsplash.com/photo-1570077297047-72d3fde57cb5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      top: '60%',
      left: '10%',
    },
    {
      image: "https://images.unsplash.com/photo-1634291934402-7968f44a2939?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: '20%',
      left: '80%',
    },
    {
      image: "https://images.unsplash.com/photo-1673140964834-9b3ff179af32?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      top: '50%',
      left: '30%',
    },
    {
      image: "https://images.unsplash.com/photo-1570077297047-72d3fde57cb5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      top: '40%',
      left: '90%',
    },
  ];

  return (
    <div className="container w-full h-full bg-white">
      <div className="gallery w-full h-[calc(100vh-60px)] relative">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="img w-[75px] overflow-hidden absolute m-5"
          >
            <img className="w-full h-full object-cover" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

