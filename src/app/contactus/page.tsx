"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import { useState } from "react";
const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  {
    ssr: false,
  },
);



function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl p-6 border border-black/10 bg-blue-400/10 backdrop-blur-[0.8] shadow-xl">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />

      <p className="text-black/70 heading mb-3">{title}</p>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

const Contactus = () => {
  const [open, setOpen] = useState(false);
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

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setOpen(true);
  };

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-[calc(15dvh-80px+120px)]">
          <div className="">
            <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
              Let&apos;s Work Together
            </h2>
          </div>
        </div>
        <div className="mt-[30px] lg:mt-[40px] px-4">
          <div className=" grid lg:grid-cols-[1fr_1.1fr] overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_20px_100px_rgba(0,0,0,0.08)]">
            <div className=" relative overflow-hidden bg-gradient-to-br from-[#2E2C76] to-[#17153d] p-8 lg:p-14 text-white">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                  Schedule Meeting
                </p>

                <h3 className="mt-5 heading text-[38px] leading-none lg:text-[72px]">
                  Let’s Build
                  <br />
                  Something
                  <br />
                  Amazing
                </h3>

                <p className="mt-6 max-w-lg text-white/70 leading-relaxed">
                  Fill in your information and book a live strategy session
                  directly from our availability calendar.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {["30 Min Call", "Google Meet", "Instant Booking"].map(
                    (item) => (
                      <div
                        key={item}
                        className=" rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-xl"
                      >
                        <p className="text-sm text-white/80">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-14">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-black/60 heading">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className=" w-full rounded-2xl border border-black/10 bg-[#f8f8fc] px-5 py-4 outline-none transition-all focus:border-[#2E2C76] focus:ring-4 focus:ring-[#2E2C76]/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-black/60 heading">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className=" w-full rounded-2xl border border-black/10 bg-[#f8f8fc] px-5 py-4 outline-none transition-all focus:border-[#2E2C76] focus:ring-4 focus:ring-[#2E2C76]/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-black/60 heading">
                    Project Brief
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className=" w-full resize-none rounded-2xl border border-black/10 bg-[#f8f8fc] px-5 py-4 outline-none transition-all focus:border-[#2E2C76] focus:ring-4 focus:ring-[#2E2C76]/10"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className=" w-full rounded-2xl bg-[#2E2C76] py-4 text-lg text-white transition-all duration-300 hover:scale-[0.99] hover:opacity-90"
                >
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>

          {open && (
            <PopupModal
              url="https://calendly.com/jeel-ywppl/finchhive-meeting"
              open={open}
              onModalClose={() => setOpen(false)}
              rootElement={document.body}
              prefill={{
                name: formData.name,
                email: formData.email,
              }}
            />
          )}
        </div>
        <div className="mt-[60px] lg:mt-[110px]">
          <section className="max-w-[1280px] mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card title="Hotline:">
                  <p className="text-[#2E2C76] subHeading text-lg">
                    (555) 123-4567
                  </p>
                </Card>

                <Card title="Address:">
                  <p className="text-[#2E2C76] subHeading text-lg leading-relaxed">
                    123 MAIN STREET, CITYVILLE, <br />
                    STATEBURG, 98765
                  </p>
                </Card>

                <Card title="Email:">
                  <p className="text-[#2E2C76] subHeading text-lg uppercase">
                    AGENCEE@EMAIL.COM
                  </p>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card title="Opening Hours:">
                    <div className="space-y-2 text-[#2E2C76] subHeading text-lg">
                      <p>MON TO FRI: 9.00AM - 8.30PM</p>
                      <p>SAT: 10.00AM - 6.30PM</p>
                      <p>SUN: CLOSED</p>
                    </div>
                  </Card>
                </div>

                <Card title="Follow Us:">
                  <div className="flex gap-4 mt-2">
                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border border-[#2E2C76]/80 flex items-center justify-center text-[#2E2C76]  hover:text-black 8ransition"
                        >
                          <Icon />
                        </div>
                      ),
                    )}
                  </div>
                </Card>
              </div>

              <div className="rounded-3xl overflow-hidden border border-gray-400 shadow-xl group">
                <iframe
                  src="https://www.google.com/maps?q=amsterdam&output=embed"
                  className="w-full h-[300px] md:h-[400px] grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
