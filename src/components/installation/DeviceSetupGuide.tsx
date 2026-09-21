"use client";

import Link from "next/link";
import { Apple, Box, ChevronDown, Download, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "IBO Player, Smart IPTV, or IPTV Smarters Pro", note: "Samsung Tizen TVs commonly use IBO Player or Smart IPTV, while LG webOS TVs support IPTV Smarters Pro and IBO Player." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Amazon Firestick 4K Setup", app: "TiviMate or IPTV Smarters Pro", note: "Download Downloader from the Amazon Appstore, install your favorite player (TiviMate recommended), and sign in using your OREXETV credentials." },
  { id: "android", label: "Android TV & Box", icon: Smartphone, title: "Android TV & Android Box Setup", app: "TiviMate or IPTV Smarters Pro", note: "Install your player from the Google Play Store and enter the Xtream Codes API details supplied in your welcome message." },
  { id: "ios", label: "iOS (iPhone & iPad)", icon: Apple, title: "Apple iOS Setup", app: "IPTV Smarters Player or GSE Smart IPTV", note: "Install a compatible player from the Apple App Store and enter the server details from your welcome message." },
  { id: "mag", label: "MAG Device", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Provide your MAG MAC address (00:1A:79:...) to OREXETV support on WhatsApp so we can authorize your portal before you connect." },
  { id: "enigma", label: "Enigma2 & PC", icon: Satellite, title: "Enigma2 & Windows/Mac Setup", app: "VLC Player, IPTV Smarters PC or XtreamTV", note: "Use the M3U playlist file in VLC or enter your Xtream Codes parameters into the desktop IPTV player." },
];

const faqs = [
  { question: "1. How do I configure OREXETV on a Smart TV?", answer: <>Install a player application such as IBO Player or IPTV Smarters from your TV&apos;s app store. Open the app and input the M3U playlist URL or Xtream Codes credentials (Server, Username, Password) from your <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">welcome email</Link>.</> },
  { question: "2. Where do I find my M3U URL and Xtream credentials?", answer: <>Your connection credentials are sent to your WhatsApp and email immediately after checkout. <Link href="/contact" className="text-indigo-600 font-semibold hover:underline">Contact our support desk</Link> if you need them resent.</> },
  { question: "3. How can I ensure zero buffering during live sports?", answer: <>We recommend connecting your streaming device via Ethernet cable where possible, or using 5GHz Wi-Fi with at least 25 Mbps download speed. Our streams run on <Link href="/how-it-works" className="text-indigo-600 font-semibold hover:underline">anti-freeze 10.0 servers</Link> designed for peak traffic.</> },
  { question: "4. How do I set up OREXETV using Xtream Codes API?", answer: <>Choose &apos;Login with Xtream Codes API&apos; inside your player. Enter any name, then copy the Server URL, Username, and Password provided with your <Link href="/pricing" className="text-indigo-600 font-semibold hover:underline">OREXETV plan</Link>.</> },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: <>Yes. MAG boxes and STB emulators can be activated using their MAC address. Message our <Link href="/contact" className="text-indigo-600 font-semibold hover:underline">support team on WhatsApp</Link> to bind your device.</> },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-24">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Choose Your Streaming Device
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Select your platform below for customized step-by-step instructions.
        </p>
      </header>

      {/* Device Selector Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                active 
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-xs" 
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
              }`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Instructions Card */}
      <article className="mx-auto max-w-[1000px] rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-slate-100 pb-6 mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 shrink-0">
            <DeviceIcon className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{device.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Follow these simple steps to configure your {device.label} for <strong className="text-slate-900">OREXETV</strong>.
            </p>
          </div>
        </div>
        
        {/* Important Note Box */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-indigo-200/80 bg-indigo-50/60 p-5 flex items-start gap-3.5">
            <HelpCircle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-800 mb-1">Recommended Player & Tip</h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps */}
        <div className="space-y-4">
          <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              1
            </span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Install Player App</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Open your device&apos;s application store, search for <strong>{device.app}</strong>, and download it.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              2
            </span>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Input Login Credentials</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Open the application, choose &quot;Xtream Codes API&quot; or &quot;Load M3U Playlist&quot;, and enter your credentials from your welcome message.
              </p>
              <div className="mt-3 p-3 rounded-xl bg-white border border-slate-200 font-mono text-xs text-slate-700">
                <span className="font-bold text-indigo-600 mr-2">Server & Credentials:</span>
                Provided in your OREXETV welcome email / WhatsApp
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              3
            </span>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Enjoy 4K Streaming</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save your connection. The player will download all 50,000+ live channels and 200,000+ VOD titles with full EPG program guide.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Installation FAQ */}
      <div className="mx-auto mt-20 max-w-[1000px]">
        <h2 className="mb-8 text-center text-2xl sm:text-3xl font-extrabold text-slate-900">
          Setup FAQ
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs" key={faq.question}>
              <div className="flex items-start gap-3 mb-2">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {faq.question}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
