import React, { useState } from "react";
import { useReviews } from "../hooks/useReviews";
import CarouselItem from "./reviews/CarouselItem";
import Carousel from "./reviews/Carousel";

const Reviews = () => {
  const reviews = useReviews();
  const [isVisible, setIsVisible] = useState(0);

  return (
    <div className="relative flex h-[38rem] w-screen items-center bg-white">
      <div className="absolute left-0 h-full w-1/2 bg-black sm:w-1/4" />

      <Carousel>
        {reviews.map((review, id) => (
          <CarouselItem
            key={id}
            review={review}
            id={id}
            isVisible={isVisible}
          />
        ))}
      </Carousel>

      <div className="absolute bottom-4 lg:bottom-8 left-[55%] z-20 flex items-center justify-center text-lg lg:text-2xl lg:left-[75%] font-bold">
        <button onClick={() => setIsVisible(0)}>01</button>
        <span
          className={`mx-2 flex h-[2px] bg-black transition-all duration-300 ease-in-out ${isVisible === 0 ? "w-10" : "w-0"}`}
        />
        <button onClick={() => setIsVisible(1)}>02</button>
        <span
          className={`mx-2 flex h-[2px] bg-black transition-all duration-300 ease-in-out ${isVisible === 1 || isVisible === 2 ? "w-10" : "w-0"}`}
        />
        <button onClick={() => setIsVisible(2)}>03</button>
      </div>
    </div>
  );
};

export default Reviews;
