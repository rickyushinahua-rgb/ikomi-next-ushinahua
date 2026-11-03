import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IKOMI PERÚ | Repuestos automotrices",
  description:
    "IKOMI PERÚ: información corporativa sobre repuestos automotrices en Perú.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={geistSans.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
