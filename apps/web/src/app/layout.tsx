import "../styles/globals.css";
import { AstroSphere } from "../components/AstroSphere";
import { Providers } from "./providers";
import { ThemeProvider } from "../components/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";
import { ServiceWorkerRegister } from "../components/ServiceWorkerRegister";
import { ReactNode } from "react";

export const metadata = {
  title: "11 — Inteligência Autônoma",
  description:
    "Autonomia total, multimodelo e execução avançada no padrão Astra.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-astro-dark text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <div className="aurora-bg" aria-hidden />
          <div className="vignette" aria-hidden />
          <AstroSphere />
          <ThemeToggle />
          <ServiceWorkerRegister />
          <Providers>{children}</Providers>
          <div className="noise-overlay" aria-hidden />
        </ThemeProvider>
      </body>
    </html>
  );
}
