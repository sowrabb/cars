import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OCARS — Ride with Right Cars",
  description: "Download Ludo King - The official board game with 1.5 billion downloads. Play with friends and family on iOS and Android.",
  openGraph: {
    title: "OCARS — Ride with Right Cars",
    description: "Download Ludo King - The official board game with 1.5 billion downloads. Play with friends and family on iOS and Android.",
    type: "website",
    url: "https://ocars.app",
    siteName: "OCARS",
  },
  twitter: {
    card: "summary_large_image",
    title: "OCARS — Ride with Right Cars",
    description: "Download Ludo King - The official board game with 1.5 billion downloads. Play with friends and family on iOS and Android.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
