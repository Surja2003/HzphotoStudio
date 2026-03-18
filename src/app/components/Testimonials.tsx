import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FilmGrain } from './FilmGrain';

interface Testimonial {
  quote: string;
  name: string;
  service: string;
  date: string;
  avatar: string;
  backgroundImage: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative bg-[#0E0E0E] py-24 lg:py-32 overflow-hidden">
      {/* Background Image - changes with testimonial */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${activeTestimonial.backgroundImage})`,
          opacity: 0.08,
        }}
      />

      <FilmGrain />

      <div className="max-w-[1000px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.2)] mb-6">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
              CLIENT STORIES
            </span>
          </div>
          <h2 className="font-heading italic text-[clamp(40px,6vw,52px)] text-[#F5EFE4] leading-[1.1]">
            Heard Through <br />Their Hearts
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#C8A96E] p-1 shadow-xl">
                <div
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeTestimonial.avatar})` }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative">
              {/* Decorative quote mark */}
              <div className="absolute -top-8 -left-4 font-heading text-[120px] text-[rgba(200,169,110,0.12)] leading-none select-none">
                "
              </div>

              <blockquote className="relative font-heading italic text-[clamp(20px,3vw,24px)] text-[#F5EFE4] leading-[1.6] mb-6">
                {activeTestimonial.quote}
              </blockquote>

              <div className="flex flex-col gap-2">
                <cite className="font-body font-semibold text-[14px] text-[#F5EFE4] not-italic">
                  {activeTestimonial.name}
                </cite>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#C8A96E]">
                  {activeTestimonial.service} · {activeTestimonial.date}
                </p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A96E] text-[#C8A96E]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-[#C8A96E] flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0E0E0E] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-[#C8A96E] w-8' : 'bg-[rgba(200,169,110,0.3)]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-[#C8A96E] flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0E0E0E] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
