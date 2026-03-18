import { useState } from 'react';
import { FilmGrain } from './FilmGrain';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

interface GalleryProps {
  galleryImages: GalleryImage[];
}

const categories = ['All', 'Weddings', 'Portraits', 'Products', 'Events'];

export function Gallery({ galleryImages }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-[#0E0E0E] py-24 lg:py-32 overflow-hidden">
      <FilmGrain />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.2)] mb-6">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="font-heading italic text-[clamp(40px,6vw,52px)] text-[#F5EFE4] leading-[1.1] mb-4">
            A Life's Work <br />in Every Shot
          </h2>
          <p className="font-body font-light text-[15px] text-[rgba(245,239,228,0.6)] leading-relaxed max-w-xl mx-auto">
            Browse a selection of our finest work — crafted with light, patience, and heart.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-body text-[11px] tracking-[0.1em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#C8A96E] text-[#0E0E0E]'
                  : 'bg-transparent text-[rgba(245,239,228,0.5)] border border-[rgba(200,169,110,0.3)] hover:border-[#C8A96E]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredImages.slice(0, 9).map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ animation: `fadeInBlur 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${image.url})`,
                  filter: 'sepia(0.08)',
                }}
              />

              {/* Sepia overlay - removes on hover */}
              <div className="absolute inset-0 bg-[rgba(200,169,110,0.08)] group-hover:opacity-0 transition-opacity duration-500" />

              {/* Border appears on hover */}
              <div className="absolute inset-0 border-[1.5px] border-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info overlay - slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                  {image.category}
                </p>
                <p className="font-heading italic text-[16px] text-[#F5EFE4]">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded border-[1.5px] border-[#C8A96E] bg-transparent text-[#C8A96E] font-body text-[13px] tracking-[0.08em] hover:bg-[rgba(200,169,110,0.1)] transition-colors duration-300">
            Explore Full Gallery →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInBlur {
          from {
            opacity: 0;
            filter: blur(4px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
