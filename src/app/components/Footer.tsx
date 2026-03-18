import { Instagram, Facebook, Youtube, Star } from 'lucide-react';
import { ApertureIcon } from './ApertureIcon';
import { FilmGrain } from './FilmGrain';

export function Footer() {
  const services = [
    'Wedding Photography',
    'Portrait Sessions',
    'Product Photography',
    'Passport Photos',
    'Photo Printing',
    'Studio Hire',
  ];

  const quickLinks = ['About Us', 'Our Gallery', 'Pricing', 'Contact', 'Book Session', 'Careers'];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Star, label: 'Google Reviews', href: '#' },
  ];

  return (
    <footer className="relative bg-[#080806] text-[#F5EFE4] overflow-hidden">
      {/* Top gradient line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent" />

      <FilmGrain />

      <div className="max-w-[1200px] mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ApertureIcon size={36} className="text-[#C8A96E]" />
              <div className="flex flex-col">
                <span className="font-heading italic text-[20px] text-[#F5EFE4] leading-none">
                  HZ photo Studio
                </span>
              </div>
            </div>

            <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[rgba(200,169,110,0.6)] mb-4">
              Since 1998 · Boring Road, Patna
            </p>

            <p className="font-body text-[13px] text-[rgba(245,239,228,0.5)] leading-relaxed mb-6">
              Capturing Bihar's most precious moments for 25 years.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[rgba(200,169,110,0.08)] flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#080806] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.15em] uppercase text-[#C8A96E] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="font-body text-[13px] text-[rgba(245,239,228,0.6)] hover:text-[#C8A96E] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.15em] uppercase text-[#C8A96E] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-body text-[13px] text-[rgba(245,239,228,0.6)] hover:text-[#C8A96E] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-body text-[12px] tracking-[0.15em] uppercase text-[#C8A96E] mb-4">
              Newsletter
            </h4>
            <p className="font-body text-[13px] text-[rgba(245,239,228,0.6)] mb-6 leading-relaxed">
              Get photography tips & exclusive offers
            </p>

            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] placeholder-[rgba(245,239,228,0.3)] focus:outline-none focus:border-[#C8A96E] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded bg-[#C8A96E] text-[#080806] font-body text-[12px] tracking-[0.08em] uppercase font-medium hover:bg-[#E8D5A8] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E1B17] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-[rgba(245,239,228,0.3)]">
            © 2025 HZ photo Studio. All Rights Reserved.
          </p>
          <p className="font-body text-[11px] tracking-[0.1em] uppercase text-[rgba(245,239,228,0.3)]">
            Photography · Printing · Framing
          </p>
        </div>
      </div>
    </footer>
  );
}
