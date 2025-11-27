"use client";
import { useState } from "react";

export default function BasicDetails() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subscriptionEmail: "",
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.subscriptionEmail) {
  //     setIsSubscribed(true);
  //   }
  //   console.log("Form Submitted:", form);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.subscriptionEmail) setIsSubscribed(true);

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save data");

      const data = await res.json();
      console.log("Saved to DB:", data);
      alert("Your details have been saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to save data.");
    }
  };


    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   // if (!userId) {
    //   //   alert("No user ID found. Please log in first.");
    //   //   return;
    //   // }

    //   if (form.subscriptionEmail) setIsSubscribed(true);

    //   try {
    //     const res = await fetch("http://localhost:5000/api/users", {
    //       method: "PUT",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(form),
    //     });

    //     if (!res.ok) throw new Error("Failed to save data");

    //     const data = await res.json();
    //     console.log("Saved to DB:", data);
    //     alert("Your details have been saved!");
    //   } catch (err) {
    //     console.error(err);
    //     alert("Failed to save data.");
    //   }
    // };

  return (
    <div className="mx-auto bg-[#E2F4FA] min-h-screen p-4 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Your first name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded bg-[#CCE9F2] px-3 py-2"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">Your last name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded bg-[#CCE9F2] px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Email & Contact */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Primary email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded bg-[#CCE9F2] px-3 py-2"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">Contact number</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border rounded bg-[#CCE9F2] px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          {!isSubscribed ? (
            <div className="space-y-2">
              <p className="font-bold text-lg">Get job offers straight to your inbox</p>
              <p className="text-sm md:text-base">
                Subscribe to our newsletter and be the first to receive exclusive tech job offers and updates. Stay ahead in your career search!
              </p>
              <label className="block font-medium mb-1 mt-1.5">
                Enter your email to subscribe
              </label>
              <input
                type="email"
                name="subscriptionEmail"
                value={form.subscriptionEmail}
                onChange={handleChange}
                className="w-full border rounded bg-[#CCE9F2] px-3 py-2"
              />
            </div>
          ) : (
            <div className="bg-green-100 p-4 rounded-md text-green-800">
              <p className="font-bold">You're subscribed!</p>
              <p className="text-sm md:text-base">
                Thank you for subscribing! You'll now receive the latest job offers, career tips, and updates straight to your inbox. Stay tuned for exciting opportunities!
              </p>
              <button
                type="button"
                className="mt-2 text-sm text-blue-600 underline"
                onClick={() => {
                  setIsSubscribed(false);
                  setForm({ ...form, subscriptionEmail: "" });
                }}
              >
                Unsubscribe
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex">
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
