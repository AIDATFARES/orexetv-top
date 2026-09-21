import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | OREXETV Service & Setup",
  description:
    "Find answers to common questions about OREXETV subscriptions, device compatibility, anti-freeze technology, channel line-up, and payment methods.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | OREXETV Service & Setup",
    description:
      "Find answers to common questions about OREXETV subscriptions, device compatibility, and anti-freeze technology.",
    url: "https://www.orexetv.top/faq",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/orexetv-compatible-devices.webp",
        width: 1200,
        height: 630,
        alt: "OREXETV Frequently Asked Questions & Device Compatibility",
      },
    ],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
