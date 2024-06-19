import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center text-2xl font-bold tracking-tighter">
      <img loading="lazy" src={logo} alt="logo" width={25} />
      PawsomeAdopt
    </div>
  );
};

export default Logo;
