import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OREXETV Blog & Streaming Insights 2026",
  description:
    "Explore in-depth 4K streaming tutorials, IPTV player reviews, device setup guides, and troubleshooting fixes from the OREXETV engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "OREXETV Blog & Streaming Insights 2026",
    description:
      "Explore in-depth 4K streaming tutorials, IPTV player reviews, and device setup guides from OREXETV.",
    url: "https://www.orexetv.top/blog",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/orexetv-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "OREXETV Blog - 4K Streaming Tutorials & Guides",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
