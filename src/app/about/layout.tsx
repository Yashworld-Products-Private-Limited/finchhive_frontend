import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Finchhive",
  description: "Learn how Niraj Prasad founded Finchhive to bridge the gap between technical execution and human psychology. Meet our squad and view our agency culture.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Finchhive",
    "description": "Learn how Niraj Prasad founded Finchhive to bridge the gap between technical execution and human psychology.",
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
