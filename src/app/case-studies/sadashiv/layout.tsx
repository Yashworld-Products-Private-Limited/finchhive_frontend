import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sadashiv Case Study | Finchhive",
  description: "Explore how Finchhive engineered growth and digital platform solutions for Sadashiv.",
  alternates: {
    canonical: "/case-studies/sadashiv",
  },
};

export default function SadashivLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sadashiv Case Study - Digital Growth Engineering",
    "description": "Explore how Finchhive engineered growth and digital platform solutions for Sadashiv.",
    "publisher": {
      "@type": "Organization",
      "name": "Finchhive",
      "logo": "https://finchhive.com/finchhivlogo.png"
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
