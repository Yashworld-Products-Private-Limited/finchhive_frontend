import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"));
const CustomCursor = dynamic(() => import("@/components/CustomCursor"));

const geist = localFont({
  src: [
    {
      path: "../../public/font/AkzidenzGroteskBE-Regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finchhive | Best Digital Platform Solutions Company",
  description: "We combine innovative digital solutions, human psychology-based strategy, and exceptional execution to scale your brand.",
  keywords: ["digital platform solutions", "performance marketing", "brand systems", "web design", "ux design", "social media strategy", "reel engineering", "audience psychology"],
  metadataBase: new URL("https://finchhive.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Finchhive | Best Digital Platform Solutions Company",
    description: "We combine innovative digital solutions, human psychology-based strategy, and exceptional execution to scale your brand.",
    url: "https://finchhive.com",
    siteName: "Finchhive",
    images: [
      {
        url: "/finchhivlogo.png",
        width: 800,
        height: 600,
        alt: "Finchhive Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finchhive | Best Digital Platform Solutions Company",
    description: "We combine innovative digital solutions, human psychology-based strategy, and exceptional execution to scale your brand.",
    images: ["/finchhivlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body suppressHydrationWarning={true} className="min-h-full grid-bg ">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Finchhive",
              "url": "https://finchhive.com",
              "logo": "https://finchhive.com/finchhivlogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919537587467",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.instagram.com/finchhive/",
                "https://in.linkedin.com/in/niraj-prasad-b37ba0b9"
              ]
            })
          }}
        />
        <SmoothScroll />
        <CustomCursor
          accentColor="#ffffff"
          idleDelay={800}
          particleColor="rgba(255,255,255,0.55)"
          logoSize={70}
          logoHoverSize={70}
          logoSVG={
            <svg
              width="48"
              height="48"
              viewBox="0 0 465 508"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M142.45 152.726C142.83 136.806 124.85 130.046 113.7 139.976C102.54 149.906 112.42 171.116 126.44 168.716C140.46 166.316 148.94 176.276 160.76 182.416C172.57 188.566 181.97 194.606 193.22 200.956C204.47 207.306 215.13 213.646 226.22 219.956C237.31 226.266 248.24 232.696 259.22 238.956C270.2 245.216 280.68 251.146 291.45 257.726C285.73 266.396 282.3 274.926 276.22 283.496C270.14 292.066 262.81 297.726 252.47 300.746C242.13 303.776 228.42 300.546 219.68 294.496C210.94 288.446 202.88 284.776 193.68 279.496C184.48 274.216 177.64 269.276 167.68 264.496C157.72 259.716 150.8 255.016 146.7 244.476C142.59 233.946 125.94 235.236 119.7 242.976C113.46 250.706 114.77 265.796 125.77 269.406C136.78 273.016 146.01 265.886 154.45 276.726C145.68 283.026 135.39 287.496 126.15 293.426C116.91 299.356 107.5 303.476 98.2005 309.476C88.8905 315.476 79.7505 318.586 71.2005 326.476C62.6605 334.376 65.9005 350.386 76.3705 355.806C86.8505 361.216 94.0605 364.966 104.37 371.806C114.69 378.646 126.01 372.576 135.37 366.646C144.74 360.726 153.79 355.866 163.37 350.646C172.96 345.426 181.72 336.366 192.78 339.396C203.84 342.436 217.12 345.526 228.38 348.796C239.64 352.066 256.75 352.986 268.23 350.506C279.7 348.026 290.37 344.176 299.7 337.976C309.04 331.786 316.32 326.366 322.68 316.956C329.04 307.546 334.44 300.696 339.53 289.806C344.62 278.916 351.67 275.186 355.67 261.946C359.67 248.706 339.99 248.336 336.75 261.026C333.52 273.726 324.96 277.876 320.37 288.646C315.78 299.416 309.79 306.746 301.7 314.976C293.6 323.206 285 327.806 274.13 331.406C263.26 334.996 246.73 336.906 235.12 333.056C223.51 329.196 211.9 328.876 200.47 323.706C189.05 318.526 177.16 322.626 167.68 328.956C158.2 335.286 149.06 340.116 139.68 344.956C130.3 349.796 121.1 359.826 111.68 356.496C102.26 353.166 93.0105 343.976 83.4505 340.726C89.5505 332.516 102.49 325.826 112.37 320.646C122.25 315.476 133.3 306.756 143.37 302.646C153.45 298.536 163.73 285.386 174.37 287.806C185.02 290.216 194.74 300.876 205.37 305.806C216.01 310.736 227.43 318.746 240.45 318.726C253.47 318.706 267.21 314.256 277.37 306.646C287.53 299.026 292.13 289.196 298.2 279.476C304.26 269.746 313.64 254.946 303.68 245.496C293.72 236.046 282.54 236.536 274.45 226.726C285.45 221.556 293.93 214.226 305.44 209.716C316.95 205.206 333.1 211.076 341.2 218.976C349.31 226.876 349.73 241.716 360.2 246.976C370.68 252.236 373.13 270.406 386.42 267.696C399.72 264.996 388.06 246.906 378.7 241.476C369.34 236.056 364.37 223.476 358.75 214.426C353.14 205.376 343.07 197.476 332.13 194.046C321.18 190.626 303.06 190.716 292.68 196.956C282.3 203.196 272.54 208.476 262.2 214.476C251.85 220.466 242.2 208.626 232.15 204.026C222.09 199.426 212.55 191.826 202.53 186.646C192.51 181.476 182.66 174.956 172.68 169.496C162.69 164.036 152.72 157.446 142.45 152.726Z"
                fill="#302F78"
                stroke="black"
              />
              <path
                d="M148.45 203.726C148.78 191.466 135.61 184.866 125.15 189.426C114.68 193.976 111.68 208.816 120.2 216.976C128.73 225.136 141.28 217.466 149.7 224.476C158.13 231.476 167.78 233.826 176.22 239.956C184.66 246.086 194.74 249.196 202.75 255.426C210.77 261.646 221.84 263.036 228.76 270.416C235.67 277.806 254.56 279.516 251.77 267.406C248.98 255.296 234.68 256.736 227.2 249.976C219.71 243.226 209.71 240.486 201.53 234.646C193.34 228.816 183.03 225.176 174.68 219.496C166.33 213.816 157.16 209.806 148.45 204.726V203.726Z"
                fill="#302F78"
                stroke="black"
              />
            </svg>
          }
        />
        <Navbar />
        <main className="">
          <ScrollToTop />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
