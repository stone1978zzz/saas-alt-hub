import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SAAS_DATABASE } from "@/data/saas-data";
import Link from "next/link";
import { Check, X, ExternalLink, Star, Shield, Server, ArrowLeft, HelpCircle } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SAAS_DATABASE.map((saas) => ({
    slug: saas.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const saas = SAAS_DATABASE.find((s) => s.slug === params.slug);
  if (!saas) return {};

  const currentYear = new Date().getFullYear();
  const title = `Best ${saas.name} Alternatives in ${currentYear} (Free & Open-Source)`;
  const description = `Looking for alternatives to ${saas.name}? Compare the top free, open-source, and self-hosted replacements including ${saas.alternatives.map((a) => a.name).join(", ")}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    alternates: {
      canonical: `https://openalt.dev/alternatives/${saas.slug}`,
    }
  };
}

export default function AlternativePage({ params }: Props) {
  const saas = SAAS_DATABASE.find((s) => s.slug === params.slug);
  if (!saas) notFound();

  const currentYear = new Date().getFullYear();

  // JSON-LD Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Best ${saas.name} Alternatives (${currentYear})`,
    "description": saas.description,
    "itemListElement": saas.alternatives.map((alt, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": alt.name,
        "description": alt.description,
        "applicationCategory": saas.category,
        "operatingSystem": "Web, Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": alt.hasFreeTier ? "0" : "5.00",
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to All Software
      </Link>

      {/* Header Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          {saas.category}
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Best {saas.name} Alternatives in {currentYear}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {saas.description} If you are looking to escape high subscription costs, vendor lock-in, or privacy concerns, here are the best battle-tested alternatives.
        </p>

        {/* Why look for alternatives box */}
        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 mt-6">
          <h2 className="font-semibold text-amber-900 dark:text-amber-300 text-sm flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4" /> Why Teams Are Leaving {saas.name}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-800 dark:text-amber-200">
            {saas.whyLookForAlternatives.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Comparison Matrix Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Comparison Matrix</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Tool</th>
                <th className="p-4">Open Source</th>
                <th className="p-4">Self-Hostable</th>
                <th className="p-4">Free Tier</th>
                <th className="p-4">Starting Price</th>
                <th className="p-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {saas.alternatives.map((alt) => (
                <tr key={alt.slug} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {alt.name}
                    {alt.stars && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-normal flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {alt.stars}
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    {alt.isOpenSource ? (
                      <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                        <Check className="w-4 h-4 mr-1" /> Yes
                      </span>
                    ) : (
                      <span className="text-slate-400">No</span>
                    )}
                  </td>
                  <td className="p-4">
                    {alt.isSelfHostable ? (
                      <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                        <Check className="w-4 h-4 mr-1" /> Yes
                      </span>
                    ) : (
                      <span className="text-slate-400">No</span>
                    )}
                  </td>
                  <td className="p-4">
                    {alt.hasFreeTier ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Yes</span>
                    ) : (
                      <span className="text-slate-400">Paid Only</span>
                    )}
                  </td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{alt.startingPrice}</td>
                  <td className="p-4 text-xs text-slate-500 max-w-xs">{alt.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deep-Dive Cards */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Detailed Alternatives Review</h2>

        <div className="space-y-8">
          {saas.alternatives.map((alt, idx) => (
            <div
              key={alt.slug}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{alt.name}</h3>
                    {alt.isOpenSource && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 font-medium">
                        Open Source
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{alt.tagline}</p>
                </div>

                <a
                  href={alt.affiliateUrl || alt.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all"
                >
                  Visit {alt.name} <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {alt.description}
              </p>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Pros</div>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {alt.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Cons</div>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {alt.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Pricing:</span> {alt.startingPrice}
                </div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Ideal for:</span> {alt.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {saas.faqs.length > 0 && (
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {saas.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{faq.question}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
