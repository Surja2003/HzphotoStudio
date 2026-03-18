import { FilmGrain } from './FilmGrain';

interface AboutProps {
  studioImage: string;
  interiorImage: string;
  teamImages: string[];
}

export function About({ studioImage, interiorImage, teamImages }: AboutProps) {
  return (
    <section id="about" className="relative bg-[#181410] py-24 lg:py-32 overflow-hidden">
      <FilmGrain />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content - 55% */}
          <div className="lg:col-span-7">
            <div className="inline-block px-6 py-2 rounded-full bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.2)] mb-6">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
                OUR STORY
              </span>
            </div>

            <h2 className="font-heading italic text-[clamp(38px,5vw,52px)] text-[#F5EFE4] leading-[1.1] mb-8">
              25 Years of Capturing <br />Patna's Most Precious Moments
            </h2>

            <div className="space-y-6 mb-8">
              <p className="font-body font-light text-[15px] text-[rgba(245,239,228,0.75)] leading-[1.8]">
                Founded in 1998 on Boring Road, HZ photo Studio began as a single-room portrait studio with one camera and a dream. Today we operate a full professional setup with 4 photographers and a complete lab.
              </p>

              <p className="font-body font-light text-[15px] text-[rgba(245,239,228,0.75)] leading-[1.8]">
                We have photographed over 500 weddings, 10,000+ portraits, and served every major institution in Patna. Our prints hang in homes, offices, and hearts across Bihar.
              </p>
            </div>

            <div className="w-20 h-[1px] bg-[#C8A96E] mb-8" />

            {/* Team Profile Row */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {teamImages.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-full border-2 border-[#181410] overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="font-body text-[13px] text-[rgba(245,239,228,0.7)] hover:text-[#C8A96E] transition-colors"
              >
                Meet our 4-member team of <br />professional photographers →
              </a>
            </div>

            <a
              href="#contact"
              className="inline-block font-body text-[13px] tracking-[0.08em] text-[#C8A96E] hover:text-[#E8D5A8] transition-colors relative group"
            >
              Our Story →
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8A96E] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Right Image Composition - 45% */}
          <div className="lg:col-span-5 relative">
            {/* Main Frame */}
            <div className="relative rounded-lg overflow-hidden border-[4px] border-[#C8A96E] shadow-2xl">
              <div
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url(${studioImage})` }}
              />

              {/* Decorative corner brackets */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#E8D5A8]" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#E8D5A8]" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#E8D5A8]" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#E8D5A8]" />
            </div>

            {/* Overlapping smaller frame */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-lg overflow-hidden border-[3px] border-[#C8A96E] shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center grayscale"
                style={{ backgroundImage: `url(${interiorImage})` }}
              />
            </div>

            {/* Year badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C8A96E] flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="font-body text-[9px] tracking-[0.1em] uppercase text-[#0E0E0E] leading-none">
                  EST.
                </div>
                <div className="font-heading italic text-[20px] text-[#0E0E0E] leading-none">
                  1998
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
