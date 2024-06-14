import { MdArrowOutward } from "react-icons/md";

const Products = ({ Productsdata }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-1">
      <Content1
        i1={Productsdata[0]}
        i2={Productsdata[1]}
        i3={Productsdata[2]}
      />
      <Content height={"h-[80vh]"} i={[Productsdata[3]]} />
      <Content i={[Productsdata[4], Productsdata[5]]} />
      <Content i={[Productsdata[6], Productsdata[7], Productsdata[8]]} />
    </div>
  );
};

const Content = ({ i , height}) => {
  return (
    <div className={`md:flex gap-1 w-full max-md:h-full
        relative ${height ? height : "h-screen"}`}>
      {i.map((item, index) => (
        <div
          key={index}
          className=" mb-1 md:mb-0 bg-red-500 w-full relative md:h-full"
        >
          <img
            className="h-full w-full object-cover"
            src={item.productImage}
            alt=""
          />
          <div className="about text-white absolute bottom-4 w-[90%] left-4 font-Secondary flex justify-between items-center">
            <div className="">
              <h1 className="md:text-3xl text-xl">{item.title}</h1>
              <h2 className="md:text-xl text-sm">{item.des}</h2>
            </div>
            <ShopNowBtn />
          </div>
        </div>
      ))}
    </div>
  );
};

const Content1 = ({ i1, i2, i3 }) => {
  return (
    <div className="md:h-[150vh] h-screen w-full flex max-md:flex-col gap-1">
      <div className="left h-full w-full md:w-[70%] relative">
        <img
          className="w-full h-full object-cover"
          src={i1.productImage}
          alt=""
        />
        <div className="about absolute bottom-4 w-[95%] text-white left-4 font-Secondary flex justify-between items-center">
          <div className="cont">
            <h1 className="text-3xl">{i1.title}</h1>
            <h2 className="text-xl">{i1.des}</h2>
          </div>
          <ShopNowBtn />
        </div>
      </div>
      <div className="right md:h-full h-[60vh] w-full md:w-[30%] gap-1 flex md:flex-col">
        <div className="rtop md:h-1/2 h-full max-md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={i2.productImage}
            alt=""
          />
        </div>
        <div className="overflow-hidden h-full md:h-1/2 max-md:w-[50%]">
          <img
            className="w-full h-full object-cover"
            src={i3.productImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const ShopNowBtn = () => {
  return (
    <div className="button">
      <button className="font-Secondary text-xl flex items-center gap-2">
        Shop Now <MdArrowOutward />
      </button>
    </div>
  );
};

export default Products;
