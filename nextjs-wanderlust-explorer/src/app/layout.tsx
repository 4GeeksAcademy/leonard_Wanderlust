import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { FavoritesProvider } from "@/context/FavoritesContext";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Discover and save curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <FavoritesProvider>
          <div className="app-shell">
            <Navbar />
            {children}
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
