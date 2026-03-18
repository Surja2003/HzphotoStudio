import { ApertureIcon } from './ApertureIcon';
import { FilmGrain } from './FilmGrain';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[rgba(14,14,14,0.30)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,14,0.95)] via-transparent to-transparent" />

      {/* Film Grain */}
      <FilmGrain />

      {/* Filmstrip Decoration - Right Edge */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 border border-[#C8A96E] opacity-30"
            style={{ animation: `fadeIn 0.3s ease-out ${1.5 + i * 0.1}s both` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-[12%] left-[10%] max-w-xl z-20 hero-content">
        {/* Aperture Icon */}
        <div className="mb-10">
          <ApertureIcon size={60} className="text-[#C8A96E]" animate />
        </div>

        {/* Label */}
        <div className="mb-4">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] opacity-0 animate-fadeUp" style={{ animationDelay: '0.5s' }}>
            EST. 1998 · BORING ROAD · PATNA
          </p>
          <div className="w-[60px] h-[1px] bg-[#C8A96E] mt-3 opacity-0 animate-fadeUp" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Heading */}
        <h1 className="font-heading mb-6">
          <div className="text-[clamp(60px,8vw,100px)] font-light italic text-[#F5EFE4] leading-[0.95] opacity-0 animate-slideInLeft" style={{ animationDelay: '0.7s' }}>
            Every Frame
          </div>
          <div className="text-[clamp(60px,8vw,100px)] font-light italic text-[#F5EFE4] leading-[0.95] opacity-0 animate-slideInLeft" style={{ animationDelay: '0.9s' }}>
            Tells a Story
          </div>
        </h1>

        {/* Subtext */}
        <p className="font-body text-[17px] font-light text-[rgba(245,239,228,0.75)] leading-[1.75] max-w-[480px] mb-10 opacity-0 animate-fadeUp" style={{ animationDelay: '1.1s' }}>
          Patna's most trusted studio for portraits, weddings, and memories that last forever.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-fadeUp" style={{ animationDelay: '1.3s' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 h-[56px] rounded bg-[linear-gradient(135deg,#C8A96E,#F0E0A0,#C8A96E)] text-[#0E0E0E] font-body text-[13px] tracking-[0.08em] font-medium hover:shadow-[0_8px_30px_rgba(200,169,110,0.35)] transition-shadow duration-300"
          >
            Book a Session
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 h-[56px] rounded border-[1.5px] border-[#F5EFE4] bg-transparent text-[#F5EFE4] font-body text-[13px] tracking-[0.08em] font-medium hover:bg-[rgba(245,239,228,0.1)] transition-colors duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-[60px] bg-[#C8A96E] animate-pulse" />
          <p
            className="font-body text-[9px] tracking-[0.2em] uppercase text-[#C8A96E] origin-center"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Scroll to Explore
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.3;
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out both;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}