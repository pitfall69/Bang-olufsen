import React, { useState, useCallback } from "react";
import { MdArrowOutward } from "react-icons/md";
import ShowProduct from "./ShowProduct";

const Products = ({ Productsdata }) => {
  const [openProduct, setopenProduct] = useState(false);
  const [showproductdata, setshowproductdata] = useState("");

  const handleProductClick = useCallback((product) => {
    setshowproductdata(product);
    setopenProduct(true);
  }, []);

  return (
    <div className="flex flex-col justify-between px-2 relative bg-[#FFF9F1] items-center gap-2">
      <ShowProduct
        setopenProduct={setopenProduct}
        showproductdata={showproductdata}
        openProduct={openProduct}
      />
      <Content1
        setshowproductdata={handleProductClick}
        i1={Productsdata[0]}
        i2={Productsdata[1]}
        i3={Productsdata[2]}
      />
      <Content
        setshowproductdata={handleProductClick}
        height="h-[80vh]"
        items={[Productsdata[3]]}
      />
      <Content
        setshowproductdata={handleProductClick}
        items={[Productsdata[4], Productsdata[5]]}
      />
      <Content
        setshowproductdata={handleProductClick}
        items={[Productsdata[6], Productsdata[7], Productsdata[8]]}
      />
    </div>
  );
};

const Content = React.memo(({ items, height, setshowproductdata }) => {
  return (
    <div className={`md:flex gap-2 w-full max-md:h-full relative ${height || "h-screen"}`}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setshowproductdata(item)}
          className="pb-2 md:mb-0 cursor-pointer w-full relative md:h-full"
        >
          <img className="h-full w-full object-cover" src={item.productImage} alt={item.title} />
          <div className="about text-white absolute bottom-4 w-[90%] left-4 font-Secondary flex justify-between items-end">
            <div>
              <h1 className="md:text-3xl text-xl max-sm:text-sm">{item.title}</h1>
              <h2 className="md:text-xl text-sm max-sm:text-xs">{item.des}</h2>
            </div>
            <ShopNowBtn />
          </div>
        </div>
      ))}
    </div>
  );
});

const Content1 = React.memo(({ i1, i2, i3, setshowproductdata }) => {
  const handleClick = useCallback((item) => {
    setshowproductdata(item);
  }, [setshowproductdata]);

  return (
    <div className="h-screen w-full flex max-md:flex-col gap-2">
      <div className="left h-full cursor-pointer w-full md:w-[70%] relative">
        <img
          onClick={() => handleClick(i1)}
          className="w-full h-full object-cover"
          src={i1.productImage}
          alt={i1.title}
        />
        <div className="about absolute bottom-4 w-[95%] text-white left-4 font-Secondary flex justify-between items-end">
          <div>
            <h1 className="text-3xl max-sm:text-sm">{i1.title}</h1>
            <h2 className="text-xl max-sm:text-xs">{i1.des}</h2>
          </div>
          <ShopNowBtn />
        </div>
      </div>
      <div className="right md:h-full h-[50vh] w-full md:w-[30%] gap-2 pb-2 flex md:flex-col">
        {[i2, i3].map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="cursor-pointer h-full md:h-1/2 max-md:w-1/2"
          >
            <img className="w-full h-full object-cover" src={item.productImage} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
});

const ShopNowBtn = React.memo(() => {
  return (
    <div className="button">
      <button className="font-Secondary text-xl max-md:text-sm max-sm:text-xs flex items-center gap-2">
        Shop Now <MdArrowOutward />
      </button>
    </div>
  );
});

export default Products;
