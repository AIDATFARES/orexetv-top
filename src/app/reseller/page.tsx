import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Become an IPTV Reseller | Start Your IPTV Business - OREXETV",
  description:
    "Join the official OREXETV Reseller Program. High-margin IPTV reseller panel, no expiry credits, sub-reseller creation, and 24/7 dedicated WhatsApp support.",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "Become an IPTV Reseller | Start Your IPTV Business - OREXETV",
    description: "Join the official OREXETV Reseller Program. High-margin IPTV reseller panel, no expiry credits, and 24/7 support.",
    url: "https://www.orexetv.top/reseller",
    siteName: "OREXETV",
    type: "website",
    images: [
      {
        url: "/orexetv-tv-mockup.webp",
        width: 1200,
        height: 630,
        alt: "OREXETV Official Reseller Panel Program",
      },
    ],
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
