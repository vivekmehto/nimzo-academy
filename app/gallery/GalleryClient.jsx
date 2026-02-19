"use client";

import { useState, useMemo } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import LoadMoreButton from "@/components/gallery/LoadMoreButton";
import Lightbox from "@/components/gallery/Lightbox";
import GalleryCTA from "../../components/gallery/GalleryCTA";

const PAGE_SIZE = 14;

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
   const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
   const [lightboxIndex, setLightboxIndex] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
 
   const filteredImages = useMemo(() => {
     if (activeCategory === "All") return galleryImages;
     return galleryImages.filter((img) =>
       img.categories.includes(activeCategory),
     );
   }, [activeCategory]);
 
   const visibleImages = filteredImages.slice(0, visibleCount);
   const hasMore = visibleCount < filteredImages.length;
 
   return (
     <section className="bg-light-100">
       {/* Header */}
       <div className="mx-auto max-w-7xl px-4 py-14">
         <h1 className="text-3xl md:text-4xl font-bold text-(--color-heading-900)">
           Inside Our Chess Academy
         </h1>
 
         <p className="mt-2 max-w-2xl text-gray-600">
           Explore structured training sessions, competitive tournaments, and
           classroom learning moments that help students build focus, confidence,
           and strategic thinking.
         </p>
       </div>
 
       {/* Gallery */}
       <div className="mx-auto max-w-7xl px-4 pb-20">
         <GalleryFilters
           categories={galleryCategories}
           active={activeCategory}
           onChange={(cat) => {
             setActiveCategory(cat);
             setVisibleCount(PAGE_SIZE);
           }}
         />
 
         <div className="relative">
           <MasonryGrid images={visibleImages} onImageClick={setLightboxIndex} />
 
           {hasMore && (
             <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent to-light-100" />
           )}
         </div>
 
         <LoadMoreButton
           hasMore={hasMore}
           isLoading={isLoading}
           onClick={() => {
             setIsLoading(true);
             setTimeout(() => {
               setVisibleCount((v) => v + PAGE_SIZE);
               setIsLoading(false);
             }, 300);
           }}
         />
       </div>
 
       <Lightbox
         images={visibleImages}
         current={lightboxIndex}
         onClose={() => setLightboxIndex(null)}
         onPrev={() =>
           setLightboxIndex((i) => (i === 0 ? visibleImages.length - 1 : i - 1))
         }
         onNext={() =>
           setLightboxIndex((i) => (i === visibleImages.length - 1 ? 0 : i + 1))
         }
       />
 
       <GalleryCTA />
     </section>
   );
 }
 