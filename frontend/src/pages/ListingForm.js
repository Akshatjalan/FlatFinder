import React, { useState } from "react";

export default function ListingForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    contact: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted (API not connected)");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input name="rent" type="number" placeholder="Rent (₹)" onChange={handleChange} required />
      <input name="contact" placeholder="Contact (Phone or Email)" onChange={handleChange} required />
      <button type="submit">Post Listing</button>
    </form>
  );
}
