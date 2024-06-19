import React from "react";

const Carousel = ({ children }) => {
  return (
    <div className="z-20 flex w-[300%] items-center justify-around">
      {children}
    </div>
  );
};

export default Carousel;
