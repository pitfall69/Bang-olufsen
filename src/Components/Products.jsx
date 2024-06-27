import React, { useState, useCallback } from "react";
import ShopNowBtn from "../Components/ShopNowBtn";
import ShowProduct from "./ShowProduct";

const Products = ({ Productsdata , isfirstactive }) => {
  const [openProduct, setopenProduct] = useState(false);
  const [showproductdata, setshowproductdata] = useState("");

  const handleProductClick = useCallback((product) => {
    setshowproductdata(product);
    setopenProduct(true);
  }, []);
  return (
    <div
      className={`flex flex-col justify-between px-2 relative bg-[#FFF9F1] items-center `}
    >
      <ShowProduct
        setopenProduct={setopenProduct}
        showproductdata={showproductdata}
        openProduct={openProduct}
      />
      {Productsdata.length === 2 ? (
        <Content
        setshowproductdata={handleProductClick}
        items={[Productsdata[0], Productsdata[1]]}
      />
      ) : (
        <>
         
          { isfirstactive === "true" ? <Content
            setshowproductdata={handleProductClick}
            items={[Productsdata[1], Productsdata[2]]}
          /> :   (<Content1
          setshowproductdata={handleProductClick}
          i1={Productsdata[0]}
          i2={Productsdata[1]}
          i3={Productsdata[2]}
        />)}
          <Content
            setshowproductdata={handleProductClick}
            height="h-[90vh]"
            items={[Productsdata[3]]}
          />
          <Content
            setshowproductdata={handleProductClick}
            items={[Productsdata[4], Productsdata[5]]}
          />
          {Productsdata.length < 8 ? (
            <Content
              setshowproductdata={handleProductClick}
              items={[Productsdata[6], Productsdata[7]]}
            />
          ) : (
            <Content
              height="h-[80vh]"
              setshowproductdata={handleProductClick}
              items={[Productsdata[6], Productsdata[7], Productsdata[8]]}
            />
          )}
          {Productsdata.length > 9 && (
            <Content
              height="h-[80vh]"
              setshowproductdata={handleProductClick}
              items={[Productsdata[9], Productsdata[10]]}
            />
          )}
        </>
      )}
    </div>
  );
};

export const Content = React.memo(({ items, height, setshowproductdata }) => {
  return (
    <div
      className={`md:flex gap-2 w-full max-md:h-full relative ${
        height || "h-screen"
      }`}
    >
      {items.length > 0 && items.map((item, index) => (
        <div
          key={index}
          onClick={() => setshowproductdata(item)}
          className={`pb-2 md:mb-0 cursor-pointer max-lg:h-[60vh] overflow-hidden w-full relative md:h-full`}
        >
          <img
            className="h-full w-full object-cover"
            src={item && item?.productImage}
            alt={item?.title}
          />
          <div
            className={`about text-white absolute bottom-4 max-sm:w-[95%] ${
              items.length > 1 ? "left-[2%] w-[96%]" : "left-[1%] w-[98%]"
            } max-sm:left-[3%] font-Secondary flex justify-between items-end`}
          >
            <div>
              <h1 className=" text-xl max-sm:text-sm md:text-lg">
                {item?.title}
              </h1>
              <h2 className="md:text-sm text-sm max-sm:text-xs">{item?.des}</h2>
            </div>
            <ShopNowBtn />
          </div>
        </div>
      ))}
    </div>
  );
});

export const Content1 = React.memo(({ i1, i2, i3, setshowproductdata }) => {
  const handleClick = useCallback(
    (item) => {
      setshowproductdata(item);
    },
    [setshowproductdata]
  );

  return (
    <div className="h-screen w-full flex max-md:flex-col gap-2 overflow-hidden">
      <div className="left h-full cursor-pointer pb-2 max-sm:pb-0 w-full md:w-[70%] relative">
        <img
          onClick={() => handleClick(i1)}
          className="w-full h-full object-cover"
          src={i1.productImage}
          alt={i1.title}
        />
        <div className="about absolute bottom-4 w-[95%] text-white left-4 font-Secondary flex justify-between items-end">
          <div>
            <h1 className="text-3xl max-sm:text-sm md:text-lg sm:text-lg">{i1.title}</h1>
            <h2 className="text-xl sm:text-sm max-sm:text-xs md:text-sm">{i1.des}</h2>
          </div>
          <ShopNowBtn />
        </div>
      </div>
      <div className="right md:h-full h-[50vh] max-md:gap-2 w-full md:w-[30%] flex md:flex-col">
        {[i2, i3].map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="cursor-pointer relative overflow-hidden h-full pb-2 md:h-1/2 max-md:w-1/2"
          >
            <img
              className="w-full h-full object-cover"
              src={item.productImage}
              alt={item.title}
            />
            <div className="about absolute bottom-4 w-[95%] text-white left-4 font-Secondary flex justify-between items-end">
              <div>
                <h1 className="text-3xl max-sm:text-sm md:text-lg sm:text-lg">{item.title}</h1>
                <h2 className="text-xl max-sm:text-xs md:text-sm sm:text-sm">{item.des}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Products;
