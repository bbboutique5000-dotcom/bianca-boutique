import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biancaboutique.es"),
  title: "Extensiones de Pestañas en Madrid | Bianca Boutique",
  description:
    "Estudio premium de extensiones de pestañas en Madrid. Lifting, diseño de cejas y maquillaje semipermanente. Más de 3.000 clientas satisfechas. Reserva tu cita hoy.",
  keywords:
    "extensiones de pestañas Madrid, lifting de pestañas Madrid, diseño de cejas Madrid, estudio de belleza Madrid, Bianca Boutique",
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "Extensiones de Pestañas en Madrid | Bianca Boutique",
    description:
      "Estudio premium de extensiones de pestañas en Madrid. Reserva tu cita y transforma tu mirada.",
    type: "website",
    url: "/",
    locale: "es_ES",
    images: [
      {
        url: "/images/final.jpg",
        width: 1200,
        height: 630,
        alt: "Bianca Boutique — Extensiones de Pestañas Premium en Madrid",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Bianca Boutique",
  description:
    "Estudio de extensiones de pestañas y tratamientos de belleza premium en Madrid.",
  url: "https://biancaboutique.es",
  telephone: "+34600000000",
  email: "hola@biancaboutique.es",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de Serrano, 45",
    addressLocality: "Madrid",
    postalCode: "28001",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.4296,
    longitude: -3.6888,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  image: "https://biancaboutique.es/images/final.jpg",
  sameAs: [
    "https://instagram.com/biancaboutique",
    "https://facebook.com/biancaboutique",
    "https://tiktok.com/@biancaboutique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bb-ivory)]">
        {children}
      </body>
    </html>
  );
}
