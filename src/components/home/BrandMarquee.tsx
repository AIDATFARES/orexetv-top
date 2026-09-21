import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.webp", "1.webp", "10-National-Geographic-Channel.webp", "10.webp", "11.webp",
    "13.webp", "14.webp", "15.webp", "16 (1).webp", "17.webp", "2.webp", "20-disney.webp",
    "21.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className="w-full overflow-hidden bg-transparent py-4 relative flex items-center">
      <div
        className={`flex gap-4 md:gap-6 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'}`}
      >
        {repeatList.map((brand, i) => {
          const cleanBrandName = brand.replace(/\.[^/.]+$/, "").replace(/[-_()0-9]/g, " ").trim() || "Live TV Channel";
          return (
            <div 
              key={i} 
              className={cardClassName || "flex-shrink-0 w-[100px] h-[52px] md:w-[130px] md:h-[64px] relative bg-white border border-slate-200 rounded-2xl p-2.5 hover:border-indigo-300 hover:shadow-xs transition-all duration-150"}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image 
                  src={`/${imagesFolder}/${brand}`} 
                  alt={`Watch ${cleanBrandName} live in 4K on OREXETV`} 
                  title={`${cleanBrandName} - OREXETV Live Stream`}
                  fill
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 150px"
                  className={imageClassName || "object-contain rounded-lg"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
