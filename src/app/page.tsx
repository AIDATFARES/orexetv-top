import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* 50,000+ Premium Live Channels Tape */}
      <div className="w-full bg-slate-50/40 py-10 border-b border-slate-200/70 relative z-20">
        <span className="block text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          50,000+ Premium Live International Channels
        </span>
        <BrandMarquee />
      </div>

      <ChannelCategories />

      <PricingSection />
      <MovieStrips />

      {/* Sports Tape */}
      <div className="w-full bg-slate-50/40 pt-12 pb-4 relative z-20">
        <span className="block text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          All Major Global Sports & Leagues Live in 4K
        </span>
      </div>
      <BrandMarquee
        imagesFolder="chn"
        images={[
          "imggt1.webp",
          "imggt1 (1).webp",
          "imggt1 (2).webp",
          "imggt1 (3).webp",
          "imggt1 (4).webp",
          "imggt1 (5).webp",
          "imggt1 (6).webp",
          "imggt1 (7).webp",
          "imggt1 (8).webp",
          "imggt1 (9).webp",
          "imggt1 (10).webp",
          "imggt1 (11).webp",
          "imggt1 (12).webp"
        ]}
        cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[280px] relative rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200 group p-4"
        imageClassName="object-contain rounded-xl"
      />

      {/* Comprehensive SEO Interlinking Bar */}
      <div className="w-full bg-slate-50/60 py-8 px-4 text-center border-y border-slate-200/70 relative z-20">
        <p className="text-center text-sm md:text-base text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed mb-3">
          Explore the complete <Link prefetch={false} className="font-bold text-indigo-600 hover:underline" href="/channels">50,000+ OREXETV Channel List</Link>, choose an affordable <Link prefetch={false} className="font-bold text-indigo-600 hover:underline" href="/pricing">OrexeTV Subscription Plan</Link>, or follow our <Link prefetch={false} className="font-bold text-indigo-600 hover:underline" href="/installation">Installation Guide</Link> to activate your <span className="font-semibold text-slate-900">OREXETV IPTV</span> connection in under 5 minutes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-slate-500">
          <Link href="/how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</Link>
          <span>·</span>
          <Link href="/reseller" className="hover:text-indigo-600 transition-colors">Reseller Panel Credits</Link>
          <span>·</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Streaming Guides &amp; Blog</Link>
          <span>·</span>
          <Link href="/faq" className="hover:text-indigo-600 transition-colors">Frequently Asked Questions</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">24/7 VIP Support Desk</Link>
        </div>
      </div>

      {/* Comparison & Device Support */}
      <ComparisonSection />
      <DeviceSupport />

      {/* Supported Devices Banner */}
      <div className="w-full bg-white py-12 border-b border-slate-200/70 relative z-10 flex justify-center px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/orexetv-devices-banner.webp"
          alt="Orexetv 4K streaming supported across Firestick, Apple TV, Smart TV, Android, iOS, Windows and MAG devices"
          title="Orexetv Multi-Screen Device Compatibility"
          loading="lazy"
          className="max-w-full h-auto w-full md:w-[1024px] object-contain"
        />
      </div>

      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />

      {/* Social Proof & Conversion */}
      <SupportCtaSection />
    </main>
  );
}
