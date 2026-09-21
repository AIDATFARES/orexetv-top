import { Monitor, Smartphone, Tv, Box, Wifi, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  const devices = [
    {
      icon: Tv,
      title: "Smart TVs",
      desc: "Samsung Tizen, LG webOS, Android TV, Google TV, Sony & TCL.",
    },
    {
      icon: Box,
      title: "Streaming Sticks & Boxes",
      desc: "Amazon Firestick 4K, Apple TV 4K, MAG, Nvidia Shield & Xiaomi Box.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Tablets",
      desc: "iPhone, iPad, Android phones, Samsung Galaxy & tablets on the go.",
    },
    {
      icon: Monitor,
      title: "PCs & Consoles",
      desc: "Windows 11, macOS, Linux, Web browsers & IPTV players.",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Modern Image Showcase */}
          <div className="w-full lg:flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <Image
                src="/orexetv-compatible-devices.webp"
                alt="OREXETV multi-device streaming compatibility for Firestick, Apple TV 4K, Smart TV, Android, iOS and PC"
                title="OREXETV Supported Streaming Devices & Platforms"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Trust Floater Badge */}
            <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white py-2.5 px-4 rounded-full shadow-md border border-slate-200 flex items-center gap-2.5">
              <div className="bg-emerald-100 p-1.5 rounded-full">
                <Wifi className="text-emerald-600" size={16} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xs text-slate-800">Zero-Buffer AntiFreeze 10.0</span>
            </div>
          </div>

          {/* Right Side: Information & Grid */}
          <div className="w-full lg:flex-1 space-y-6">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4 border border-indigo-200/80">
                Universal Compatibility
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
                Stream <span className="text-indigo-600">OREXETV</span> on Any Screen
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                OrexeTV is engineered to deliver fluid 4K streaming across all your household hardware.
                Whether relaxing in the living room watching{" "}
                <Link href="/channels" className="font-semibold text-indigo-600 hover:underline">
                  50,000+ live sports and movies
                </Link>{" "}
                or streaming on mobile devices, enjoy crystal-clear playback without hardware limitations.
                Choose a{" "}
                <Link href="/pricing" className="font-semibold text-indigo-600 hover:underline">
                  multi-screen subscription plan
                </Link>{" "}
                to connect multiple rooms at once, or consult our{" "}
                <Link href="/installation" className="font-semibold text-indigo-600 hover:underline">
                  step-by-step setup guides
                </Link>
                .
              </p>
            </div>

            {/* Device Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {devices.map((d, idx) => {
                const Icon = d.icon;
                return (
                  <Link
                    key={idx}
                    href="/installation"
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all block group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm mb-1">{d.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/installation"
                className="w-full sm:w-auto btn-primary-orexe py-3.5 px-7 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-center"
              >
                View Step-by-Step Setup Guides &rarr;
              </Link>
              <Link
                href="/channels"
                className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors text-center"
              >
                Browse 50,000+ Channels
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
