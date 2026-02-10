import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";


// Configuração da fonte principal
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Chakra",
});

// Configuração da fonte de dados
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "LEONARDO | High-Octane Dev",
  description: "Computer Science & Hardware Automation Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} ${mono.variable} antialiased bg-void text-white selection:bg-neon selection:text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}