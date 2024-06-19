import React, { useState } from "react";
import axios from "axios";
import Button from "../ui/Button";

const FormField = ({ label, type, name, value, onChange, options, error }) => (
  <div className="mb-4 flex flex-col w-full">
    <div className="flex items-center">
      <label className="block py-2 text-base font-bold text-orange-400">
        {label}
      </label>
      {error && <span className="ml-2 text-xs text-red-600">{error}</span>}
    </div>
    {type === "select" ? (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-1 py-2 hover:bg-slate-200"
      >
        {options.map((option) => (
          <option key={option} value={option} className="h-20 text-base">
            {option}
          </option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-3 py-2"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-3 py-2"
      />
    )}
  </div>
);

// Main Form Component
const PetAdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    picture: null,
    area: "",
    type: "dog",
    justification: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "*required";
    if (!formData.age) tempErrors.age = "*required";
    if (!formData.area) tempErrors.area = "*required";
    if (!formData.justification) tempErrors.justification = "*required";
    if (!formData.email) tempErrors.email = "*required";
    if (!formData.phone) tempErrors.phone = "*required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Mock post URL with axios
    console.log("Form submitted successfully:");

    // What the data looks like
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4">
      <FormField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormField
        label="Age"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />

      <FormField
        label="Picture"
        type="file"
        name="picture"
        onChange={handleChange}
        error={errors.picture}
      />

      <FormField
        label="Area"
        type="text"
        name="area"
        value={formData.area}
        onChange={handleChange}
        error={errors.area}
      />

      <FormField
        label="Type"
        type="select"
        name="type"
        value={formData.type}
        onChange={handleChange}
        options={["Dog", "Cat", "Other"]}
        error={errors.type}
      />

      <FormField
        label="Justification for Giving a Pet"
        type="textarea"
        name="justification"
        value={formData.justification}
        onChange={handleChange}
        error={errors.justification}
      />
      <label className="flex translate-y-4 items-center justify-center py-2 text-xl font-bold text-orange-400">
        Contact Information
      </label>
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormField
        label="Phone"
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <Button
        type="submit"
        className={
          "bg-gradient-to-tr from-orange-400 via-orange-400 via-40% to-pink-400 my-6"
        }
      >
        Submit your Pet
      </Button>
    </form>
  );
};

export default PetAdoptionForm;
