import { Check } from 'lucide-react';

interface PricingProps {
  onChoosePackage?: (packageValue: string) => void;
}

interface Package {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const packages: Package[] = [
  {
    name: 'CLASSIC',
    tagline: 'Essentials',
    price: '₹1,500',
    features: [
      '1-hour studio session',
      '20 edited digital photos',
      '1 printed 8×10 portrait',
      'Online gallery delivery',
      '1 backdrop choice',
      'Basic retouching',
      'Ready in 3 days',
    ],
  },
  {
    name: 'SIGNATURE',
    tagline: 'Most Popular',
    price: '₹3,500',
    features: [
      '3-hour studio session',
      '60 edited digital photos',
      '5 premium printed photos',
      '1 framed portrait (12×15)',
      '3 backdrop choices',
      'Advanced skin retouching',
      'Ready in 48 hours',
    ],
    isPopular: true,
  },
  {
    name: 'PREMIUM',
    tagline: 'The Complete Experience',
    price: '₹8,000',
    features: [
      'Full-day coverage',
      'Unlimited edited photos',
      'Premium photo album',
      '3 large framed prints',
      'All backdrops + outdoor option',
      'Same-day preview delivery',
      'Dedicated photographer assigned',
    ],
  },
];

export function Pricing({ onChoosePackage }: PricingProps) {
  const handleChoosePackage = (packageValue: string) => {
    onChoosePackage?.(packageValue);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Fallback: update hash so browser can jump if/when the element exists.
    window.location.hash = '#contact';
  };

  return (
    <section id="pricing" className="relative bg-[#F5EFE4] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[#1A1410] mb-6">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
              PACKAGES
            </span>
          </div>
          <h2 className="font-heading italic text-[clamp(40px,6vw,52px)] text-[#1A1410] leading-[1.1]">
            Invest in Memories <br />That Last Forever
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`pricing-card relative rounded-xl overflow-hidden transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-[#1A1410] border-[1.5px] border-[#C8A96E] shadow-[0_0_40px_rgba(200,169,110,0.2)] scale-105'
                  : 'bg-white border border-[#E8E0D4] hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-[#C8A96E]">
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#0E0E0E] font-bold">
                      MOST CHOSEN
                    </span>
                  </div>
                </div>
              )}

              <div className={`p-8 ${pkg.isPopular ? 'pt-16' : ''}`}>
                {/* Package Name */}
                <p
                  className={`font-body text-[10px] tracking-[0.2em] uppercase mb-2 ${
                    pkg.isPopular ? 'text-[#C8A96E]' : 'text-[#9A8F82]'
                  }`}
                >
                  {pkg.name}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className={`font-heading italic text-[56px] leading-none mb-1 ${
                      pkg.isPopular ? 'text-[#C8A96E]' : 'text-[#1A1410]'
                    }`}
                  >
                    {pkg.price}
                  </div>
                  <p
                    className={`font-body text-[11px] ${
                      pkg.isPopular ? 'text-[rgba(245,239,228,0.6)]' : 'text-[#9A8F82]'
                    }`}
                  >
                    onwards
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-[1px] mb-6 ${
                    pkg.isPopular ? 'bg-[rgba(200,169,110,0.3)]' : 'bg-[#E8E0D4]'
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          pkg.isPopular ? 'text-[#C8A96E]' : 'text-[#C8A96E]'
                        }`}
                      />
                      <span
                        className={`font-body text-[13px] leading-relaxed ${
                          pkg.isPopular ? 'text-[rgba(245,239,228,0.85)]' : 'text-[#6A5F55]'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleChoosePackage(pkg.name.toLowerCase())}
                  className={`w-full h-[52px] rounded font-body text-[13px] tracking-[0.08em] transition-all duration-300 ${
                    pkg.isPopular
                      ? 'bg-[linear-gradient(135deg,#C8A96E,#F0E0A0,#C8A96E)] text-[#0E0E0E] hover:shadow-[0_8px_30px_rgba(200,169,110,0.35)]'
                      : 'border-[1.5px] border-[#C8A96E] bg-transparent text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0E0E0E]'
                  }`}
                >
                  Choose {pkg.name.charAt(0) + pkg.name.slice(1).toLowerCase()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center font-body text-[13px] italic text-[#9A8F82]">
          All packages customizable. Ask about wedding photography rates.
        </p>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pricing-card {
          animation: scaleIn 0.5s ease-out both;
        }

        .pricing-card:nth-child(1) {
          animation-delay: 0s;
        }
        .pricing-card:nth-child(2) {
          animation-delay: 0.15s;
        }
        .pricing-card:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
