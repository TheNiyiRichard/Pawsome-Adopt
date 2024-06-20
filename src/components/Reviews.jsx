import React, { useState } from "react";
import { useReviews } from "../hooks/useReviews";
import CarouselItem from "./reviews/CarouselItem";
import Carousel from "./reviews/Carousel";

const Reviews = () => {
  const reviews = useReviews();
  const [isVisible, setIsVisible] = useState(0);

  return (
    <div className="relative flex h-[42rem] sm:h-[38rem] w-screen items-center bg-white">
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

      <span className="absolute bottom-10 left-[55%] z-20 flex items-center justify-center text-lg font-bold lg:bottom-16 lg:left-[75%] lg:text-2xl text-black/70">
        Our Reviews
      </span>

      <div className="absolute bottom-4 left-[55%] z-20 flex items-center justify-center text-lg font-bold lg:bottom-8 lg:left-[75%] lg:text-2xl">
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
