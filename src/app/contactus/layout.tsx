import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Finchhive",
  description: "Get in touch with Finchhive to discuss your digital growth, platform design, brand systems, and performance marketing strategy.",
  alternates: {
    canonical: "/contactus",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Finchhive",
    "description": "Get in touch with Finchhive to discuss your digital growth, platform design, brand systems, and performance marketing strategy.",
    "publisher": {
      "@type": "Organization",
      "name": "Finchhive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finchhive.com/finchhivlogo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
