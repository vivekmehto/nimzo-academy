import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { DemoModalProvider } from "@/context/DemoModalContext";
import GlobalDemoModal from "@/components/forms/GlobalDemoModal";

export const metadata = {
  title:
    "Nimzo Academy | Chess Classes in Dwarka, Delhi & Online Coaching",
  description:
    "Nimzo Academy offers structured online and offline chess classes in Dwarka, New Delhi. Professional chess coaching for kids, beginners, and tournament players.",
  keywords: [
    "chess classes in Dwarka",
    "chess academy in Delhi",
    "online chess coaching India",
    "chess classes for kids",
    "chess training in Dwarka",
  ],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Nimzo Academy | Chess Classes in Dwarka, Delhi & Online Coaching",
    description:
      "Structured chess coaching in Dwarka, New Delhi. Join Nimzo Academy for beginner to advanced chess training.",
    url: "https://nimzoacademy.com",
    siteName: "Nimzo Academy",
    images: [
      {
        url: "https://nimzoacademy.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nimzo Academy | Chess Classes in Dwarka, Delhi & Online Coaching",
    description:
      "Professional online and offline chess coaching in Dwarka, New Delhi.",
    images: ["https://nimzoacademy.com/logo.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              name: "Nimzo Academy",
              url: "https://nimzoacademy.com",
              logo: "https://nimzoacademy.com/logo.png",
              image: "https://nimzoacademy.com/logo.png",
              description:
                "Professional chess coaching academy offering online and offline chess classes in Dwarka, New Delhi and internationally.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "262, Block-A, Sector 8 Dwarka",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110077",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.5921",
                longitude: "77.0460",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9718086186",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.instagram.com/nimzoacademy/",
                "https://www.youtube.com/channel/UCGlVYL3475ysX-Tm2TJjVOw",
                "https://www.facebook.com/people/Nimzo-Academy/61583463975965/",
              ],
              areaServed: {
                "@type": "Place",
                name: "Dwarka, New Delhi",
              },
            }),
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-body antialiased"
      >
        <div className="flex min-h-screen flex-col">
          <DemoModalProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <WhatsAppButton />
            <Footer />
            <GlobalDemoModal />
          </DemoModalProvider>
        </div>
      </body>
    </html>
  );
}
