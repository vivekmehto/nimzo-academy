import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://nimzoacademy.com/chess-coaching-in-delhi/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://nimzoacademy.com/chess-classes-in-dwarka/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://nimzoacademy.com/chess-classes-in-rohini/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nimzoacademy.com/chess-classes-in-janakpuri/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nimzoacademy.com/chess-classes-in-kirti-nagar/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nimzoacademy.com/home-chess-coaching-in-delhi-cantt/",
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 0.8,
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
}
