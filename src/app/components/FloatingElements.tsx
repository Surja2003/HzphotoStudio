import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-[#1A1410] shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            aria-label="Book on WhatsApp"
          >
            {/* Gold ring border with pulse */}
            <div className="absolute inset-0 m-[3px] rounded-full border-2 border-[#C8A96E] animate-pulse" />
            
            {/* WhatsApp icon */}
            <MessageCircle className="w-7 h-7 text-[#25D366] z-10" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-[#1A1410] border border-[#C8A96E] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="font-body text-[11px] text-[#F5EFE4] tracking-wide">
                Book on WhatsApp
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-6 z-50 w-12 h-12 rounded-full bg-[#C8A96E] flex items-center justify-center text-[#0E0E0E] shadow-xl hover:shadow-2xl hover:bg-[#E8D5A8] transition-all duration-300 animate-fadeIn"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call Studio - Left Edge Vertical */}
      <a
        href="tel:+919999999999"
        className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-[#1A1410] border-l-2 border-[#C8A96E] px-4 py-6 hover:bg-[#C8A96E] hover:text-[#0E0E0E] transition-all duration-300 group writing-vertical"
      >
        <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] group-hover:text-[#0E0E0E]">
          Call Studio
        </span>
      </a>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .writing-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
}
