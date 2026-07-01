import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Nine Case Study | Finchhive",
  description: "Discover how Finchhive collaborated with Studio Nine to elevate their brand systems and digital presence.",
  alternates: {
    canonical: "/case-studies/studio-nine",
  },
};

export default function StudioNineLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Studio Nine Case Study - Creative Brand Systems",
    "description": "Discover how Finchhive collaborated with Studio Nine to elevate their brand systems and digital presence.",
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
