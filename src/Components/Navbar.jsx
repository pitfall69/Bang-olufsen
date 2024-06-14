import React, { useState, useEffect, useMemo, useCallback } from "react";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt4 } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import HoverAnim from "./latouts/HoverAnim";
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
              "https://static.dezeen.com/uploads/2020/03/layer-bang-olufsen-balance-speaker-design_dezeen_2364_col_12.jpg",
          },
          {
            categoryTitle: "Portable",
            categoryDescription: "BEOSOUND A1 2ND GEN",
            categoryImage:
              "https://cdn.mos.cms.futurecdn.net/XtTL8xyXXrSAiuSoTLnKFW.jpg",
          },
          {
            categoryTitle: "Home Audio",
            categoryDescription: "BEOSOUND BALANCE",
            categoryImage:
              "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/03/Beosound-Balance-2-920x609.jpg",
          },
          {
            categoryTitle: "Speaker Sets",
            categoryDescription: "BEOLAB 8",
            categoryImage:
              "https://bollostore.com/wp-content/uploads/2023/12/Untitled-design34.jpg",
          },
          {
            categoryTitle: "Speaker Accessories",
            categoryDescription: "BESOUND LEVEL WALL BRACKET",
            categoryImage:
              "https://www.mrporter.com/variants/images/1647597327922252/cu/w2000_q60.jpg",
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
              "https://i.pinimg.com/564x/17/ba/5f/17ba5f8986966c9cfd870c2877c56ad5.jpg",
          },
          {
            categoryTitle: "Over-Ear",
            categoryDescription: "BEOPLAY H95",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/5NDF4JIjP9Au8CIPvh4tBh/aba17042a2c92e70057645616dc6f5d5/Beoplay-H95-_-Beoplay-A9-4th-Gen.-0004-Sound-And-Vision-For-Your-Home-2000x2800px.jpg?q=90&w=1920&fit=fill&fm=webp",
          },
          {
            categoryTitle: "In-Ear",
            categoryDescription: "BEOPLAY EX FERRARI EDITION",
            categoryImage:
              "https://images.ctfassets.net/8cd2csgvqd3m/1ONawzyBPqAsQGm5bIPwaF/79100b4328ddb917a45f6dc1713e03a3/EX_Ferrari_HR.jpg?q=90&fm=webp&w=720",
          },
          {
            categoryTitle: "Headphone Accessories",
            categoryDescription: "CASE FOR BEOPLAY H95",
            categoryImage:
              "https://crewedesign.com/cdn/shop/files/CD.Bang.Rose.Top_1a0f8d99-b25b-4a84-a46a-5df5b649183b.jpg?v=1699586972",
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
      {
        title: "SUPPORT",
        path: "/support",
        data: [
          {
            categoryTitle: "Register your Product",
            categoryDescription: "REGISTER PRODUCT",
            categoryImage:
              "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_register_product.jpg",
          },
          {
            categoryTitle: "Replace & Repair",
            categoryDescription: "WARRANTY SERVICE",
            categoryImage:
              "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_warranty_service.jpg",
          },
          {
            categoryTitle: "Track Warranty Request",
            categoryDescription: "TRACK STATUS",
            categoryImage:
              "https://bangolufsenrmaskillgohel.blob.core.windows.net/zendesk-guide/bo_track_repair.jpg",
          },
          {
            categoryTitle: "Return online order",
            categoryDescription: "RETURN ORDER",
            categoryImage:
              "https://images.unsplash.com/photo-1543499459-d1460946bdc6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="navcontainer max-2xl:px-5 w-full px-20 h-[8vh] text-white mix-blend-difference fixed flex justify-between items-center z-[99] top-0">
      <Link to="/" className="logo-container w-[10rem] overflow-hidden">
        <img
          className="h-full object-fit"
          src="src/assets/images/logo.webp"
          alt="Logo"
        />
      </Link>
      <div
        className={`flex ${
          openNav ? "opacity-5" : "opacity-100"
        } text-sm items-center max-lg:hidden gap-[3vw]`}
      >
        {Navbardata.map((item, index) => {
          const NavItemWithUnderline = HoverAnim(() => (
            <div
              className="p-1 w-fit font-primary cursor-pointer"
              id={item.title}
              onClick={() => handleButtonClick(item)}
            >
              {item.title}
            </div>
          ));

          return <NavItemWithUnderline key={index} />;
        })}
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
        setNavLinkData={setNavLinkData}
        Navbardata={Navbardata}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Navbar;

const FullScreenNavbar = React.memo(
  ({ setOpenNav, openNav, navLinkData, Navbardata, handleButtonClick }) => {
    const data = navLinkData ? navLinkData.data : [];
    const [imageSrc, setImageSrc] = useState(null);
    const [imageDescription, setImageDescription] = useState(null);

    useEffect(() => {
      if (data && data.length > 0) {
        setImageSrc(data[0].categoryImage);
        console.log(navLinkData);
        console.log(data);
        setImageDescription(data[0].categoryDescription);
      }
    }, [data]);

    return (
      <div
        className={`full-screenNavbar ${
          openNav ? "w-[65%] max-xl:w-[100%] px-[5%] max-sm:px-[8%] " : "w-0"
        } left-0 h-screen duration-[1.2s] overflow-hidden top-0 flex flex-col gap-20 py-10 fixed bg-black`}
      >
        <div
          className={` top-part-fullscreen-Nav ${
            openNav ? "opacity-100 delay-700" : "opacity-0 duration-500"
          }  h-[10vh] flex justify-between items-center`}
        >
          <div className=" h-[8vh] max-sm:hidden flex gap-[.8vw] text-[.8rem] font-primary items-center w-full ">
            {Navbardata.map((item, index) => {
              const NavItemWithUnderline = HoverAnim(() => (
                <div
                  className="p-1 w-fit cursor-pointer"
                  key={index}
                  id={item.title}
                  onClick={() => handleButtonClick(item)}
                >
                  {item.title}
                </div>
              ))
              return(<NavItemWithUnderline key={index}/>)
            })}
          </div>
          <div className="logo-container sm:hidden">
            <img
              className="w-[10rem]"
              src="src/assets/images/logo.webp"
              alt="Logo"
            />
          </div>
          <NavClosingButton setOpenNav={setOpenNav} openNav={openNav} />
        </div>
        <div
          className={`bottom-part-fullscreen-Nav ${
            openNav ? "opacity-100 delay-700" : "opacity-0 duration-500"
          }  h-full w-full flex justify-between`}
        >
          <div
            className={`Nav-routes flex flex-col gap-[3%] max-sm:hidden text-white`}
          >
            <Link
              to={navLinkData?.path}
              className="text-sm font-primary uppercase pb-5"
            >
              {navLinkData?.title !== "WORLD OF B&O" &&
              navLinkData?.title !== "SUPPORT"
                ? "shop for "
                : ""}
              {navLinkData?.title}
            </Link>
            {data &&
              data.map((item, index) => (
                <NavLink
                  to={navLinkData?.path}
                  key={index}
                  className={` text-[1.8rem] font-primary`}
                  onMouseEnter={() => {
                    setImageSrc(item.categoryImage);
                    setImageDescription(item.categoryDescription);
                  }}
                  onClick={() => setOpenNav((prev) => !prev)}
                >
                  {item.categoryTitle}
                </NavLink>
              ))}
          </div>
          <div className={`image-div max-sm:hidden  w-[45%] max-lg:w-[50%]`}>
            <img
              className="h-[60vh] w-full object-cover"
              src={imageSrc}
              alt="Category"
            />
            <p className="pt-4 uppercase  font-Secondary font-[500] tracking-wider ">
              {imageDescription}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:hidden text-xl font-primary capitalize">
            {Navbardata.map((item, index) => (
              <NavLink
                to={item.path}
                className="p-1 w-fit cursor-pointer"
                key={index}
                id={item.title}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

const NavClosingButton = React.memo(({ setOpenNav, openNav }) => {
  return (
    <div
      onClick={() => {
        setOpenNav(false);
      }}
      className={`h-5 ${openNav ? "opacity-1" : "opacity-0"}  cursor-pointer`}
    >
      <GrClose className="text-xl" />
    </div>
  );
});
