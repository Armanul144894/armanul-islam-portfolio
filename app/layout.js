import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Md. Armanul Islam — Front-End Developer",
  description:
    "Portfolio of Md. Armanul Islam, a Front-End Developer building responsive, high-performance web applications with React, Next.js and WordPress.",
  openGraph: {
    title: "Md. Armanul Islam — Front-End Developer",
    description:
      "Portfolio of Md. Armanul Islam, a Front-End Developer building responsive, high-performance web applications with React, Next.js and WordPress.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
