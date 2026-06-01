import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bianca Boutique | Extensiones de Pestañas Premium",
  description:
    "Bianca Boutique — Estudio de extensiones de pestañas y tratamientos de belleza premium. Reserva tu cita y transforma tu mirada.",
  keywords: "extensiones de pestañas, lifting de pestañas, diseño de cejas, estudio de belleza, Bianca Boutique",
  openGraph: {
    title: "Bianca Boutique | Extensiones de Pestañas Premium",
    description: "Extensiones de pestañas y tratamientos de belleza premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFAFB]">{children}</body>
    </html>
  );
}
