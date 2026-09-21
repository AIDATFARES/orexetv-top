import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | OREXETV",
  description: "Learn how OREXETV collects, protects, and handles personal data in accordance with global privacy standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Data We Collect",
    content: [
      <>We collect personal information that you voluntarily provide when you subscribe to our IPTV service, request support, or <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">contact us</Link>. The personal data we collect may include:</>,
    ],
    items: [
      "Contact information: Your email address or WhatsApp contact, used solely for subscription delivery and customer support communications.",
      "Payment data: Transaction reference identifiers required to verify purchases. All financial data is processed securely through encrypted third-party payment gateways; we never store your payment card numbers.",
      "Technical connection details: Anonymized IP addresses and device client identifiers used strictly to manage concurrent connection limits and prevent server abuse.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    content: ["We use the information we collect to:"],
    items: [
      "Provision, maintain, and activate your OREXETV credentials and playlist lines.",
      "Process transactions securely and verify order completion.",
      "Provide customer support and service notifications regarding scheduled server upgrades.",
      "Protect server infrastructure from malicious attacks, unauthorized stream redistribution, and abuse.",
    ],
  },
  {
    title: "3. Legal Bases for Processing",
    content: ["We process your personal information based on legitimate contractual necessity to deliver the ordered streaming service, customer consent, and compliance with applicable data protection requirements."],
  },
  {
    title: "4. Data Retention",
    content: ["We retain account identifiers only for the duration of your active subscription and necessary accounting verification periods, after which records are purged."],
  },
  {
    title: "5. Cookies & Tracking",
    content: ["We only utilize strictly necessary functional session cookies required for core site navigation and device authentication. We do not use third-party behavioral advertising trackers."],
  },
  {
    title: "6. Data Security",
    content: ["We deploy 256-bit SSL encryption and strict server access controls to ensure your account details remain private and confidential."],
  },
  {
    title: "7. Your Rights",
    content: ["You have the right to review, update, or request the deletion of your account contact details at any time by messaging our support desk."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-16 sm:px-8 md:pt-20 text-format-legal bg-white">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-slate-200 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
            Legal Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Privacy Policy &amp; <span className="text-indigo-600">Data Protection</span>
          </h1>
          <p className="mx-auto mt-3 text-xs text-slate-500">Updated for 2026 · OREXETV (www.orexetv.top)</p>
        </header>

        <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          <p>
            Welcome to <strong className="text-slate-900 font-semibold">OREXETV</strong> (&quot;orexetv.top&quot;). We are committed to safeguarding your personal information and respecting your privacy. If you have questions regarding this policy, please <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">contact our support team</Link>.
          </p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
              {section.content.map((paragraph, index) => <p className="mt-2" key={index}>{paragraph}</p>)}
              {section.items && <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-indigo-600">{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">8. Contact Us</h2>
            <p className="mt-2">
              For any questions regarding your data privacy, reach us at <a href="mailto:support@orexetv.top" className="text-indigo-600 font-semibold underline">support@orexetv.top</a> or via our <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">contact form</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
