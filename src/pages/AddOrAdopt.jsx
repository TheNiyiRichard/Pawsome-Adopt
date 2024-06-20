import React from "react";
import PetAdoptionForm from "../components/add-or-adopt-pet/PetAdoptionForm";
import dogs from "../assets/dogs.png";
import AdoptAPet from "../components/add-or-adopt-pet/AdoptAPet";
import Navbar from "../components/Navbar";
import AvailablePets from "../components/AvailablePets";
import Footer from "../components/Footer";

const AddOrAdopt = () => {
  return (
    <>
      <Navbar />
      <div className="-mt-10 lg:-mb-20">
        <AvailablePets />
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start overflow-hidden p-5 text-3xl lg:flex-row">
        <AdoptAPet />

        <section className="w-full p-1 text-sm md:px-[20%] lg:px-0">
          <h1 className="flex translate-y-4 flex-col items-center justify-center gap-2 py-2 text-2xl font-bold text-orange-400 sm:text-3xl">
            Post A Pet For Adoption
            <span className="h-[2px] w-full bg-orange-400"></span>
            <img
              loading="lazy"
              src={dogs}
              alt="dogs"
              width={250}
              height={250}
              className="-z-10 -my-5"
            />
          </h1>
          <PetAdoptionForm />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AddOrAdopt;
