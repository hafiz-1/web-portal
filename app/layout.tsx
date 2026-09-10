import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wateen",
    template: "%s | Wateen",
  },
  description:
    "Technology, connectivity and digital infrastructure solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950 antialiased">
        <Navbar />

        <main className="app-background">{children}</main>

        <Footer />
      </body>
    </html>
  );
}