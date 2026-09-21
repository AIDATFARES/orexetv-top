"use client";

import { motion } from "framer-motion";
import { Bolt, Clapperboard, Globe2, Layers3, Monitor, ShieldCheck, Smartphone } from "lucide-react";

const primaryFeatures = [
  { icon: Monitor, title: "4K Ultra HD Streaming", text: "Enjoy your OREXETV subscription with crisp 4K, Full HD, and 60 FPS streams. Advanced anti-freeze technology ensures seamless playback.", tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"] },
  { icon: Layers3, title: "+50,000 Live Channels", text: "Access over 50,000 global live IPTV channels spanning premium sports, international news, kids' programming, and exclusive entertainment networks.", tags: ["150+ COUNTRIES", "SPORTS", "NEWS", "KIDS"] },
  { icon: Clapperboard, title: "200,000+ VODs", text: "Dive into a massive on-demand library featuring over 200,000 movies, hit series, documentaries, and sports replays, updated regularly.", tags: ["120,000+ FILMS", "SERIES", "200,000+ VODS"] },
];

const benefits = [
  { icon: Bolt, title: "Instant Activation", text: "Your OREXETV account activates within minutes." },
  { icon: Smartphone, title: "All Devices Supported", text: "Stream on Smart TVs, Firestick, iOS, and Android." },
  { icon: Globe2, title: "Works Worldwide", text: "Take your OREXETV service anywhere globally." },
  { icon: ShieldCheck, title: "99.9% Server Uptime", text: "Ultra-reliable servers for stable, buffer-free viewing." },
];

export default function WhyOrexetvSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 border-b border-slate-200">
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-700">PREMIUM FEATURES</span>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Everything You Need for the <span className="text-indigo-600">Ultimate OREXETV Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">OREXETV delivers premium live television, sports events, and on-demand entertainment seamlessly.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {primaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex min-h-[285px] flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600"><Icon className="h-5 w-5" /></span>
                <p className="mt-5 text-base font-bold uppercase text-slate-900">{feature.title}</p>
                <p className="mt-3 text-xs leading-5 text-slate-600">{feature.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {feature.tags.map(tag => <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-bold text-slate-600">{tag}</span>)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex min-h-[100px] gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <Icon className="h-5 w-5 shrink-0 text-indigo-600" />
                <span>
                  <span className="block text-sm font-bold text-slate-900">{benefit.title}</span>
                  <small className="mt-0.5 block text-xs text-slate-500">{benefit.text}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
