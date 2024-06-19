import React from "react";

const CarouselItem = ({ review, id, isVisible }) => {
  return (
    <section
      key={id}
      className={`relative w-screen transition-all duration-300 ease-in-out ${isVisible === 1 ? "-translate-x-[100%]" : isVisible === 2 ? "-translate-x-[200%]" : ""}`}
    >
      <div className="flex flex-col items-center rounded-lg sm:flex-row">
        <span className="h-80 w-4/5 overflow-hidden rounded-t-2xl sm:rounded-none sm:pl-16 md:h-[28rem]">
          <img
            loading="lazy"
            src={review.img}
            alt={"review"}
            className="h-full w-full object-cover lg:max-w-[80%]"
          />
        </span>

        <section className="flex w-4/5 flex-col justify-end gap-1 rounded-b-2xl bg-white p-6 shadow-lg sm:justify-center sm:rounded-none sm:shadow-none md:gap-5 lg:-translate-x-12">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            {review.title}
          </h1>
          <p className="w-full font-bold leading-5 text-black/60 sm:w-5/6 md:text-lg md:leading-6">
            {review.description}
          </p>
        </section>
      </div>
    </section>
  );
};

export default CarouselItem;
