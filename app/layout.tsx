import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { DemoModalProvider } from "@/context/DemoModalContext";
import GlobalDemoModal from "@/components/forms/GlobalDemoModal";

export const metadata = {
  metadataBase: new URL("https://nimzoacademy.com"),

  title: {
    default: "Chess Classes in Dwarka & Online | Nimzo Academy",
    template: "%s | Nimzo Academy",
  },

  description:
    "Professional chess coaching for children aged 5–16 in Dwarka and online. Structured training for beginners to advanced players. Book a free demo class today.",

  keywords: [
    "Chess classes in Dwarka",
    "Online chess classes for kids",
    "Chess academy in Dwarka Delhi",
    "Kids chess coaching",
    "Beginner to advanced chess training",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Chess Classes in Dwarka & Online | Nimzo Academy",
    description:
      "Professional chess coaching for children aged 5–16 in Dwarka and online.",
    url: "https://nimzoacademy.com",
    siteName: "Nimzo Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://nimzoacademy.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nimzo Academy Chess Coaching",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chess Classes in Dwarka & Online | Nimzo Academy",
    description:
      "Professional chess coaching for children aged 5–16 in Dwarka and online.",
    images: ["https://nimzoacademy.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
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
              "@type": "EducationalOrganization",
              name: "Nimzo Academy",
              url: "https://nimzoacademy.com",
              logo: "https://nimzoacademy.com/logo.png",
              image: "https://nimzoacademy.com/logo.png",
              description:
                "Professional chess coaching academy offering online and offline chess classes in Dwarka, New Delhi.",
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
                latitude: 28.5921,
                longitude: 77.0460,
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
 