import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Vessel',
    default: 'Vessel | T.Buckets',
  },
  description: 'Portfolio of an IT Veteran transitioning to Modern DevOps. Infrastructure, Automation, and Reliability.',
  openGraph: {
    title: 'Vessel | T.Buckets Portfolio',
    description: '12 Years of IT Experience applied to Modern DevOps.',
    url: 'https://tbuckets.us',
    siteName: 'Vessel',
    images: [
      {
        // We will create this image next, or use a default specific to your brand
        url: '/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
