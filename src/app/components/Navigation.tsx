import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ApertureIcon } from './ApertureIcon';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Gallery', 'About', 'Pricing', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181410]/95 backdrop-blur-[20px] border-b border-[rgba(200,169,110,0.2)]'
          : 'bg-transparent'
      }`}
      style={{ height: '76px' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <ApertureIcon size={28} className="text-[#C8A96E]" />
          <div className="flex flex-col">
            <span className="font-heading italic text-[22px] text-[#F5EFE4] leading-none">
              HZ
            </span>
            <span className="font-body text-[9px] tracking-[0.2em] text-[#C8A96E] uppercase leading-none mt-0.5">
              photo Studio
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[10px] tracking-[0.2em] uppercase text-[rgba(245,239,228,0.7)] hover:text-[#C8A96E] transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#C8A96E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden lg:flex items-center gap-2 px-7 h-[46px] rounded border border-[#C8A96E] bg-transparent text-[#F5EFE4] font-body text-[13px] tracking-[0.08em] hover:bg-[linear-gradient(135deg,#C8A96E,#F0E0A0,#C8A96E)] hover:text-[#0E0E0E] transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          Book a Session
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#C8A96E] w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0E0E0E] z-40 pt-24 px-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-[14px] tracking-[0.2em] uppercase text-[#F5EFE4] border-l-2 border-[#C8A96E] pl-6 py-2 hover:text-[#C8A96E] transition-colors"
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="mt-4 flex items-center justify-center gap-2 px-7 h-[56px] rounded bg-[linear-gradient(135deg,#C8A96E,#F0E0A0,#C8A96E)] text-[#0E0E0E] font-body text-[13px] tracking-[0.08em] font-medium"
            >
              <Phone className="w-4 h-4" />
              Book a Session
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </nav>
  );
}