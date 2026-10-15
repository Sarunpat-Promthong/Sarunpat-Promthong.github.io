import type { Metadata, Viewport } from "next";
// Fonts are bundled from npm (Fontsource), so the build never needs to reach Google Fonts.
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-sans-thai/400.css";
import "@fontsource/ibm-plex-sans-thai/500.css";
import "./globals.css";

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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
