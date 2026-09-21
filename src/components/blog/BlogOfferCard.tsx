import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function BlogOfferCard() {
  return (
    <div className="w-full bg-slate-50 rounded-2xl p-6 md:p-8 my-10 border border-slate-200 relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200">
              <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
              Special Promo
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Experience <span className="text-indigo-600">OREXETV</span>
          </h3>
          
          <p className="text-slate-600 text-sm md:text-base mb-0 max-w-2xl leading-relaxed">
            Upgrade your streaming with high-performance, anti-freeze 10.0 infrastructure. Over 50,000 live channels, 4K 60FPS sports, and 200,000+ VODs.
          </p>
        </div>
        
        <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
          <Link 
            href="/pricing"
            className="btn-primary-orexe inline-flex items-center justify-center w-full md:w-auto px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
          >
            View OREXETV Plans
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
