import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-10 py-16 md:px-16 lg:px-20">
      <section className="flex w-full flex-col items-start justify-center gap-4 sm:w-1/2">
        <h1 className="text-5xl font-bold leading-[1.2] lg:text-7xl lg:leading-[1.3]">
          EVERY PET DESERVES A HOME
        </h1>
        <p className="w-3/4 lg:text-lg">
          Thousands of rescued pets need a proper home and a second chance.
        </p>
        <Button>ADOPT NOW</Button>
      </section>
    </div>
  );
};

export default Hero;
