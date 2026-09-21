import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50,000+ Live Channels & 200,000+ VODs | OREXETV Catalog",
  description:
    "Explore the complete OREXETV channel lineup. Over 50,000 premium live international sports, news, and entertainment channels in 4K & Full HD.",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "50,000+ Live Channels & 200,000+ VODs | OREXETV Catalog",
    description:
      "Explore the complete OREXETV channel lineup. Over 50,000 premium live international sports, news, and entertainment channels in 4K.",
    url: "https://www.orexetv.top/channels",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/blog/best-iptv-sports-setup-4k.jpg",
        width: 1200,
        height: 675,
        alt: "OREXETV 50,000+ Channels & Live Sports Lineup",
      },
    ],
  },
};

export default function ChannelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
