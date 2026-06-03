import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KMFootball – Szkółka Piłkarska",
  description:
    "Profesjonalna szkółka piłkarska dla dzieci i młodzieży. Treningi z pasją, rozwój z głową.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
