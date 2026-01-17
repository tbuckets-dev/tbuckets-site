import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Initialize the standard Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vessel | TBuckets",
  description: "IT Infrastructure & Modern DevOps Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}