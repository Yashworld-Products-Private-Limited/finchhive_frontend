import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Finchhive",
  description: "Discover Finchhive's performance-driven social media marketing and reel engineering strategies designed to turn organic views into real-world footfall.",
  alternates: {
    canonical: "/social-media-marketing",
  },
};

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing & Reel Engineering",
    "provider": {
      "@type": "Organization",
      "name": "Finchhive",
      "logo": "https://finchhive.com/finchhivlogo.png"
    },
    "description": "Finchhive's performance-driven social media marketing and reel engineering strategies designed to turn organic views into real-world footfall."
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
