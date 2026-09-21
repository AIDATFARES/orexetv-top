import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | OREXETV",
  description: "Learn about the refund policy, eligibility criteria, and process for OREXETV subscriptions.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  {
    title: "Our Quality Commitment",
    content: [
      <>
        At OREXETV, we stand behind the reliability of our{" "}
        <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/how-it-works">
          anti-freeze streaming infrastructure
        </Link>
        . We offer a transparent, fair refund policy across all{" "}
        <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/pricing">
          OREXETV subscription packages
        </Link>{" "}
        to protect your purchase.
      </>,
    ],
  },
  {
    title: "Refund Eligibility",
    content: ["You may be eligible for a refund under the following conditions:"],
    items: [
      "Unresolvable Technical Faults: If our service experiences an ongoing, unresolvable outage on our server infrastructure lasting 72+ consecutive hours.",
      "Accidental Duplicate Charges: In the event of a verified accidental billing duplicate for the same account period.",
      "Initial 7-Day Guarantee: If our support specialists are unable to assist you in getting your connection running within 7 days of your first purchase.",
    ],
  },
  {
    title: "How to Submit a Request",
    content: ["To request a refund review, please contact us:"],
    items: [
      <>Reach our support specialists via our <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">Contact page</Link> or on WhatsApp.</>,
      "Provide your order email and payment transaction reference ID.",
      "Include a concise summary of the issue encountered and the device/app you are using.",
    ],
  },
  {
    title: "Processing Timeline",
    content: [],
    items: [
      "Review within 24 to 48 hours by our customer care department.",
      "Approved refunds are credited directly to your original payment method.",
      "Bank/card processing typically reflects within 3 to 7 business days depending on your financial institution.",
    ],
  },
  {
    title: "Non-Refundable Circumstances",
    content: ["Refunds are not granted in cases where:"],
    items: [
      "Your internet speed is below minimum streaming requirements (15 Mbps for HD, 30 Mbps for 4K).",
      "Account sharing violations or sharing credentials across unauthorized IP addresses.",
      "Changes of mind after consuming full active subscription periods.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-16 sm:px-8 md:pt-20 text-format-legal bg-white">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-slate-200 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
            Satisfaction Guarantee
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Refund &amp; <span className="text-indigo-600">Cancellation Policy</span>
          </h1>
          <p className="mx-auto mt-3 text-xs text-slate-500">OREXETV (www.orexetv.top)</p>
        </header>

        <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-2" key={i}>{paragraph}</p>)}
              {section.items && <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-indigo-600">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">6. Need Help?</h2>
            <p className="mt-2">
              If you have any questions or require troubleshooting help, please <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">contact our support team</Link>. We are here 24/7.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
