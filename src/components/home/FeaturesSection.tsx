"use client";

import { Monitor, Layers, Film, Zap, Smartphone, Globe, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD STREAMING",
      desc: "Enjoy every channel and live event in stunning 4K, Full HD, and 60 FPS HD. OREXETV anti-freeze technology ensures smooth streaming on any device.",
    },
    {
      icon: Layers,
      title: "50,000+ LIVE CHANNELS",
      desc: "Access over 50,000 live channels covering sports, news, and premium entertainment. Every broadcast is delivered in crystal-clear quality.",
    },
    {
      icon: Film,
      title: "200,000+ MOVIES & SERIES",
      desc: "Explore a massive VOD library featuring the latest movies, hit series, and documentaries—available on demand with your OREXETV subscription.",
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant Setup",
      desc: "Your subscription is activated within minutes.",
    },
    {
      icon: Smartphone,
      title: "All Devices Supported",
      desc: "Smart TV, Android, iOS, Mac, Fire Stick, PC, and more.",
    },
    {
      icon: Globe,
      title: "Works Worldwide",
      desc: "Enjoy OREXETV anywhere on any standard internet connection.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime",
      desc: "Reliable servers with stable, buffer-free streaming.",
    },
  ];

  return (
    <section className="py-20 bg-white relative z-10 border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase mb-4">
            Premium Features
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Everything You Need for the{" "}
            <span className="block text-indigo-600">Ultimate OREXETV Experience</span>
          </h2>
        </div>

        {/* Top Row — 3 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 flex flex-col gap-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 font-bold text-base tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Row — 4 smaller cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bottomFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/60 rounded-xl p-5 flex flex-col gap-2.5 border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 font-bold text-sm tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
