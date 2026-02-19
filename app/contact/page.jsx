import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Nimzo Academy | Chess Classes in Dwarka",
  description:
    "Get in touch with Nimzo Academy for professional chess coaching in Dwarka. Call, WhatsApp or book a free demo class for children aged 5–16.",
  alternates: {
    canonical: "https://nimzoacademy.com/contact",
  },
  openGraph: {
    url: "https://nimzoacademy.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}


