import React from "react";
import dog from "../assets/pet-adoption-dog.png";
import syringe from "../assets/syringe.png";
import zoology from "../assets/zoology.png";
import heart from "../assets/heart.png";

const AdoptionJourney = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-6 py-16">
      <h1 className="text-center text-2xl font-bold sm:text-3xl">
        Your Pet Adoption Journey With Us
      </h1>
      <section className="relative flex flex-col gap-8 py-4 lg:w-full lg:flex-row">
        <section className="flex h-full flex-col justify-between gap-8 px-5 pt-[18rem] sm:items-center lg:w-full lg:items-center lg:gap-28 lg:pt-10">
          <div className="flex gap-2 text-xs lg:w-[18rem]">
            <img
              loading="lazy"
              src={zoology}
              alt="heart"
              className="h-10 w-10"
            />
            <div className="flex flex-col gap-1 sm:w-[30rem]">
              <h2 className="text-sm font-bold sm:text-lg">Search Pet</h2>
              <p>
                Adopt a dog or cat who's right for you. Simply enter your city
                above to start your search.
              </p>
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <img
              loading="lazy"
              src={syringe}
              alt="heart"
              className="h-10 w-10"
            />
            <div className="flex flex-col gap-1 sm:w-[30rem] lg:w-[18rem]">
              <h2 className="text-sm font-bold sm:text-lg">
                Free Vet Consultation
              </h2>
              <p className="w-[85%]">
                We will help your pet to settle down in it's new home, once you
                complete the adoption journey.
              </p>
            </div>
          </div>
        </section>

        <div className="absolute flex w-full items-center justify-center py-3 lg:top-10">
          <div className="overflow-hidden rounded-full">
            <img
              loading="lazy"
              src={dog}
              alt="dog"
              className="w-60 object-cover lg:w-80"
            />
          </div>
        </div>

        <div className="flex w-full gap-2 px-5 text-xs sm:justify-center lg:translate-x-36 lg:justify-start lg:pt-32">
          <img loading="lazy" src={heart} alt="heart" className="h-10 w-10" />
          <div className="flex flex-col gap-1 sm:w-[30rem] lg:w-[20rem]">
            <h2 className="text-sm font-bold sm:text-lg">Adopt Love</h2>
            <p className="lg:w-3/4">
              The rescure of pet parents will walk you through their adoption
              process. Once you complete the Adoption journey
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionJourney;
