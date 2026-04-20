import GalleryClient from "./GalleryClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nimzo Academy Gallery: Classes, Tournaments & School Programs",
  description:
    "Explore Nimzo Academy’s gallery of chess classes, tournaments, school programs, and student training moments from across Delhi and the broader academy journey.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryClient />;
}
