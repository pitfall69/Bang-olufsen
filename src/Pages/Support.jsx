import Inner from "../Components/latouts/Inner";
import { IoArrowForwardSharp } from "react-icons/io5";
import { RiChatSmile2Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoHome } from "react-icons/go";


const supportData = [
  {
    head: "Register your Product",
    center: "REGISTER PRODUCT",
    img: "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_register_product.jpg",
  },
  {
    head: "Replace & repair",
    center: "WARRANTY SERVICE",
    img: "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_warranty_service.jpg",
  },
  {
    head: "Track warranty request",
    center: "TRACK STATUS",
    img: "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_track_repair.jpg",
  },
  {
    head: "Return online order",
    center: "RETURN ORDER",
    img: "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_return_order.jpg",
  },
];

const cardData = [
  {
    icon: <RiChatSmile2Line />,
    title: "Chat to Sales",
    para: "Speak to our friendly team.",
    last: "Chat us ",
  },
  {
    icon: <IoMdHeartEmpty />,
    title: "Contact Customer Care",
    para: "We are ready to assist you.",
    last: "Contact Us",
  },
  {
    icon: <HiOutlineLocationMarker />,
    title: "Find our Services",
    para: "Visit our office HQ.",
    last: "Visit Us",
  },
  {
    icon: <GoHome />,
    title: "Contact Head Office",
    para: "Reach out our Head Office",
    last: "+45 96 84 11 22",
  },
];

const Card = ({ icon, title, para, last }) => (
  <div className="cards w-[45%] border border-black flex flex-col justify-center pb-12">
    <div className="withicon  m-3 p-4 text-3xl  border-black flex items-center gap-4">
      {icon}
      <h1 className="text-xl font-Secondary border-b-2 border-black">{title}</h1>
    </div>
    <p className="text-2xl font-Secondary mt-3">{para}</p>
    {last && <h2 className="text-xl font-Secondary font-bold mt-3">{last}</h2>}
  </div>
);

const Support = () => {
  return (
    <Inner >
      <div className="relative w-full h-screen bg-black ">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 "
          src="https://dynl.mktgcdn.com/p/8pmWoyjluxoE5ulv0eIjyWlIxh3i0WlxfKDmi3etejU/2048x1536.jpg"
          alt="Background"
        />
        <div className="absolute top-1/2 left-1/2 w-full flex flex-col items-center justify-center text-center text-white transform -translate-x-1/2 -translate-y-1/2 gap-5">
          <h1 className="text-[5rem]">Bang & Olufsen Support</h1>
          <p className="w-[40vw]">
            Welcome to our Support Hub, your go-to for top-tier assistance at Bang & Olufsen. Our team is primed to swiftly address any queries or concerns you may have, ensuring your experience with our products is seamless. Trust us to make every interaction with Bang & Olufsen exceptional.
          </p>
        </div>
      </div>

      <div className="h-screen w-full  bg-white flex justify-center items-center">
        <div className="container h-[80%] w-full flex justify-center items-center ">
          <div className="c-left h-full w-[30%] flex flex-col items-center justify-between py-[10%]">
            <h1 className="text-5xl w-[80%] text-center font-Secondary">Ready to help you</h1>
            <h1 className="text-9xl font-Secondary">24/7</h1>
          </div>
          <div className="c-right w-[60%] h-full pt-6  ">
            <div className="cont gap-7 flex flex-wrap text-center">
            {cardData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[70vh] w-full flex">
        {supportData.map((item, index) => (
          <div
            key={index}
            className="relative w-1/4 h-full bg-cover bg-center text-white flex flex-col justify-between group"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-7">
              <h1 className="text-xl">{item.head}</h1>
            </div>
            <div className="relative z-10 p-7 mb-4 flex items-center gap-5 text-md transition-all group-hover:ml-9">
              {item.center}
              <IoArrowForwardSharp className="border rotate-[-45deg] size-5 rounded-full transition-all duration-500 group-hover:rotate-0 group-hover:bg-white group-hover:text-black" />
            </div>
          </div>
        ))}
      </div>
    </Inner>
  );
};
export default Support;
