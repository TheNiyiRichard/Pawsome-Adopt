import React from "react";
import search from "../assets/search.png";
import paw from "../assets/paw.png";
import apple from "../assets/apple.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Search Pets",
      description: "Simply enter your city and start your search for pets",
      img: search,
    },
    {
      title: "Meet",
      description: "Schedule your appointment to meet the pet you love",
      img: paw,
    },
    {
      title: "Adopt",
      description: "Finally adopt the pet choose and take them home",
      img: apple,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6 bg-slate-100/50 px-10 py-12 md:px-16 lg:gap-10 lg:px-20">
      <h1 className="text-center text-2xl font-bold sm:text-3xl">
        How It Works?
      </h1>
      <section className="flex flex-wrap items-center justify-around gap-6 py-5 text-xs">
        {steps.map((instance, id) => (
          <div
            key={id}
            className="flex w-[40%] flex-col items-center gap-2 sm:w-1/4"
          >
            <span
              className={`flex h-10 w-10 flex-col items-center justify-center rounded-xl shadow-xl sm:h-16 sm:w-16 ${id === 0 ? "bg-purple-500 shadow-purple-500/30" : id === 1 ? "bg-cyan-300 shadow-cyan-500/30" : "bg-pink-300 shadow-pink-500/30"}`}
            >
              <img
                src={instance.img}
                alt={"search"}
                width={20}
                height={20}
                className="h-4 w-4 sm:h-8 sm:w-8"
              />
            </span>
            <h1 className="pt-3 text-base font-bold sm:text-lg">
              {instance.title}
            </h1>
            <p className="text-center text-black/80 sm:text-sm">
              {instance.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HowItWorks;
