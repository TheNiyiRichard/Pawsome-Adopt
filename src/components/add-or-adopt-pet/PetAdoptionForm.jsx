import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
    fullName: "",
    email: "",
    phoneNumber: "",
    petName: "",
    petCategory: "Dog",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "*required";
    if (!formData.email) tempErrors.email = "*required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "*required";
    if (!formData.petName) tempErrors.petName = "*required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        'https://pawsomeadoptbackend20240619101131.azurewebsites.net/api/applications',
        {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          petName: formData.petName,
          petCategory: formData.petCategory,
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          }
        }
      );
      Swal.fire({
        title: 'Success!',
        text: 'Your pet adoption application has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your application. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error("Error submitting application:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4">
      <FormField
        label="Full Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Phone Number"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
      />
      <FormField
        label="Pet Name"
        type="text"
        name="petName"
        value={formData.petName}
        onChange={handleChange}
        error={errors.petName}
      />
      <FormField
        label="Pet Category"
        type="select"
        name="petCategory"
        value={formData.petCategory}
        onChange={handleChange}
        options={["Dog", "Cat", "Other"]}
        error={errors.petCategory}
      />
      <Button
        type="submit"
        className="bg-gradient-to-tr from-orange-400 via-orange-400 via-40% to-pink-400 my-6"
      >
        Submit your Pet
      </Button>
    </form>
  );
};

export default PetAdoptionForm;
