import React from "react";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import ShopNowBtn from "./ShopNowBtn";

const contactDetails = [
  { type: "Email", value: "bangandolufsen.com" },
  { type: "Phone", value: "+852 800 906672" },
];

const socialLinks = [
  { name: "youtube", url: "https://youtube.com" },
  { name: "twitter", url: "https://twitter.com" },
  { name: "facebook", url: "https://facebook.com" },
  { name: "instagram", url: "https://instagram.com" },
  { name: "pinterest", url: "https://pinterest.com" },
];

const services = ["Speakers", "Headphones", "Television", "World of B&O"];

const Footer = () => {
  return (
    <div>
      <div className="footer-main w-full h-[40vh] max-md:h-[30vh] flex flex-col gap-3 items-center justify-center bg-zinc-200">
        <h3 className="text-sm font-primary text-black font-bold">
          EXPLORE THE HOUSE OF BANG & OLUFSEN
        </h3>
        <h2 className="font-Secondary text-5xl max-md:text-sm py-3 max-md:py-0 text-center text-black md:text-lg">
          Join our global community for exclusive <br /> benefits and news about
        </h2>
        <Button
          text={"Join us"}
          customclass={`w-fit bg-[#000] text-white md:text-xs md:px-5 max-md:text-xs max-md:px-4 `}
          circ={"bg-white "}
          p={"group-hover:text-black"}
        />
      </div>
      <div
        className="relative  max-xl:h-[60vh] max-lg:h-[60vh] max-sm:h-[80vh]  bg-black xl:h-[70vh]  "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0  w-full text-black px-6  max-lg:h-[56%] max-xl:h-[50%]  max-sm:h-[75%]   ">
          <Logo />
          <div className=" max-lg:pt-5 pt-3 flex flex-wrap max-lg:w-full max-sm:my-6 justify-between   ">
            <div className="first-col w-full  xl:w-[40%] max-xl:w-full mb-8  ">
              <h1 className=" max-md:text-4xl  text-5xl max-sm:text-xl font-[500] md:mb-5 mb-2 text-white">
                We would love to hear from you.
              </h1>
              <p className="text-gray-500 max-md:text-xl text-2xl max-sm:text-sm md:mb-6 mb-4 ">
                Feel free to reach out if you want to collaborate with us, or
                simply have a chat.
              </p>
              <button className="bg-white max-md:text-sm text-lg text-black px-4 md:px-6 py-2 rounded-full md:mb-6 mb-4 max-sm:text-xs ">
                Become a Partner &rarr;
              </button>

              <p className="text-gray-500 md:mb-3 mb-2 ">
                Don't like the forms? Drop us a line via email.
              </p>
              <a className=" font-bold text-white " href="#">
                bangandolufsen.com
              </a>
            </div>
            <div className="right w-full xl:w-[60%]  max-xl:w-full h-full flex md:flex-wrap max-md:gap-5 justify-between md:pl-16 ">
              <div className="contact w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="md:text-xl text-sm text-white font-semibold mb-4">
                  Contact us
                </h3>
                <ul className="text-gray-500">
                  {contactDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="mb-2 inline-block max-md:text-sm"
                    >
                      {detail.type === "Email" ? (
                        <a href={`${detail.value}`} className="">
                          <ShopNowBtn text={detail.value} />
                        </a>
                      ) : (
                        <a
                          href={`${detail.value}`}
                          className="hover:underline "
                        >
                          <ShopNowBtn text={detail.value} />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="follow w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="md:text-xl text-sm  text-white  font-semibold mb-4">
                  Follow us
                </h3>
                <ul className="text-gray-500">
                  {socialLinks.map((link, index) => (
                    <li key={index} className="mb-2 max-md:text-sm">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="services  w-full md:w-1/4 mb-6 md:mb-0">
                <h3 className="md:text-xl text-sm  text-white  font-semibold mb-4">
                  Services
                </h3>
                <ul className="text-gray-500">
                  {services.map((service, index) => (
                    <li key={index} className="mb-2  max-md:text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col justify-between items-center max-md:py-6  pt-5 mb-3 max-md:text-sm  max-md:gap-2 ">
            <p className="text-gray-500 md:tracking-wide max-md:text-center">
              &copy;2024. All rights reserved.
              <a href="/privacy-policy" className="hover:underline md:pl-2  ">
                • Privacy Policy
              </a>
            </p>
            <a
              href="#top"
              className="ml-4 text-gray-600 hover:underline max-md:text-center "
            >
              Back to the top &uarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
