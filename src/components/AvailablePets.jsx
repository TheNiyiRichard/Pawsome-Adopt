import React, { useState } from "react";
import Button from "./ui/Button";
import PetsDisplay from "./adoption-journey/PetsDisplay";

const AvailablePets = () => {
  const pets = ["Dogs", "Cats", "Rabbits", "Birds"];
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-10 py-20 md:px-16 lg:gap-10 lg:px-20">
      <p className="text-center text-2xl font-bold sm:text-3xl">
        Pets Available for Adoption Nearby
      </p>

      <ul className="flex flex-wrap items-center gap-3">
        {pets.map((pet, i) => (
          <Button
            key={i}
            variant={isActive === i ? "" : "transparent"}
            onClick={() => setIsActive(i)}
          >
            {pet}
          </Button>
        ))}
      </ul>

      <PetsDisplay />
    </div>
  );
};

export default AvailablePets;
