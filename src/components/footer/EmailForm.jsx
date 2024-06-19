import React, { useState } from "react";
import Button from "../ui/Button";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      // Handle form submission
      console.log("Email submitted:", email);
      setEmail("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-4/5 items-center justify-between bg-white p-4 shadow-xl"
    >
      <div className="flex w-3/5 flex-col items-start justify-center text-xs font-bold sm:text-sm lg:text-base sm:pl-3">
        <input
          type="email"
          placeholder="Type your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-1 placeholder:font-normal focus:outline-none"
        />
        <span className="text-xs text-red-500">{error}</span>
        <span>example@gmail.com</span>
      </div>

      <Button
        type="submit"
        variant="straight-edge"
        className={
          "text-nowrap rounded-none py-2 text-xs sm:px-9 sm:py-5 sm:text-sm"
        }
      >
        Send Now
      </Button>
    </form>
  );
};

export default EmailForm;
