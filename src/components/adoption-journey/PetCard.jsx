import React from "react";

const PetCard = ({ type, img, name, age,status }) => {
  const statusColor = status === 'Available' ? 'text-green-500' : 'text-red-500';
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
        <section className="flex w-full flex-col gap-1">
          <h3 className="text-xl font-bold">{name}</h3>
         
        <div className="flex w-full justify-between items-center">
          <p className="text-sm sopacity-70">Age - {age} years old</p>
          <p className={`text-sm opacity-70 ${statusColor}`}>{status}</p>
        </div>
      
        </section>
      </div>
    </div>
  );
};

export default PetCard;
