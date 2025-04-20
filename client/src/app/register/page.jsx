"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    alert(data.message || "Registered successfully");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" onChange={handleChange} placeholder="Username" className="w-full border p-2" />
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2" />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" className="w-full border p-2" />
        <button type="submit" className="bg-black text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}
