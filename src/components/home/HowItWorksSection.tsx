import Image from "next/image";
import Link from "next/link";
import { CreditCard, KeyRound, PlayCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "Step 01",
      icon: CreditCard,
      title: "1. Choose Your OREXETV Plan",
      desc: (
        <>
          Select your desired duration and simultaneous connections from our{" "}
          <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">
            subscription pricing table
          </Link>
          . Enjoy instant activation, zero long-term contracts, and full access to our entire streaming catalog.
        </>
      ),
      image: "/orexetv-setup-step-1.jpg",
      alt: "Select your OREXETV subscription duration and connections",
    },
    {
      num: "Step 02",
      icon: KeyRound,
      title: "2. Receive Instant Setup Credentials",
      desc: (
        <>
          Within minutes of ordering, your personalized M3U playlist URL and Xtream Codes API login are delivered to your WhatsApp and email. Have questions? Our{" "}
          <Link href="/contact" className="text-indigo-600 font-semibold hover:underline">
            24/7 support desk
          </Link>{" "}
          is always standing by.
        </>
      ),
      image: "/orexetv-setup-step-2.jpg",
      alt: "Receive instant OREXETV Xtream Codes credentials and M3U playlist URL",
    },
    {
      num: "Step 03",
      icon: PlayCircle,
      title: "3. Connect Your Favorite App & Enjoy",
      desc: (
        <>
          Follow our{" "}
          <Link href="/installation" className="text-indigo-600 font-semibold hover:underline">
            step-by-step device guides
          </Link>{" "}
          for Firestick, Smart TV, Apple TV, or mobile. Start streaming over{" "}
          <Link href="/channels" className="text-indigo-600 font-semibold hover:underline">
            50,000+ live 4K channels
          </Link>{" "}
          and 200,000+ VOD titles immediately!
        </>
      ),
      image: "/orexetv-setup-step-3.jpg",
      alt: "Start 4K live TV and sports streaming with OREXETV on any device",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs tracking-wider uppercase mb-4 border border-indigo-200/80">
            Effortless Setup
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How to Start Streaming With <span className="text-indigo-600">OREXETV</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Get your IPTV service up and running in under 5 minutes. No satellite dish, no technician visits, and no complicated hardware.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`space-y-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="inline-flex items-center gap-2">
                    <span className="bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                  {idx === 0 && (
                    <a
                      href="#pricing"
                      className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800"
                    >
                      View Pricing Plans &rarr;
                    </a>
                  )}
                  {idx === 2 && (
                    <Link
                      href="/installation"
                      className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800"
                    >
                      Explore Installation Guides &rarr;
                    </Link>
                  )}
                </div>

                <div className={`overflow-hidden rounded-2xl border border-slate-100 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    title={step.alt}
                    width={600}
                    height={380}
                    className="w-full h-64 object-cover hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
