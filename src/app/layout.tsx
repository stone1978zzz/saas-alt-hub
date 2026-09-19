import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Sparkles, Shield, Github, Search } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenAlt Hub - Best Free & Open-Source SaaS Alternatives (2026)",
  description: "Stop overpaying for software. Discover curated, privacy-first, free, and open-source alternatives to Notion, Zapier, Airtable, Datadog, Slack, and more.",
  keywords: ["SaaS alternatives", "open-source software", "free software", "self-hosted", "Notion alternative", "Zapier alternative", "Airtable alternative"],
  authors: [{ name: "OpenAlt Team" }],
  verification: {
    google: "71BvRYPxQPrplzeLDo111ATovmBhh2fQ9Y0WY6heA7Q",
  },
  openGraph: {
    title: "OpenAlt Hub - The Free & Open-Source SaaS Directory",
    description: "Discover curated, battle-tested open-source alternatives to popular subscription software.",
    url: "https://saas-alt-hub.vercel.app",
    siteName: "OpenAlt Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAlt Hub - Free & Open-Source SaaS Directory",
    description: "Discover curated, battle-tested open-source alternatives to popular subscription software.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span>OpenAlt<span className="text-emerald-600">Hub</span></span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Link href="/" className="hover:text-emerald-600 transition-colors">Directory</Link>
              <Link href="/alternatives/notion-alternatives" className="hover:text-emerald-600 transition-colors">Notion</Link>
              <Link href="/alternatives/zapier-alternatives" className="hover:text-emerald-600 transition-colors">Zapier</Link>
              <Link href="/alternatives/airtable-alternatives" className="hover:text-emerald-600 transition-colors">Airtable</Link>
              <Link href="/alternatives/datadog-alternatives" className="hover:text-emerald-600 transition-colors">Datadog</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-[calc(100vh-16rem)]">
          {children}
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} OpenAlt Hub. Independent directory of open-source and privacy-focused software.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
              <span>Built with Vibe Coding ⚡️</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
