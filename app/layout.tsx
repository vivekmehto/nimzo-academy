import "./globals.css";

export const metadata = {
  title: "Nimzo Academy | Chess Training for All Levels",
  description:
    "Nimzo Academy offers structured, premium chess coaching for beginners and intermediate players.",
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
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
