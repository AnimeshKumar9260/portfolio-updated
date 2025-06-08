"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(0);

  const statusMsg = [
    "Looking forward to work with you !",
    "Sending...",
    "Sent!",
    "Failed to send.",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(1); // sending

    try {
      await addDoc(collection(db, "contact"), form);
      setStatus(2); // sent
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error adding document", err);
      setStatus(3); // failed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-8">
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="text-field grow"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="text-field grow"
        />
      </div>
      <textarea
        name="message"
        placeholder="Leave feedback about the site, career opportunities, or just say hello etc."
        value={form.message}
        onChange={handleChange}
        required
        rows={6}
        className="text-field"
      />
      <div className="flex justify-end items-center gap-4">
        <p>{statusMsg[status]}</p>
        <button
          type="reset"
          className="hov-red cust-anim-1 cust-bord rounded-md py-2 px-4"
        >
          Reset
        </button>
        <button
          type="submit"
          className="hov-blu cust-anim-1 cust-bord rounded-md py-2 px-4"
        >
          Send
        </button>
      </div>
    </form>
  );
}
