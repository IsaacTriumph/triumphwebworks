import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Triumph Web Works",
    template: "%s | Triumph Web Works",
  },
  description:
    "Placeholder description — Triumph Web Works is a conversion-first web studio for high-value service businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${forum.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
