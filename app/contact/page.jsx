import ContactClient from "./ContactClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Nimzo Academy for Chess Classes in Delhi & Online",
  description:
    "Contact Nimzo Academy for chess classes across Delhi, home coaching in select areas, school chess partnerships, or live online coaching support.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
