

import React from 'react'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Button from "../Components/Button"
import TextAnimation from './TextAnimation';

const Wbo = () => {
 const projects = [
        {
          title: "Art",
          subtitle:"KRESTEN BJØRN KRAB-BJERRE, CREATIVE DIRECTOR",
          description: "We don’t work from technology. We always work from the idea.”Creative Director of Design, Kresten Bjørn Krab-Bjerre, tells us how human experience always guides the development of new Bang & Olufsen products.",
          src: "/src/assets/images/WorldOFBnO/WoB3.webp",
        },
        {
          title: "Music",
          subtitle:"LIVE FROM THE 10TH ARRONDISSEMENT",
          description: "Music in its wildest form. Crafted on the spot. Right in front of you.Settle in with Bang & Olufsen and Jammcard to enjoy an exclusive improv concert at an intimate venue in Paris. Four groundbreaking artists. 60 minutes of yet-to-be-heard music.",
          src: "https://images.ctfassets.net/8cd2csgvqd3m/7CrqV1h5HtmVhgClCTJ2Mh/ec1c7c76fddb342fac2fa41f5dacde0d/JJ_mosaic_1.jpg?q=90&fm=webp&w=1440&h=1440&fit=fill",

        },
        {
          title: "Culture",
          subtitle:"AT MILAN FERRARI FLAGSHIP STORE",
          description: "Bang & Olufsen and Ferrari hosted a celebration event on Tuesday, the 29 of August at the Ferrari Flagship Store in the heart of Milan. Guests were offered an exclusive first look at the newly launched product collection which was crafted in Bang & Olufsen HQ in Struer, Denmark, and were ablet to enjoy a motorsport exhibition as well.",
          src: "/src/assets/images/WorldOFBnO/WoB7.webp",

        },
        {
          title: "Living",
          subtitle:"SPEAKERS TO SUIT YOUR SPACE",
          description: "Sound moves you. The right music can instantly elevate your mood, and the right home speaker means you can enjoy those moments of magic with more depth and detail. Our unrivalled audio technology means your music sounds better in your space.",
          src: "/src/assets/images/WorldOFBnO/WoB16.webp",

        },
        {
          title: "timelessness",
          subtitle:"THE BEOSYSTEMS",
          description: "Bang & Olufsen is expanding its Recreated Classics Program with the launch of Beosystems – a limited edition music system that transcends time by bridging the gap between one of our iconic designs from 1972 and today’s cutting-edge digital technology. ",
         src:"/src/assets/images/WorldOFBnO/WoB11.webp"
        }
      ]
      const container = useRef(null);
      const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })
  return (
    <div ref={container} className={`relative bg-[#000]`}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div>
  )
}
export default Wbo



const Card = ({i, title, description, src, subtitle , progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={`h-screen  flex flex-col items-center justify-center sticky top-[0px]`}>
      <motion.div  
        style={{backgroundColor: "#ECDFD6", scale, top:`calc(-5vh + ${i * 30}px)`}} 
        className={`flex flex-col relative top-[-25%] h-[70vh] max-lg:w-[90%] w-[70%] p-[50px] origin-top max-sm:p-[20px]`}
      >
        <h2 className='text-center m-0 text-3xl font-primary uppercase'>{title}</h2>
        <div className={`flex max-lg:flex-col w-full mt-[50px] gap-[50px] max-lg:gap-10 `}>
          <div className={`w-[40%] max-lg:w-full`}>
            <h3 className='text-sm font-primary pb-5 max-lg:pb-2'>{subtitle}</h3>
            <p className='text-lg max-lg:text-sm leading-tight font-Secondary pb-5'>{description}</p>
            <Button text={'View More'} />
          </div>
          <div className={`w-[55%] max-lg:w-full h-full overflow-hidden`}>
            <motion.div
              className={`w-full h-full  overflow-hidden`}
              style={{scale: imageScale}}
            >
              <img
                className='object-cover h-[45vh] max-lg:h-[30vh] max-sm:h-[28vh] w-full'
                src={src}
                alt="image" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}