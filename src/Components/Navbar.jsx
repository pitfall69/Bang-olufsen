import React, { useState, useMemo, useCallback, useRef , useEffect} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FullScreenNavbar from "../Components/FullScreenNavbar";
import { useGSAP } from "@gsap/react";
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
    <div className="navcontainer max-2xl:px-5 w-full px-20 h-[8vh] text-white fixed flex justify-between items-center z-[99] top-0">
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

// const NavLinkAnimation = ({ text }) => {
//   const lineRef = useRef();
//   const { contextSafe } = useGSAP();
//   const handleMouseEnter = contextSafe(() => {
//     gsap.fromTo(
//       lineRef.current,
//       { width: "0%", left: "0%" },
//       { width: "100%", ease: "power2.out", duration: 0.5 }
//     );
//   });
//   const handleMouseLeave = contextSafe(() => {
//     gsap.fromTo(
//       lineRef.current,
//       { width: "100%", left: "0%" },
//       { width: "0%", left: "100%", ease: "power2.out" }
//     );
//   })
//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="relative overflow-hidden"
//     >
//       <h1>{text}</h1>
//       <div
//         ref={lineRef}
//         className="w-0 h-[1px] bg-white absolute bottom-0"
//       ></div>
//     </div>
//   );
// };




const NavLinkAnimation = ({ text }) => {
  const lineRef = useRef(null);
  const { contextSafe } = useGSAP();

  useEffect(() => {
    const line = lineRef.current;

    const handleMouseEnter = contextSafe(() => {
      gsap.fromTo(
        line,
        { width: "0%", left: "0%" },
        { width: "100%", ease: "power2.out", duration: 0.5 }
      );
    });

    const handleMouseLeave = contextSafe(() => {
      gsap.fromTo(
        line,
        { width: "100%", left: "0%" },
        { width: "0%", left: "100%", ease: "power2.out" }
      );
    });

    const container = line.parentElement;
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [contextSafe]);

  return (
    <div className="relative overflow-hidden">
      <h1>{text}</h1>
      <div
        ref={lineRef}
        className="w-0 h-[1px] bg-white absolute bottom-0"
      ></div>
    </div>
  );
};

