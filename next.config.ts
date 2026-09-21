import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Article 1: Sports Streaming (Direct 301 from all legacy slugs)
      {
        source: "/blog/best-iptv-setup-for-sports-streaming",
        destination: "/blog/best-iptv-sports-setup-4k",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-sports-streaming-setup",
        destination: "/blog/best-iptv-sports-setup-4k",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-nba-games-live-2026",
        destination: "/blog/best-iptv-sports-setup-4k",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-nba-live-stream-iptv",
        destination: "/blog/best-iptv-sports-setup-4k",
        permanent: true,
      },

      // Article 2: Firestick Setup & Optimization (Direct 301 from all legacy slugs)
      {
        source: "/blog/iptv-on-firestick",
        destination: "/blog/how-to-setup-iptv-on-firestick",
        permanent: true,
      },
      {
        source: "/blog/how-to-install-setup-iptv-firestick",
        destination: "/blog/how-to-setup-iptv-on-firestick",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-2026",
        destination: "/blog/how-to-setup-iptv-on-firestick",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players",
        destination: "/blog/how-to-setup-iptv-on-firestick",
        permanent: true,
      },

      // Article 3: Apple TV 4K Setup (Direct 301 from all legacy slugs)
      {
        source: "/blog/iptv-on-apple-tv",
        destination: "/blog/how-to-setup-iptv-apple-tv-4k",
        permanent: true,
      },
      {
        source: "/blog/how-to-setup-iptv-on-apple-tv",
        destination: "/blog/how-to-setup-iptv-apple-tv-4k",
        permanent: true,
      },

      // Article 4: Internet Speed Requirements (Direct 301 from all legacy slugs)
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/internet-speed-for-iptv-streaming",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-requirements-for-iptv",
        destination: "/blog/internet-speed-for-iptv-streaming",
        permanent: true,
      },

      // Article 5: Black Screen Audio Fix (Direct 301 from all legacy slugs)
      {
        source: "/blog/iptv-black-screen-but-audio-works",
        destination: "/blog/iptv-black-screen-with-audio-fix",
        permanent: true,
      },
      {
        source: "/blog/fix-iptv-black-screen-with-sound-audio",
        destination: "/blog/iptv-black-screen-with-audio-fix",
        permanent: true,
      },
      {
        source: "/blog/iptv-channel-switching-slow",
        destination: "/blog/iptv-black-screen-with-audio-fix",
        permanent: true,
      },
      {
        source: "/blog/fix-slow-iptv-channel-switching-zapping",
        destination: "/blog/iptv-black-screen-with-audio-fix",
        permanent: true,
      },

      // Legacy general buying guides
      {
        source: "/blog/how-to-choose-the-best-iptv-service-2026",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-service-buying-guide-2026",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
