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
const title = "Fran Sequeiro — EU Project Manager & Dreams Engineer";
const description =
  "Fran Sequeiro, CEO de Xeración en Ferrol, diseña proyectos europeos de movilidad juvenil, regeneración rural y liderazgo comunitario que conectan lo local con lo europeo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Fran Sequeiro",
    "Xeración",
    "EU project manager",
    "dreams engineer",
    "movilidad juvenil",
    "regeneración rural",
    "proyectos europeos",
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
  icons: {
    icon: "/favicon.ico",
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
