import React from "react";
import adoptdog from "../../assets/adopt-a-dog.png";
import Button from "../../components/ui/Button";

const AdoptAPet = () => {
  return (
    <section className="flex flex-col items-center justify-center p-1 pb-10 text-base">
      <h1 className="flex w-full translate-y-4 flex-col items-center justify-center gap-2 py-2 text-2xl font-bold text-orange-400 sm:text-3xl">
        Adopt A Pet
        <span className="h-[2px] w-full bg-orange-400"></span>
        <img
          loading="lazy"
          src={adoptdog}
          alt="dogs"
          width={150}
          height={150}
          className="-z-10 mb-8 mt-4 rounded-full"
        />
      </h1>

      <p className="text-center sm:w-3/4">
        Welcome to our pet adoption program! Adopting a pet is the best way to
        bring joy and companionship to your life
      </p>

      <>
        <h2 className="flex translate-y-4 flex-col items-center justify-center gap-2 py-2 text-xl font-bold text-orange-400">
          Benefits of Pet Adoption
        </h2>
        <ul className="flex flex-col items-center justify-center py-2">
          <li className="text-center">
            Provide a loving home to a pet in need
          </li>
          <li className="text-center">
            Experience the unconditional love of a pet
          </li>
          <li className="text-center">
            Create lasting memories and cherished moments
          </li>
        </ul>
      </>

      <>
        <h2 className="flex translate-y-4 flex-col items-center justify-center gap-2 py-2 text-xl font-bold text-orange-400">
          Adoption Process
        </h2>
        <ul className="flex flex-col items-center justify-center py-2">
          <li className="text-center">Fill out an adoption application</li>
          <li className="text-center">Meet potential pets in person </li>
          <li className="text-center">Complete the necessary paperwork </li>
        </ul>
      </>

      <>
        <h2 className="flex translate-y-4 flex-col items-center justify-center gap-2 py-2 text-xl font-bold text-orange-400">
          Responsibilities
        </h2>
        <ul className="flex flex-col items-center justify-center py-2 md:w-3/4">
          <li className="text-center">
            Adopting a pet comes woth responsibilities, including feeding,
            grooming, regular exercise and providing medical care.
          </li>
        </ul>
      </>

      <Button
        type="submit"
        className={
          "my-6 bg-gradient-to-tr from-orange-400 via-orange-400 via-40% to-pink-400"
        }
      >
        Find Your Perfect Pet
      </Button>
    </section>
  );
};

export default AdoptAPet;
