import React from "react";
import heroImg from "../../assets/heroImg.jpg";

const HeroImage = () => {
  return (
    <section className="left-1/2 top-0 z-[90] hidden max-h-[600px] w-1/2 max-w-[400px] overflow-hidden rounded-br-3xl bg-slate-600 sm:flex lg:max-h-[600px] lg:max-w-[600px] -translate-y-20">
      <img
        src={heroImg}
        alt="heroImg"
        width={"500"}
        height={"600"}
        className="h-full w-full object-cover"
      />
    </section>
  );
};

export default HeroImage;
