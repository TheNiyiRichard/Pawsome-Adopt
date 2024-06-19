import React from "react";
import { GoArrowRight } from "react-icons/go";

const PetCard = ({ type, img, name, age }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <div className="h-60 w-80 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          src={img}
          alt={name}
          width={"100%"}
          height={"100%"}
          className="h-full w-full object-cover duration-300 hover:scale-110"
        />
      </div>

      <div className="flex w-full items-start justify-between px-1">
        <section className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm opacity-70">Age- {age} years old</p>
        </section>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 opacity-50 duration-300 hover:opacity-100">
          <GoArrowRight className="p-[2px] text-3xl text-slate-900" />
        </div>
      </div>
    </div>
  );
};

export default PetCard;
