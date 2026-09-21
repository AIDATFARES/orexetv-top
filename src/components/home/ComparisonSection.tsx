import Link from "next/link";
import { Check, X, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    { feature: "Monthly Cost", orexetv: "From $4.2/mo", cable: "$80 - $200/mo", other: "$10 - $30/mo" },
    { feature: "Live 4K Channels", orexetv: "+50,000 Channels", cable: "150 - 300 Channels", other: "5,000 - 15,000" },
    { feature: "4K & 60 FPS Sports", orexetv: "Native 4K UHD 60FPS", cable: "Limited 1080i", other: "Compressed / Laggy" },
    { feature: "On-Demand VOD", orexetv: "200,000+ Movies & Series", cable: "$6 - $20 Per Rental", other: "Unreliable / Outdated" },
    { feature: "Server Stability", orexetv: "99.9% Anti-Freeze 10.0", cable: "High (Cable line)", other: "Frequent Peak Buffering" },
    { feature: "Long-Term Contract", orexetv: "Zero Contracts", cable: "12 - 24 Months Locked", other: "Varies" },
    { feature: "Setup Time", orexetv: "Under 5 Minutes", cable: "Requires Technician", other: "Complex Setup" },
    { feature: "Multi-Screen Streaming", orexetv: "Included Option", cable: "Extra Box Rental", other: "Single Screen Only" },
    { feature: "24/7 Human Support", orexetv: "Instant WhatsApp Chat", cable: "Automated Call Center", other: "No Live Response" },
  ];

  return (
    <section className="bg-white text-slate-900 py-24 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4 border border-indigo-200/80">
            Smart Cord-Cutting Comparison
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why <span className="text-indigo-600">OREXETV IPTV</span> Beats Traditional Cable & Other Providers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Compare side by side and see why thousands of families are upgrading to{" "}
            <Link href="/pricing" className="font-semibold text-indigo-600 hover:underline">
              OREXETV IPTV plans
            </Link>{" "}
            for superior{" "}
            <Link href="/channels" className="font-semibold text-indigo-600 hover:underline">
              50,000+ live channel content
            </Link>
            , true 4K clarity via{" "}
            <Link href="/how-it-works" className="font-semibold text-indigo-600 hover:underline">
              anti-freeze 10.0 tech
            </Link>
            , and fast{" "}
            <Link href="/installation" className="font-semibold text-indigo-600 hover:underline">
              5-minute setup
            </Link>
            .
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Features & Capabilities</th>
                <th className="py-4 px-6 bg-indigo-50/80 text-indigo-700 text-center border-x border-indigo-200/80">
                  <div className="inline-flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>OREXETV IPTV</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">Traditional Cable TV</th>
                <th className="py-4 px-6 text-center">Low-Grade IPTV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                  <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                  <td className="py-4 px-6 text-center font-bold text-indigo-700 bg-indigo-50/50 border-x border-indigo-200/60">
                    {row.orexetv}
                  </td>
                  <td className="py-4 px-6 text-center text-slate-500">{row.cable}</td>
                  <td className="py-4 px-6 text-center text-slate-400">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="md:hidden space-y-6">
          <div className="rounded-2xl border-2 border-indigo-600 bg-white p-6 shadow-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-indigo-100">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Top Rated</span>
              <h3 className="text-xl font-black text-slate-900">OREXETV</h3>
            </div>
            <div className="space-y-3 text-sm">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-600 text-xs font-medium">{row.feature}</span>
                  <span className="font-bold text-indigo-700 text-xs">{row.orexetv}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-bold text-slate-700 mb-4 pb-2 border-b border-slate-200">
              Traditional Cable TV
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-slate-200/60 last:border-0">
                  <span>{row.feature}</span>
                  <span className="text-slate-500 font-medium">{row.cable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Link Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>Explore all OREXETV plans</span>
            <span>&rarr;</span>
          </Link>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <Link href="/channels" className="text-slate-600 hover:text-indigo-600 transition-colors">
            50,000+ Channels Lineup
          </Link>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <Link href="/installation" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Device Setup Instructions
          </Link>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <Link href="/how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors">
            How Streaming Works
          </Link>
        </div>
      </div>
    </section>
  );
}
