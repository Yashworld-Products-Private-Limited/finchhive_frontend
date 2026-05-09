import LetsTalkSection from "@/components/LetsTalkSection";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl p-6 border border-black/10 bg-blue-400/10 backdrop-blur-[0.8] shadow-xl">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />

      <p className="text-black/70 heading mb-3">{title}</p>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

const page = () => {
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
        <div className="mt-[100px] lg:mt-[180px]">
          <section className="max-w-[1280px] mx-auto">
            <div className="space-y-6">
              {/* TOP GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hotline */}
                <Card title="Hotline:">
                  <p className="text-[#2E2C76] subHeading text-lg">
                    (555) 123-4567
                  </p>
                </Card>

                {/* Address */}
                <Card title="Address:">
                  <p className="text-[#2E2C76] subHeading text-lg leading-relaxed">
                    123 MAIN STREET, CITYVILLE, <br />
                    STATEBURG, 98765
                  </p>
                </Card>

                {/* Email */}
                <Card title="Email:">
                  <p className="text-[#2E2C76] subHeading text-lg uppercase">
                    AGENCEE@EMAIL.COM
                  </p>
                </Card>
              </div>

              {/* SECOND ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Opening Hours */}
                <div className="md:col-span-2">
                  <Card title="Opening Hours:">
                    <div className="space-y-2 text-[#2E2C76] subHeading text-lg">
                      <p>MON TO FRI: 9.00AM - 8.30PM</p>
                      <p>SAT: 10.00AM - 6.30PM</p>
                      <p>SUN: CLOSED</p>
                    </div>
                  </Card>
                </div>

                {/* Social */}
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

              {/* MAP */}
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
        <div className="mt-[100px] lg:mt-[160px] mb-[60px]">
          <LetsTalkSection />
        </div>
      </div>
    </div>
  );
};

export default page;
