import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

export default function MovieStrips() {
  const movieImages = [
    "7R05LaU8Em2zN0LaAqEZMVCx3wb.webp",
    "8iFUWLKBAWDrJ9rOunscgIDrGQ1.webp",
    "Lanterns-S01E.jpg",
    "Mutiny-2026.jpg",
    "OBX-S05.jpg",
    "SMBND-2026-5.jpg",
    "c987gxFjXqYOxZEZKcTkS1ONTWH.webp",
    "hFborW6HmffKL05GIWlkTFdvVpN.webp",
    "iLhi3wqsLOdHB61vySJRm7y09XS.webp",
    "iwCeOpuBtuTP1kLosqgniey5OvX.webp",
    "zqxIT48mWFsC4NSjGEHAcp1pjEo.webp",
    "فيلم-Demon-Slayer-Infinity-Castle-2025-مترجم.jpg",
    "فيلم-Evil-Dead-Burn-2026-مترجم.jpg",
    "فيلم-The-Last-House-2026-مترجم.jpg",
    "مسلسل-From-الموسم-الرابع-مترجم-كامل.jpg",
    "مسلسل-House-of-The-Dragon-الموسم-الثالث.jpg",
    "مسلسل-Reacher-الموسم-الرابع-مترجم-كامل.jpg"
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-20 border-b border-slate-200/80 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-6 px-4 z-20">
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold tracking-wider uppercase mb-4">
          Endless Entertainment On Demand
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Massive On-Demand <span className="text-indigo-600">VOD Library</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
          Access over 200,000 films and series. From current Hollywood cinema and binge-worthy global series to classic favorites, all in pristine 4K and Full HD resolution with multiple subtitle tracks.
        </p>
        <Link 
          href="/channels"
          className="btn-primary-orexe inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase"
        >
          View OREXETV Channel List &rarr;
        </Link>
      </div>

      {/* Brand Logos Tape */}
      <div className="z-20 w-full mb-8">
        <span className="block text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          50,000+ Premium Live Channels
        </span>
        <BrandMarquee />
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="w-full mb-3 z-20">
        <span className="block text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
          200,000+ Latest Movies & Series
        </span>
      </div>
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '32s' }}>
          {[...movieImages, ...movieImages, ...movieImages].map((img, i) => {
            const cleanMovieTitle = img.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim();
            return (
              <div key={i} className="flex-shrink-0 w-[160px] h-[220px] md:w-[220px] md:h-[300px] relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-200">
                <Image 
                  src={`/movie_new/${img}`} 
                  alt={`Watch ${cleanMovieTitle} on-demand in 4K on OREXETV`} 
                  title={`${cleanMovieTitle} - OREXETV 4K VOD`}
                  fill 
                  sizes="(max-width: 640px) 240px, 340px" 
                  className="object-cover" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
