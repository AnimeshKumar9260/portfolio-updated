import type { Metadata } from "next";
import "./globals.css";
import { Georama } from "next/font/google";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

const georama = Georama({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-georama", // this adds a CSS variable you can use
});

export const metadata: Metadata = {
  title: "Animesh Kumar | Portfolio",
  description:
    "A portfolio website by Animesh Kumar to showcase projects, skills and work experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.variable} antialiased flex flex-col max-w-[800px] md:mx-auto mx-5`}
      >
        <Navbar />
        <div className="grow"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
