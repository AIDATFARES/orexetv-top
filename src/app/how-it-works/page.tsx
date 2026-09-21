import HowItWorksSection from "@/components/home/HowItWorksSection";
import Link from "next/link";
import { ShieldCheck, Zap, Phone, MonitorSmartphone, Globe2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "How It Works | OREXETV Streaming Setup",
  description: "Learn how easy it is to set up and start streaming with OREXETV. Our 3-step process gets you watching 50,000+ live 4K channels and VODs in minutes.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works | OREXETV Streaming Setup",
    description: "Learn how easy it is to set up and start streaming with OREXETV. Our 3-step process gets you watching 50,000+ live 4K channels in minutes.",
    url: "https://www.orexetv.top/how-it-works",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/orexetv-setup-step-1.jpg",
        width: 1200,
        height: 630,
        alt: "How OREXETV Works - 3-Step Quick Streaming Setup",
      },
    ],
  },
};

export default function HowItWorksPage() {
  return (
    <main className="flex-col flex min-h-screen bg-white">
      {/* Page Hero Header */}
      <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 border-b border-slate-200 bg-slate-50/50">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4 border border-indigo-200">
            Simple 3-Step Setup
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Start IPTV Streaming in <span className="text-indigo-600">Under 5 Minutes</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Cutting the cord has never been easier. No satellite dishes to mount, no technician visits, and zero long-term contracts.
            Select an{" "}
            <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">
              OREXETV IPTV subscription plan
            </Link>
            , receive your credentials, and follow our{" "}
            <Link href="/installation" className="text-indigo-600 font-semibold hover:underline">
              device setup guide
            </Link>{" "}
            to start watching over{" "}
            <Link href="/channels" className="text-indigo-600 font-semibold hover:underline">
              50,000+ live channels
            </Link>{" "}
            immediately.
          </p>
        </div>
      </section>

      {/* The Core Timeline Section */}
      <div className="bg-white">
        <HowItWorksSection />
      </div>

      {/* Why Choose OREXETV - Pill Grid */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10">
            Why Choose <span className="text-indigo-600">OREXETV</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/pricing" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <ShieldCheck className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Secure &amp; encrypted checkout</span>
            </Link>

            <Link href="/installation" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <Zap className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Instant delivery within 5 minutes</span>
            </Link>

            <Link href="/contact" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <Phone className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">24/7 dedicated WhatsApp support</span>
            </Link>

            <Link href="/installation" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <MonitorSmartphone className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Compatible with all major devices</span>
            </Link>

            <Link href="/channels" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <Globe2 className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">150+ countries coverage</span>
            </Link>

            <Link href="/pricing" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all group">
              <CheckCircle2 className="text-indigo-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">No contracts or hidden fees</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Solid Clean CTA Block */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Streaming?
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get instant access to 50,000+ live channels, 200,000+ films and series, and live 4K sports on OREXETV.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20OREXETV." 
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-clean w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              Get Free Trial on WhatsApp
            </a>
            <Link 
              href="/pricing" 
              className="btn-primary-orexe w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
            >
              View Subscription Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
