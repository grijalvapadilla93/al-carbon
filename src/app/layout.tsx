import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Al Carbón | Sabor que Enciende los Sentidos",
  description:
    "La maestría del fuego y la selección de cortes más exclusiva de Jalapa. Una experiencia nocturna de prestigio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface-dim text-on-surface font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
