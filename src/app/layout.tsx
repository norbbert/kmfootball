import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kmfootball.pl"),
  title: "KMFootball – Szkółka Piłkarska | Trener Krzysztof Możdzonek",
  description:
    "Profesjonalna szkółka piłkarska dla dzieci i młodzieży w Warszawie. Treningi prowadzi Krzysztof Możdzonek – były zawodnik m.in. Widzewa Łódź i reprezentant Polski U18/U19.",
  keywords: [
    "szkółka piłkarska Warszawa",
    "treningi piłki nożnej dzieci",
    "trener piłki nożnej Warszawa",
    "KMFootball",
    "Krzysztof Możdzonek",
  ],
  openGraph: {
    title: "KMFootball – Szkółka Piłkarska w Warszawie",
    description:
      "Profesjonalne treningi piłki nożnej dla dzieci i młodzieży. Prowadzi Krzysztof Możdzonek – były zawodnik Widzewa Łódź i reprezentant Polski U18/U19.",
    url: "https://kmfootball.pl",
    siteName: "KMFootball",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KMFootball – Szkółka Piłkarska w Warszawie",
    description:
      "Profesjonalne treningi piłki nożnej dla dzieci i młodzieży. Prowadzi Krzysztof Możdzonek.",
  },
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
