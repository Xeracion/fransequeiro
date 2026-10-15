import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const siteUrl = "https://fransequeiro.com";
const title = "Fran Sequeiro — Gestión de proyectos europeos (Erasmus+, Interreg, Creative Europe, LIFE)";
const description =
  "¿Te han aprobado un proyecto europeo? Fran Sequeiro, CEO de Xeración, lo gestiona de principio a fin: socios, movilidades, justificación económica e informes. Más de 15 proyectos ejecutados.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Fran Sequeiro",
    "Xeración",
    "gestión de proyectos europeos",
    "EU project manager",
    "Erasmus+",
    "Interreg",
    "Creative Europe",
    "LIFE",
    "justificación económica proyectos europeos",
    "Ferrol",
  ],
  authors: [{ name: "Fran Sequeiro" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Fran Sequeiro",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
