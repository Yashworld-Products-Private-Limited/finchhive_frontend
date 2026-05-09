export default function Footer() {
  const quickLinks = ["About Us", "Services", "Our Work", "Blog", "Contact"];
  const services = [
    "Brand Strategy",
    "Performance Marketing",
    "Content Creation",
    "Social Media Growth",
    "Web Design",
    "Analytics & Scaling",
  ];

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 border-2 border-white/30 rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 14L8 2L14 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.5 9.5H11.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-display text-lg tracking-widest">
                FINCHHIVE
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed mb-6">
              Digital Strategy. Creative Power.
              <br />
              Scalable Growth.
            </p>
            <div className="flex gap-4">
              {["IG", "FB", "LI", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-xs text-white/50 hover:border-white hover:text-white transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4 font-semibold">
              QUICK LINKS
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4 font-semibold">
              SERVICES
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4 font-semibold">
              CONTACT
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-white/60">hello@finchhive.com</li>
              <li className="text-sm text-white/60">+91 12345-67890</li>
              <li className="text-sm text-white/60">@finchhive</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4 font-semibold">
              NEWSLETTER
            </p>
            <p className="text-xs text-white/40 mb-3 leading-relaxed">
              Get growth insights delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 text-white text-xs px-3 py-2.5 flex-1 outline-none placeholder:text-white/30 min-w-0"
              />
              <button className="bg-brand px-3 py-2.5 flex-shrink-0 hover:bg-white/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            © 2024 FINCHHIVE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
