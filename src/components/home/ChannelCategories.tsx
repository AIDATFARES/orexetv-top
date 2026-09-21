import Link from "next/link";
import { Monitor, Layers, Film, Zap, Smartphone, Globe2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ChannelCategories() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD STREAMING",
      desc: "Enjoy every channel and live event in stunning 4K, Full HD, and 60 FPS HD. OREXETV anti-freeze technology ensures smooth, buffer-free playback on any screen.",
      tags: ["4K UHD", "60 FPS", "ANTI-FREEZE"],
      href: "/how-it-works",
      linkText: "Learn about our streaming technology",
    },
    {
      icon: Layers,
      title: "50,000+ LIVE CHANNELS",
      desc: "Access over 50,000 live international channels covering sports, news, documentaries, and entertainment networks from more than 150 countries worldwide.",
      tags: ["150+ COUNTRIES", "LIVE SPORTS", "NEWS & KIDS"],
      href: "/channels",
      linkText: "Explore complete channels list",
    },
    {
      icon: Film,
      title: "200,000+ MOVIES & SERIES",
      desc: "Explore a massive on-demand VOD catalog featuring blockbuster cinema, entire television series, and multi-language audio and subtitle tracks.",
      tags: ["DAILY UPDATES", "MULTI-AUDIO", "VOD 4K"],
      href: "/channels",
      linkText: "Browse on-demand movie catalog",
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "Receive your account details within minutes after order placement.",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      desc: "Works seamlessly on Smart TV, Firestick, Android, iOS, and PC.",
    },
    {
      icon: Globe2,
      title: "Global Coverage",
      desc: "Stream anywhere in the world on any standard internet connection.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Server Uptime",
      desc: "Load-balanced server clusters engineered for peak live-sport traffic.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-20 sm:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4 border border-indigo-200/80">
            Next-Gen Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need for the <br className="hidden md:block" />
            <span className="text-indigo-600">Ultimate OREXETV Experience</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Engineered from the ground up for stability, speed, and premium variety. Explore our{" "}
            <Link href="/channels" className="font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 hover:decoration-indigo-600">
              50,000+ live channel lineup
            </Link>
            , check our{" "}
            <Link href="/pricing" className="font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 hover:decoration-indigo-600">
              subscription plans
            </Link>
            , or see how to{" "}
            <Link href="/installation" className="font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 hover:decoration-indigo-600">
              install on your device
            </Link>
            .
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col gap-5">
          
          {/* Top Row: 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-2xl bg-slate-50/60 border border-slate-200/90 p-7 sm:p-8 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-4 flex-grow">
                    {feature.desc}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 mb-5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                    {feature.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {bottomFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-xl bg-slate-50/50 border border-slate-200/80 p-5 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interlinking Strip */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-600">
          Ready to cut the cord?{" "}
          <Link href="/pricing" className="font-bold text-indigo-600 hover:text-indigo-800 underline">
            Compare subscription prices
          </Link>{" "}
          or discover{" "}
          <Link href="/how-it-works" className="font-bold text-indigo-600 hover:text-indigo-800 underline">
            how easy it is to start streaming
          </Link>
          .
        </div>

      </div>
    </section>
  );
}
