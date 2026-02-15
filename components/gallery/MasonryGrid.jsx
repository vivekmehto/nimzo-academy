import Masonry from "react-masonry-css";
import Image from "next/image";

const breakpoints = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  0: 2, // mobile → 2 columns (important)
};

export default function MasonryGrid({ images, onImageClick }) {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((img, index) => (
        <div
          key={img.id}
          className="group cursor-pointer animate-fade-in"
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />

            {/* hover caption (desktop only) */}
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 text-sm font-medium tracking-wide text-white">{img.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
