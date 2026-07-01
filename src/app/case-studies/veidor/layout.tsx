import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veidor Case Study | Finchhive",
  description: "How Finchhive built dynamic platform solutions and enhanced digital experiences for Veidor.",
  alternates: {
    canonical: "/case-studies/veidor",
  },
};

export default function VeidorLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Veidor Case Study - Dynamic Platform Solutions",
    "description": "How Finchhive built dynamic platform solutions and enhanced digital experiences for Veidor.",
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
