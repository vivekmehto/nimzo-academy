import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Chess Classes Gallery in Dwarka",
  description:
    "Explore photos of our chess classes, tournaments and student activities at Nimzo Academy in Dwarka.",
  alternates: {
    canonical: "https://nimzoacademy.com/gallery",
  },
  openGraph: {
    url: "https://nimzoacademy.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
