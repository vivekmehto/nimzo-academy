import Image from "next/image";

export default function Lightbox({ images, current, onClose, onPrev, onNext }) {
  if (current === null) return null;

  const img = images[current];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ✕
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 text-white text-3xl"
      >
        ‹
      </button>

      <div className="max-w-5xl px-4 text-center">
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          className="mx-auto max-h-[80vh] w-auto object-contain"
        />
        <p className="mt-4 text-sm text-gray-300">
          {img.caption}
        </p>
      </div>

      <button
        onClick={onNext}
        className="absolute right-6 text-white text-3xl"
      >
        ›
      </button>
    </div>
  );
}
