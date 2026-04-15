import { MetadataRoute } from "next";
import { locationPages } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages: MetadataRoute.Sitemap = [
    {
      url: "https://nimzoacademy.com/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://nimzoacademy.com/book-free-chess-demo/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://nimzoacademy.com/programs/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://nimzoacademy.com/locations/",
      lastModified: new Date("2026-04-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://nimzoacademy.com/school-chess-program/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://nimzoacademy.com/contact/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://nimzoacademy.com/about/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: "https://nimzoacademy.com/gallery/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nimzoacademy.com/chess-referral-program/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://nimzoacademy.com/scholarships/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://nimzoacademy.com/recommended-chess-gear/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const locationEntries: MetadataRoute.Sitemap = locationPages.map((location) => ({
    url: `https://nimzoacademy.com/${location.slug}/`,
    lastModified: new Date("2026-04-15"),
    changeFrequency: "weekly",
    priority:
      location.type === "Headquarters" || location.type === "City Overview"
        ? 0.9
        : 0.8,
  }));

  return [...basePages, ...locationEntries];
}
