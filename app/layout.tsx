import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { DemoModalProvider } from "@/context/DemoModalContext";
import GlobalDemoModal from "@/components/forms/GlobalDemoModal";
import { seoConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(seoConfig.siteUrl),

  title: {
    default: "Chess Classes in Delhi and Online Worldwide",
    template: "%s | Nimzo Academy",
  },

  description:
    "Nimzo Academy offers chess classes across Delhi, home coaching in select areas, school tie-ups, and live online chess classes for children worldwide.",

  keywords: [
    "Chess classes in Dwarka",
    "Chess coaching in Delhi",
    "Chess classes in Delhi",
    "Best chess academy in Dwarka",
    "Online chess classes for kids",
    "Offline chess classes in Delhi",
    "School chess program in Delhi",
    "Chess academy in Delhi",
  ],

  alternates: {
    canonical: seoConfig.siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Chess Classes in Delhi and Online Worldwide | Nimzo Academy",
    description:
      "Learn with Nimzo Academy through chess classes across Delhi, home coaching in select areas, school tie-ups, and live online chess classes.",
    url: seoConfig.siteUrl,
    siteName: "Nimzo Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${seoConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nimzo Academy chess classes in Dwarka, Delhi and online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chess Classes in Delhi and Online Worldwide | Nimzo Academy",
    description:
      "Chess classes across Delhi, home coaching in select areas, school tie-ups, and live online chess classes for children.",
    images: [`${seoConfig.siteUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Nimzo Academy",
  url: seoConfig.siteUrl,
  logo: `${seoConfig.siteUrl}/logo.png`,
  image: `${seoConfig.siteUrl}/og-image.jpg`,
  description:
    "Nimzo Academy is a chess academy offering classes across Delhi, home coaching in select areas, school tie-ups, and live online classes for students around the world.",
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
    latitude: 28.57375398674804,
    longitude: 77.07187627520065,
  },
  hasMap: "https://maps.app.goo.gl/QQ5At2Kcg7Uky1M56",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9667275083",
    contactType: "customer support",
    areaServed: ["IN", "US", "GB", "QA", "AE"],
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/nimzoacademy/",
    "https://www.youtube.com/channel/UCGlVYL3475ysX-Tm2TJjVOw",
    "https://www.facebook.com/people/Nimzo-Academy/61583463975965/",
  ],
  areaServed: [
    { "@type": "Place", name: "Dwarka, New Delhi" },
    { "@type": "Place", name: "Rohini, Delhi" },
    { "@type": "Place", name: "Janakpuri, Delhi" },
    { "@type": "Place", name: "Kirti Nagar, Delhi" },
    { "@type": "Place", name: "Delhi Cantt, Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  knowsAbout: [
    "Chess classes in Dwarka",
    "Online chess classes for kids",
    "Chess coaching in Delhi",
    "School chess program in Delhi",
    "Beginner to advanced chess coaching",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nimzo Academy",
  url: seoConfig.siteUrl,
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
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
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
