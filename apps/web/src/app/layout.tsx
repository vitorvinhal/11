import "../styles/globals.css";
import "monaco-editor/min/vs/editor/editor.main.css";
import { AstroSphere } from "../components/AstroSphere";
import { Providers } from "./providers";
import { ThemeProvider } from "../components/ThemeProvider";
import { ServiceWorkerRegister } from "../components/ServiceWorkerRegister";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";

export const metadata = {
  title: "11 — Inteligência Autônoma",
  description:
    "Autonomia total, multimodelo e execução avançada no padrão Astra.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2.14", sizes: "any" },
      { url: "/favicon-32x32.png?v=2.14", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2.14", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png?v=2.14", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=2.14",
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
          <ServiceWorkerRegister />
          <Providers>{children}</Providers>
          <Analytics />
          <SpeedInsights />
          <div className="noise-overlay" aria-hidden />
        </ThemeProvider>
      </body>
    </html>
  );
}
