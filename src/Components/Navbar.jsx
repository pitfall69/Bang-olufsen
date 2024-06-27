import React, { useState, useMemo, useCallback, useRef , useEffect} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import FullScreenNavbar from "../Components/FullScreenNavbar";
import NavLinkAnimation from "./NavLinkAnimation";
import Logo from "./Logo";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [navLinkData, setNavLinkData] = useState(null);
  const Navbardata = useMemo(
    () => [
      {
        title: "SPEAKERS",
        path: "/speakers",
        data: [
          {
            categoryTitle: "All Speakers",
            categoryDescription: "BEOSOUND A9",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505745/layer-bang-olufsen-balance-speaker-design_dezeen_2364_col_12_oe9fon.jpg",
          },
          {
            categoryTitle: "Portable",
            categoryDescription: "BEOSOUND A1 2ND GEN",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505828/XtTL8xyXXrSAiuSoTLnKFW_aqtfy4.jpg",
          },
          {
            categoryTitle: "Home Audio",
            categoryDescription: "BEOSOUND BALANCE",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719491447/BEOSOUND_BALANCE_pxebgf.webp",
          },
          {
            categoryTitle: "Speaker Sets",
            categoryDescription: "BEOLAB 8",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505988/Untitled-design34_bsckwq.jpg",
          },
          {
            categoryTitle: "Speaker Accessories",
            categoryDescription: "BESOUND LEVEL WALL BRACKET",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719505969/w2000_q60_icpz8j.jpg",
          },
        ],
      },
      {
        title: "HEADPHONES",
        path: "/headphones",
        data: [
          {
            categoryTitle: "All Headphones",
            categoryDescription: "BEOPLAY H9",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719506219/17ba5f8986966c9cfd870c2877c56ad5_me9okp.jpg",
          },
          {
            categoryTitle: "Over-Ear",
            categoryDescription: "BEOPLAY H95",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719506233/Beoplay-H95-_-Beoplay-A9-4th-Gen.-0004-Sound-And-Vision-For-Your-Home-2000x2800px_euz88b.webp",
          },
          {
            categoryTitle: "In-Ear",
            categoryDescription: "BEOPLAY EX FERRARI EDITION",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719506242/EX_Ferrari_HR_d8ojp5.webp",
          },
          {
            categoryTitle: "Headphone Accessories",
            categoryDescription: "CASE FOR BEOPLAY H95",
            categoryImage:
              "https://res.cloudinary.com/dtkyjnbvf/image/upload/v1719506251/CD.Bang.Rose.Top_1a0f8d99-b25b-4a84-a46a-5df5b649183b_hx6wf9.jpg",
          },
        ],
      },
      {
        title: "TELEVISION",
        path: "/television",
        data: [
          {
            categoryTitle: "All Television",
            categoryDescription: "BEOVISION HARMONY",
            categoryImage:
              "https://i.pinimg.com/564x/5e/36/42/5e3642898d2ff8862d2de3b522407b5e.jpg",
          },
          {
            categoryTitle: "Remote and Smart Home",
            categoryDescription: "BEOREMOTE HALO",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/7INQPqApUxn1cBocan7ZT8/e48d5c03f7c64551cbf9000f6c70a0c2/PA_Halo_Alu_Table_front.jpg?q=90&fm=webp&w=720",
          },
        ],
      },
      {
        title: "SOUNDBARS",
        path: "/soundbars",
        data: [
          {
            categoryTitle: "Stage Sounbars",
            categoryDescription: "BEOSOUND STAGE",
            categoryImage:
              "https://images.squarespace-cdn.com/content/v1/5b6799518f5130d3cc91dc22/1600401572844-V339S6NSVNNZH184P4U1/Stage_Bronze_GG2.jpg",
          },
          {
            categoryTitle: "Theatre Sounbars",
            categoryDescription: "BEOSOUND THEATRE",
            categoryImage:
              "https://i.pinimg.com/564x/94/07/38/9407381c4096d39fa3884a88d1f7a756.jpg",
          },
        ],
      },
      {
        title: "WORLD OF B&O",
        path: "/worldb&o",
        data: [
          {
            categoryTitle: "Art",
            categoryDescription: "BEOPLAY A9",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/6wBf3l2vuB4ZFKymtDndFn/e82f77ed9c3e9e98b8b1e0823f73343f/A9_Portrait.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
          },
          {
            categoryTitle: "Music",
            categoryDescription: "Intriducing a harmonius Fusion",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/3sJewp4W4vhZ7QHYBu1hmb/9770f0bde3b64d52b34076d979359319/Cercle_Hero.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
          },
          {
            categoryTitle: "Culture",
            categoryDescription: "At the mayfair flagship store",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/4nISV5C5VJVQ1fyH74PASL/46f7d6571e458cc94f7cca7b2b1b3459/Hero_outside.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
          },
          {
            categoryTitle: "Living",
            categoryDescription: "Interview with Caroline wozniacki",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/6zTOILiuwRx5OxENVpZbAV/85ef99ddf16a60d3126d4f88834e0e3e/Couple_square.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
          },
          {
            categoryTitle: "Timelessness",
            categoryDescription: "besound 9000",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/4IUWP2Lz7R0ThsXwRLKbNl/0366a0d97c33572cf7e2b0d9199d6090/Lifestyle_Beosystem9000c_0015_16x9.jpg?q=90&fm=webp&w=480&h=718&fit=fill",
          },
        ],
      },
    ],
    []
  );
  const handleButtonClick = useCallback((item) => {
    setNavLinkData(item);
    setOpenNav(true);
  }, []);

  return (
    <div className="navcontainer max-2xl:px-5 w-full px-20 h-[8vh] text-white fixed flex justify-between items-center z-[99] top-0">
      <Link to="/" className="logo-container w-[10rem] overflow-hidden">
        <Logo/>
      </Link>
      <div
        className={`flex ${
          openNav ? "opacity-5" : "opacity-100"
        } text-sm items-center max-lg:hidden gap-[3vw]`}
      >
        {Navbardata.map((item, index) => (
          <div
            key={index}
            className="p-1 w-fit font-primary cursor-pointer"
            onClick={() => handleButtonClick(item)}
          >
            <NavLinkAnimation text={item.title} />
          </div>
        ))}
      </div>
      <div className="menu-button-container lg:hidden">
        <HiMenuAlt4
          onClick={() => {
            setOpenNav((prev) => !prev);
            setNavLinkData(Navbardata[0]);
          }}
          className="text-xl"
        />
      </div>
      <FullScreenNavbar
        setOpenNav={setOpenNav}
        openNav={openNav}
        navLinkData={navLinkData}
        Navbardata={Navbardata}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Navbar;



