import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Disclaimer & DMCA Notice | OREXETV",
  description: "Legal Disclaimer and DMCA copyright infringement notice procedure for OREXETV.",
  alternates: {
    canonical: "/dmca",
  },
};

const sections = [
  {
    title: "Informational Purposes Only",
    content: [
      "Information presented on this website does not constitute legal counsel. Users are responsible for ensuring their personal streaming activities adhere to local laws and regulations.",
    ],
  },
  {
    title: "Content Hosting & Architecture",
    content: [
      "OREXETV provides playlist management interfaces and account credentials. OREXETV does not host, upload, archive, or broadcast media streams on its web servers. Channel streams originate from external media sources accessible across the public internet.",
    ],
  },
  {
    title: "Trademarks & Channel Lineup",
    content: [
      "Channel names, trademarks, and third-party media logos referenced on this site belong exclusively to their respective copyright and trademark owners and are referenced solely for descriptive identification.",
    ],
  },
  {
    title: "DMCA Copyright Takedown Procedure",
    content: [
      "If you are a copyright owner or authorized representative and believe any link or content index infringes your rights, please submit a formal notice containing:",
    ],
    items: [
      "A description of the copyrighted work claimed to have been infringed.",
      "The exact location or URL of the claimed material.",
      "Your full contact details including legal name, address, telephone number, and official email address.",
      "A statement confirming your good-faith belief that the disputed use is not authorized by the copyright owner.",
      "A statement under penalty of perjury that the information in your notice is accurate.",
      "A physical or verifiable electronic signature of the copyright owner or authorized agent.",
    ],
    after: <>Send all copyright notices to <a href="mailto:support@orexetv.top" className="text-indigo-600 underline">support@orexetv.top</a> or via our <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">Contact form</Link>. Verifiable claims will be processed swiftly.</>,
  },
];

export default function DmcaPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-16 sm:px-8 md:pt-20 text-format-legal bg-white">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-slate-200 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
            Legal Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Legal Disclaimer &amp; <span className="text-indigo-600">DMCA Notice</span>
          </h1>
          <p className="mx-auto mt-3 text-xs text-slate-500">OREXETV (www.orexetv.top)</p>
        </header>

        <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
          <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 p-6 text-slate-800">
            <strong className="font-bold text-slate-900 block mb-1">Important Notice:</strong>
            OREXETV provides playlist management software and secure account provisioning. We do not host, store, or transmit proprietary media files on our web servers.
          </div>

          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-2" key={i}>{paragraph}</p>)}
              {section.items && <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-indigo-600">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-3 text-slate-700 font-medium">{section.after}</p>}
            </section>
          ))}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">5. Contact Support</h2>
            <p className="mt-2">
              For any legal or technical compliance inquiries, email <a href="mailto:support@orexetv.top" className="text-indigo-600 font-semibold underline">support@orexetv.top</a> or visit our <Link className="font-semibold text-indigo-600 hover:text-indigo-800" href="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
