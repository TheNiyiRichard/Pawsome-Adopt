import React from "react";
import EmailForm from "./footer/EmailForm";
import Logo from "../components/navbar/Logo";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToAddPet = () => {
    navigate("/add-or-adopt-pet");
  };
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-slate-100/50 pt-16 text-start text-sm sm:gap-4 sm:text-base">
      <h1 className="text-center text-2xl font-bold sm:text-3xl">
        Get Our Newsletter
      </h1>
      <p className="text-center font-bold">To join the worldwide community</p>
      <EmailForm />

      <section className="flex w-full flex-col flex-wrap items-start justify-center gap-10 px-8 py-10 sm:flex-row sm:justify-start">
        <div className="flex flex-col gap-3 sm:w-1/2">
          <Logo />
          <p>Copyright © 2022. All rights reserved</p>
          <span className="flex gap-3">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
          </span>
        </div>

        <div>
          <h1 className="py-2 text-lg font-bold">Quick Links</h1>
          <ul className="flex h-full w-full flex-col items-start justify-center gap-2">
            <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80">
              Adoption
            </li>
            <li className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80">
              Pets
            </li>
            <li
              onClick={goToAddPet}
              className="cursor-pointer duration-300 hover:text-pink-700 hover:opacity-80"
            >
              Add Pet
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
