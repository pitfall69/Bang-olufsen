import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
export default function Footer() {
  return (
    <div
      className="relative h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[80vh] w-full">
        <FooterContent />
      </div>
    </div>
  );
}

const FooterContent = () => {
  return (
    <div className="w-full bg-[##141414] text-[#E5E5E5] bg-black h-full px-[2%]">
      <div className="top-part h-[60%] font-Secondary py-14 flex max-sm:h-[90%] w-full">
        <div className="one w-[33.5%]  h-full flex flex-col gap-20 border-r-[1px] border-zinc-700">
          <div className="brand flex flex-col gap-5">
            <h2 className="text-3xl">BANG & OLUFSEN</h2>
            <p className="text-sm w-[60%] opacity-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, sit odio? Sed, dolorum impedit?
            </p>
          </div>
          <div className="our-policy text-sm flex flex-col gap-2">
            <h4>Privacy Policy</h4>
            <h4>Customer Care</h4>
            <h4>Cookies Policy</h4>
            <h4 className="mt-12 opacity-60">jdfhdkfdjkfldjkfhdjklkdjfd</h4>
          </div>
        </div>
        <div className=" two w-[33%] px-5 h-full flex flex-col gap-2 border-r-[1px] border-zinc-700">
          <h3 className="opacity-60 text-sm">From</h3>
          <h3>Copenhagen, Denmark, Strandgade 100, 1401</h3>
          <h3> 7600 Struer, Denmark</h3>
          <h3 className="opacity-60 text-sm">Mon-Fri: 09:00 AM to 06:00 PM</h3>
        </div>
        <div className="third w-[33%]  h-full px-5 ">
          <h3>Contact</h3>
          <h3>8(800) 600-69-07</h3>
          <h3>Email</h3>
          <h3>abcd@gmail.com</h3>
          <div className="flex gap-3 mt-10 items-center ">
            <RiLinkedinFill className="h-12 p-2 w-12 border-[2px] border-zinc-800" />
            <TiSocialTwitter className="h-12 p-2 w-12 border-[2px] border-zinc-800"/>
            <FaFacebookF className="h-12 p-2 w-12 border-[2px] border-zinc-800"/>
            <AiFillInstagram className="h-12 p-2 w-12 border-[2px] border-zinc-800" />
            <SiYoutube className="h-12 p-2 w-12 border-[2px] border-zinc-800"/>
          </div>
          <div className="flex opacity-50 mt-[6rem] justify-between">
            <h3>©Copyright 2024 Bang & Olufsen Ltd.
           <br /> All Rights reserved.</h3>
            <h3>Designed by The SPIRIT'S</h3>
          </div>
        </div>
      </div>
      <div className="bottom-part h-[40%] flex items-center justify-center max-sm:h-[10%] text-center w-full border-t-[1px] border-zinc-700">
        <h1 className="text-[12rem] tracking-wider mt-2  font-[600] font-primary ">
          BANG & OLUFSEN
        </h1>
      </div>
    </div>
  );
};
