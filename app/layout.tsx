import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PATHORA EDUCATION | Study in France",
    template: "%s | PATHORA EDUCATION",
  },
  description:
    "Personalised educational guidance, application assistance and administrative support for international students in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
