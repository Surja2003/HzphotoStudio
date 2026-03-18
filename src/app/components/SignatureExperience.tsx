import { ApertureIcon } from './ApertureIcon';
import { FilmGrain } from './FilmGrain';

interface SignatureExperienceProps {
  backgroundImage: string;
}

export function SignatureExperience({ backgroundImage }: SignatureExperienceProps) {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(14,14,14,0.75)]" />

      {/* Film Grain */}
      <FilmGrain />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
        <ApertureIcon size={40} className="text-[#C8A96E] mb-8" />

        <blockquote className="font-heading italic text-[clamp(36px,5vw,52px)] text-[#F5EFE4] leading-[1.3] max-w-3xl mb-6">
          "We don't just take photographs — <br className="hidden md:block" />we make heirlooms."
        </blockquote>

        <div className="flex items-center gap-6 mb-2">
          <div className="w-10 h-[1px] bg-[#C8A96E]" />
          <cite className="font-body text-[12px] tracking-[0.2em] uppercase text-[#C8A96E] not-italic">
            — HZ photo Studio, Since 1998
          </cite>
          <div className="w-10 h-[1px] bg-[#C8A96E]" />
        </div>
      </div>
    </section>
  );
}
