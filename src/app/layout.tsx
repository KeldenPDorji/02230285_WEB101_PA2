// layout.tsx

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drac's Project",
  description: "God's Plan.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        {/* Add any head elements here */}
      </head>
      <body className={inter.className}>
        {children}
        <Toaster /> {/* Add the Toaster component here */}
      </body>
    </html>
  );
}

export default RootLayout;
