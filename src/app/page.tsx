import Link from "next/link";
import { SAAS_DATABASE } from "@/data/saas-data";
import { Search, ArrowRight, ShieldCheck, Sparkles, Server, Zap, DollarSign, Database, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated for 2026: The Anti-Subscription Directory</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Stop Overpaying for SaaS. <br className="hidden sm:inline" />
            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Free & Open-Source</span> Alternatives.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Curated, self-hostable, and budget-friendly alternatives to expensive tools like Notion, Zapier, Airtable, and Datadog. Keep your data and ditch the recurring monthly bills.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Privacy Focused</span>
            <span className="flex items-center gap-1"><Server className="w-4 h-4 text-emerald-500" /> Self-Hostable Options</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-emerald-500" /> Free Tiers Available</span>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Popular SaaS Replacements</h2>
            <p className="text-slate-500 text-sm mt-1">Browse alternatives by the tool you want to replace</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAAS_DATABASE.map((saas) => (
            <Link
              key={saas.slug}
              href={`/alternatives/${saas.slug}`}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {saas.category}
                  </span>
                  <span className="text-xs text-rose-500 font-medium">
                    from {saas.pricingStartsAt}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {saas.name} Alternatives
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                  {saas.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-xs text-slate-400 mb-2 font-medium">Top Alternatives:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {saas.alternatives.map((alt) => (
                      <span
                        key={alt.slug}
                        className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/40"
                      >
                        {alt.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                Explore {saas.alternatives.length} Alternatives <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Comparison Box */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-8 sm:p-12 text-white shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold">Why Switch to Open-Source?</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Traditional SaaS traps your team in compounding monthly subscriptions and vendor lock-in. Open-source tools give you total ownership: self-host on your own infrastructure, customize code to your exact workflow, and eliminate software inflation forever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
