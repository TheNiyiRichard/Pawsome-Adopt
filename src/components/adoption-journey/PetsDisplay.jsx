import React from "react";
import { usePets } from "../../hooks/usePets";
import PetCard from "./PetCard";

const PetsDisplay = ({ type }) => {
  const pets = usePets(type);

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-3">
      {pets.map((pet, i) => (
        <PetCard key={i} {...pet} />
      ))}
    </div>
  );
};

export default PetsDisplay;
