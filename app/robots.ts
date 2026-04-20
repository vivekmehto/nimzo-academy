import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://nimzoacademy.com",
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nimzoacademy.com/sitemap.xml",
  };
}
