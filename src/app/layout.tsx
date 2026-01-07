// layout.tsx

import React from "react";
import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: '--font-orbitron'
});
const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-rajdhani'
});

export const metadata: Metadata = {
  title: "DRAC'S POKEDEX",
  description: "A stunning, interactive Pokédex with advanced search, detailed stats visualization, and a captivating dark gaming aesthetic.",
  keywords: ["Pokemon", "Pokedex", "Next.js", "React", "Cyberpunk"],
  icons: {
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
