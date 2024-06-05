// import React, { useEffect } from "react";
// import { useState, useRef } from "react";
// import ReactPlayer from "react-player";
// const ImageVideoGallary = () => {
//   const videos = [
//     {
//       id: "1-0",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20184664/20184664-sd_640_360_30fps.mp4",
//       videoName: "jskfdjasdfklhjae;",
//       previewImage: "",
//     },
//     {
//       id: "1-1",
//       videoUrl:
//         "https://videos.pexels.com/video-files/7125759/7125759-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "1-2",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20315562/20315562-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "1-3",
//       videoUrl:
//         "https://videos.pexels.com/video-files/19247660/19247660-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "2-0",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20317587/20317587-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "2-1",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20433217/20433217-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "2-2",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20471158/20471158-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "3-0",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20378581/20378581-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "3-1",
//       videoUrl:
//         "https://videos.pexels.com/video-files/20532935/20532935-sd_640_360_24fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "3-2",
//       videoUrl:
//         "https://videos.pexels.com/video-files/9851047/9851047-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//     {
//       id: "3-3",
//       videoUrl:
//         "https://videos.pexels.com/video-files/9953721/9953721-sd_640_360_30fps.mp4",
//       videoName: "",
//       previewImage: "",
//     },
//   ];

//   const GalleryRef = useRef();
//   const [items, setitems] = useState([]);
//   console.log(items);
//   useEffect(() => {
//     const generateItems = () => {
//       const rows = [
//         { id: 1, count: 4 },
//         { id: 2, count: 3 },
//         { id: 3, count: 4 },
//       ];

//       const newItems = rows.map((row, index) =>
//         Array.from({ length: row.count }, (_, index) => {
//           const itemId = `${row.id}-${index}`;
//           const video = videos.find((v) => v.id === itemId);
//           return {
//             id: itemId,
//             rowId: row.id,
//             video: video,
//           };
//         })
//       );

//       setitems(newItems);
//     };

//     generateItems();

//     const handleMouseMove = (events) => {
//       console.log(events);
//       const { clientX, clientY , currentTarget } = events;
//       console.log(clientX);
//       const { width, height } = currentTarget.getBoundingClientRect();
//       const centerX = width / 2;
//       const centerY = height / 2;

//       const MovementSenstivity = .5;
//       const deltaX = (centerX - clientX) / MovementSenstivity;
//       const deltaY = (centerY - clientY) / MovementSenstivity;

//       GalleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
//     };

//     const container = document.querySelector(".container");
//     container.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="container w-full top-[50%] transition-all over duration-100 relative bg-white">
//       <div
//         className="gallery w-[150vw] transition-transform duration-[2s] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between p-5"
//         ref={GalleryRef}
//       >
//         {items.map((row, index) => (
//           <div
//             key={`row-${index}`}
//             className="row flex px-40 justify-between w-full"
//           >
//             {row.map((item) => (
//               <div
//                 className="item relative w-[25vw] h-[300px] overflow-hidden"
//                 key={item.id}
//               >
//                 <div className="preview-img absolute top-0 left-0 w-full h-full z-[1]">
//                   <img
//                     className="w-full h-full object-cover opacity-100 transition-all duration-300"
//                     src={item.video.previewImage}
//                     alt={item.video.videoName}
//                   />
//                 </div>
//                 <p className="videoName absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl text-white opacity-0 transition-all duration-200 z-[2] pointer-events-none">
//                   {item.videoName}
//                 </p>
//                 <div className="video-wrapper absolute top-0 left-0  w-full h-full">
//                   {item.video && (
//                     <div className="opacity-0 h-full w-full transition-all duration-500">
//                       <ReactPlayer
//                         url={item.video.videoUrl}
//                         width={"100%"}
//                         height={"100%"}
//                         controls={false}
//                         playing
//                         muted
//                         loop={true}
//                         autoPlay={true}
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageVideoGallary;

// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// const ImageVideoGallary = () => {
//   useEffect(() => {
//     const slides = gsap.utils.toArray(".slide");
//     const activeSlideImages = gsap.utils.toArray(".active-slide img");

//     function getInitialTranslateZ(slide) {
//       const style = window.getComputedStyle(slide);
//       const matrix = style.transform.match(/matrix3d\((.+)\)/);
//       if (matrix) {
//         const values = matrix[1].split(", ");
//         return parseFloat(values[14] || 0);
//       }
//       return 0;
//     }

//     function mapRange(value, inMin, inMax, outMin, OutMax) {
//       return ((value - inMin) * (OutMax - outMin)) / (inMax - inMin) + outMin;
//     }

//     slides.forEach((slide, index) => {
//       const initialZ = getInitialTranslateZ(slide);
//       ScrollTrigger.create({
//         trigger: ".container",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           const zIncrement = progress * 22500;
//           const currentZ = initialZ + zIncrement;
//           let opacity;
//           if (currentZ > -2500) {
//             opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
//           } else {
//             opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
//           }

//           slide.styles.opacity = opacity;
//           slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

//           if(currentZ < 100){
//             gsap.to(activeSlideImages[index], 1.5,{
//               opacity:1,
//               ease:"power3.out"
//             })
//             }
//             else{
//               gsap.to(activeSlideImages[index],{
//                 opacity:0,
//                 ease:"power3.out"
//               })
//           }
//         },
//       });
//     });
//   }, []);
//   return (
//     <div className="container">
//       <div className="active-slider">
//         <img
//           src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715704698525-6581ceb2d32f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715852637581-0e09305ec8e1?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715358811302-e8bbdc284ace?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1716179276303-3869febaa84a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715937524587-1ef54d432e58?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715936745853-2fbed4fb33ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715645943748-a7cf8a81f1ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715646527387-2fb6667132fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//         <img
//           src="https://images.unsplash.com/photo-1715282196638-773cc726952c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//         />
//       </div>
//       <div className="slider">
//         <div className="slide" id="slide-1">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-2">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-3">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-4">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-5">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-6">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-7">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-8">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-9">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="slide" id="slide-10">
//           <div className="slide-copy">
//             <p>djkcflwdwcfjdw.</p>
//             <p id="imdex"> ES lodekdlklkd</p>
//           </div>
//           <div className="slide-img">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1695084221958-079096c96e05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageVideoGallary;

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImageVideoGallery = () => {
  const sliderdata = [
    {
      title: "Make it your's",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/6dBJ4YOOI0MtYF6DyyPVHb/3bc861cfbf4f20da42a216c10c65426b/a_detail_of_bl50_bespoke_.png?q=85&fm=webp&w=480&h=718&fit=fill",
    },
    {
      title: "Art of the A9",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/41mqUSxDjKwwITRSKAmRXD/982b183035422db82c33824755a944a4/Quote_background.png?q=85&fm=webp&w=480&h=480&fit=fill",
    },
    {
      title: "The designer of the B",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/72rbKQ2l6EHHzj34QFz4EW/9668b2c95668d49924a1feb68c60b478/GamFratesi_-_Hero_-_Homepage.png?q=85&fm=webp&w=480&h=480&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/23TmNGD4yEHkT2vo2PDT8m/babee61ed9f1d8b60e96ae2048d62be5/Beoplay_A9_Shavonne_0000_16x9.png?q=85&fm=webp&w=480&h=718&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2jXETtaNpOmlWcqaiD9WZ7/f08dcf3fe257ff305976bbbcc935518c/Bang_and_Olufsen_Sound_Bar_Berlin_-15.jpg?q=85&fm=webp&w=480&h=718&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2vT52kZk9sjZPs3IUhpynw/bf6ac45ea309a12e789d980857c9f322/BH-1.jpg?q=85&fm=webp&w=480&h=480&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/5wyooEH0Anx7p6Ix0SECW9/b7ee150ff7d435f07a7eb320e18007f3/Britta_portrait.jpg?q=85&fm=webp&w=480&h=718&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/4fxPSzDq19ug3lWUKAToLM/f59eceaf7d151aef486e8822216a489e/Kresten_IC_1.jpg?q=85&fm=webp&w=480&h=480&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/6wBf3l2vuB4ZFKymtDndFn/e82f77ed9c3e9e98b8b1e0823f73343f/A9_Portrait.jpg?q=85&fm=webp&w=480&h=718&fit=fill",
    },
    {
      title: "kdjflbvhrsdg,",
      Image:
        "https://images.ctfassets.net/8cd2csgvqd3m/2swKCGkBhuBPfm1QggzGto/0c9d747859f9b7295ab55d9efa32277e/DesignGroup-2.jpg?q=85&fm=webp&w=480&h=718&fit=fill",
    },
  ];
  useEffect(() => {
    const slides = gsap.utils.toArray(".slide");
    const activeSlideImages = gsap.utils.toArray(".active-slider img");

    function getInitialTranslateZ(slide) {
      const style = window.getComputedStyle(slide);
      const matrix = style.transform.match(/matrix3d\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[14] || 0);
      }
      return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) => {
      const initialZ = getInitialTranslateZ(slide);
      ScrollTrigger.create({
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
        onUpdate: (self) => {
          console.log(self.progress);
          const progress = self.progress;
          const zIncrement = progress * 22500;
          const currentZ = initialZ + zIncrement;
          let opacity;
          if (currentZ > -2500) {
            opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
          } else {
            opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
          }

          slide.style.opacity = opacity;
          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;
          if (currentZ < 100) {
            gsap.to(activeSlideImages[index], 5.5, {
              opacity: 1,
              ease: "power3.out",
            });
          } else {
            gsap.to(activeSlideImages[index], 5, {
              opacity: 0,
              ease: "power3.out",
            });
          }
        },
      });
    });
  }, []);

  return (
    <div className="w-full ">
      <div className="container">
        <div className="active-slider">
         {sliderdata.map((item,index)=>(
          <img src={item.Image}/>
         ))}
        </div>
        <div className="slider">
         {sliderdata.map((item,index)=>(
           <div className={`slide max-sm:h-[300px] max-sm:w-[250px] max-sm:${index+1 % 2 === 1 && "left-[15%]"} max-sm:${index+1 % 2 === 0 && "left-[80%]"}`} id={`slide-${index+1}`}>
           <div className="slide-copy">
             <p>{index+1}</p>
             <p id="index">{item.title}</p>
           </div>
           <div className="slide-img">
             <img
               src={item.Image}
               alt=""
             />   
           </div>
         </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default ImageVideoGallery;
