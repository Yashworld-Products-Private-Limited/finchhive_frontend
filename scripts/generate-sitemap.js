/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

if (!BASE_URL) {
  throw new Error("❌ NEXT_PUBLIC_SITE_URL is not defined");
}

// Ensure base URL doesn't have a trailing slash for consistent joining
const cleanBaseUrl = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;

// Site pages/routes
const pages = [
  "",
  "/about",
  "/contactus",
  "/social-media-marketing",
  "/case-studies/kalras-kitchen",
  "/case-studies/veidor",
  "/case-studies/studio-nine",
  "/case-studies/sadashiv",
];

const today = new Date().toISOString().split("T")[0];

const urls = pages
  .map(
    (page) => {
      const url = page === "" ? `${cleanBaseUrl}/` : `${cleanBaseUrl}${page}`;
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    }
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

// Write sitemap.xml
fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated successfully!");

// Write robots.txt dynamically using the clean base URL
const robots = `User-agent: *
Allow: /

Sitemap: ${cleanBaseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, "../public/robots.txt"), robots);
console.log("✅ robots.txt generated successfully!");

