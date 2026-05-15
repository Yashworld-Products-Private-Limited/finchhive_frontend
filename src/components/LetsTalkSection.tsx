"use client";

import { useState } from "react";

export default function LetsTalkSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w- flex items-center overflow-hidden py-8">
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[140px] sm:text-[160px] md:text-[180px] lg:text-[190px] leading-[90px] md:leading-[120px] lg:leading-[130px] font-medium tracking-wider heading text-center lg:text-start">
            <span className="text-[#2E2C76] block">Let&apos;s</span>
            <span className="block text-[#000000]">Talk!</span>
          </h2>
        </div>

          <div className="rounded-[32px] lg:rounded-[32px] p-8 space-y-5 bg-white border shadow-xl">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className=" text-sm text-gray-600 heading"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none focus:ring-2 transition-all"
                style={{
                  border: "1px solid #3a3a3a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e8651a")}
                onBlur={(e) => (e.target.style.borderColor = "#3a3a3a")}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className=" text-sm text-gray-600 heading"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all"
                style={{
                  border: "1px solid #3a3a3a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e8651a")}
                onBlur={(e) => (e.target.style.borderColor = "#3a3a3a")}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className=" text-sm text-gray-600 heading"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3.5 text-white placeholder-gray-500 outline-none resize-y transition-all"
                style={{
                  border: "1px solid #3a3a3a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e8651a")}
                onBlur={(e) => (e.target.style.borderColor = "#3a3a3a")}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="text-[16px] lg:text-[24px] w-full py-4 rounded-xl bg-[#2E2C76] text-white text-base tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] heading"
            >
              Submit
            </button>
          </div>
      </div>
    </section>
  );
}
