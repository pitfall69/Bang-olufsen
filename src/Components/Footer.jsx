import React from "react";
export default function Footer() {
  return (
    <div
      className="relative h-[75vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[75vh] w-full">
        <FooterContent />
      </div>
    </div>
  );
}

const FooterContent = () => {
  return (
    <div className="w-full text-white h-full px-[2%]">
      <div className="top-part h-[70%] py-14 flex max-sm:h-[90%] w-full">
        <div className="one w-[33.5%] h-full flex flex-col gap-20 border-r-[1px] border-zinc-500">
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
            <h4 className="mt-12">jdfhdkfdjkfldjkfhdjklkdjfd</h4>
          </div>
        </div>
        <div className=" two w-[33.5%] px-5 h-full flex flex-col gap-2 border-r-[1px] border-zinc-500">
          <h3 className="opacity-65 text-sm">From</h3>
          <h3>Copenhagen, Denmark, Strandgade 100, 1401</h3>
          <h3> 7600 Struer, Denmark</h3>
          <h3 className="opacity-65 text-sm">Mon-Fri: 09:00 AM to 06:00 PM</h3>
        </div>
        <div className="w-[33%] h-full "></div>
      </div>
      <div className="bottom-part h-[30%] flex items-center justify-center max-sm:h-[10%] text-center w-full border-t-[1px] border-zinc-500">
        <h1 className="text-[12rem] tracking-wider mt-2  font-[600] font-primary ">
          BANG & OLUFSEN
        </h1>
      </div>
    </div>
  );
};
