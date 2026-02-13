import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { DemoModalProvider } from "@/context/DemoModalContext";
import GlobalDemoModal from "@/components/forms/GlobalDemoModal";

export const metadata = {
  title: "Nimzo Academy | Chess Training for All Levels",
  description:
    "Nimzo Academy offers structured, premium chess coaching for beginners and intermediate players.",
  icons: {
    icon: "/favicon.ico",
  },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
