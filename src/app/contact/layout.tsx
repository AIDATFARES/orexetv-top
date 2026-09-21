import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 VIP Customer Support & Free Trial | OREXETV",
  description:
    "Contact OREXETV 24/7 engineering support desk for technical setup assistance, billing questions, or to request your instant free 24-hour test account.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "24/7 VIP Customer Support & Free Trial | OREXETV",
    description:
      "Contact OREXETV 24/7 engineering support desk for technical setup assistance or free trials.",
    url: "https://www.orexetv.top/contact",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/orexetv-tv-mockup.webp",
        width: 1200,
        height: 630,
        alt: "OREXETV 24/7 VIP Support and Free Trial Helpdesk",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
