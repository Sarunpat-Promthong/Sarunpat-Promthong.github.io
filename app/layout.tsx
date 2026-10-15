import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--nf-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const thai = IBM_Plex_Sans_Thai({
  variable: "--nf-thai",
  subsets: ["thai"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sarunpat Promthong · Software developer",
  description:
    "Software developer in Thailand building web, mobile and backend with Next.js, React Native, TypeScript and Node.js.",
  openGraph: {
    title: "Sarunpat Promthong · Software developer",
    description: "Web, mobile and backend developer. Case study: Hipsbook online course platform.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${thai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
