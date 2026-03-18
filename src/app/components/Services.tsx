import { Camera, Frame, Package, CreditCard, Printer, Video } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  image: string;
}

interface ServicesProps {
  serviceImages: {
    wedding: string;
    portrait: string;
    product: string;
    passport: string;
    printing: string;
    studio: string;
  };
}

export function Services({ serviceImages }: ServicesProps) {
  const services: Service[] = [
    {
      icon: <Camera className="w-8 h-8" />,
      name: 'Wedding Photography',
      description: 'Full-day coverage, edited albums',
      image: serviceImages.wedding,
    },
    {
      icon: <Frame className="w-8 h-8" />,
      name: 'Portrait Sessions',
      description: 'Individual, family & professional',
      image: serviceImages.portrait,
    },
    {
      icon: <Package className="w-8 h-8" />,
      name: 'Product Photography',
      description: 'E-commerce & catalog shoots',
      image: serviceImages.product,
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      name: 'Passport & ID Photos',
      description: 'Instant, accepted worldwide',
      image: serviceImages.passport,
    },
    {
      icon: <Printer className="w-8 h-8" />,
      name: 'Photo Printing & Framing',
      description: 'All sizes, premium paper stocks',
      image: serviceImages.printing,
    },
    {
      icon: <Video className="w-8 h-8" />,
      name: 'Studio Hire',
      description: 'Professional backdrop & lighting setup',
      image: serviceImages.studio,
    },
  ];

  return (
    <section id="services" className="relative bg-[#F5EFE4] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[#1A1410] mb-6">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="font-heading italic text-[clamp(40px,6vw,56px)] text-[#1A1410] leading-[1.1] max-w-2xl mx-auto">
            Moments We Are <br />Trained to Capture
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-[#E8E0D4] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(200,169,110,0.15)] transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.12}s both` }}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    filter: 'sepia(0.3) brightness(0.95)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Top accent bar - appears on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8A96E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Icon */}
                <div className="w-16 h-16 -mt-12 mb-4 rounded-full bg-[#F5EFE4] border-2 border-[#C8A96E] flex items-center justify-center text-[#C8A96E] shadow-lg">
                  {service.icon}
                </div>

                <h3 className="font-serif text-[20px] text-[#1A1410] mb-2 leading-tight">
                  {service.name}
                </h3>
                <p className="font-body text-[13px] text-[#6A5F55] leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block font-body text-[11px] tracking-[0.1em] uppercase text-[#C8A96E] hover:text-[#E8D5A8] transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
