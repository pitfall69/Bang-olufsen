import React from "react";
import Inner from "../Components/latouts/Inner";
import Products from "../Components/Products";
const Speakers = () => {
  return (
    <Inner>
      <div className="w-full bg-red-500">
        <div className="h-screen w-full bg-zinc-800"></div>
        <Products />
        <div className="h-screen w-full bg-zinc-800"></div>
      </div>
    </Inner>
  );
};

export default Speakers;
