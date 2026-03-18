import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

interface ContactProps {
  studioImage: string;
  preselectedSessionType?: string;
}

export function Contact({ studioImage, preselectedSessionType }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sessionType: '',
    date: '',
    requirements: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (!preselectedSessionType) return;
    setFormData((current) => {
      if (current.sessionType === preselectedSessionType) return current;
      return {
        ...current,
        sessionType: preselectedSessionType,
      };
    });
  }, [preselectedSessionType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative bg-[#181410] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.2)] mb-6">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#C8A96E]">
              BOOK A SESSION
            </span>
          </div>
          <h2 className="font-heading italic text-[clamp(40px,6vw,52px)] text-[#F5EFE4] leading-[1.1] mb-4">
            Let's Create <br />Something Timeless
          </h2>
          <p className="font-body text-[15px] text-[rgba(245,239,228,0.6)] max-w-xl mx-auto">
            Walk in or book in advance — we're ready when you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Booking Form - 55% */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-[22px] text-[#F5EFE4] mb-8">
              Reserve Your Session
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] placeholder-[rgba(245,239,228,0.3)] focus:outline-none focus:border-[#C8A96E] transition-all"
                  placeholder="Full Name"
                  required
                />
                <label
                  htmlFor="contact-name"
                  className={`absolute left-0 transition-all pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'text-[10px] text-[#C8A96E] -top-4'
                      : 'text-[15px] text-[rgba(245,239,228,0.3)] top-0'
                  }`}
                >
                  {focusedField === 'name' || formData.name ? 'FULL NAME' : ''}
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] placeholder-[rgba(245,239,228,0.3)] focus:outline-none focus:border-[#C8A96E] transition-all"
                  placeholder="Phone Number"
                  required
                />
                <label htmlFor="contact-phone" className="sr-only">
                  Phone Number
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] placeholder-[rgba(245,239,228,0.3)] focus:outline-none focus:border-[#C8A96E] transition-all"
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="contact-email" className="sr-only">
                  Email Address
                </label>
              </div>

              {/* Session Type */}
              <div className="relative">
                <label htmlFor="contact-session-type" className="sr-only">
                  Session Type
                </label>
                <select
                  id="contact-session-type"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] focus:outline-none focus:border-[#C8A96E] transition-all appearance-none cursor-pointer"
                  aria-label="Session Type"
                  title="Session Type"
                  required
                >
                  <option value="" className="bg-[#181410] text-[rgba(245,239,228,0.3)]">
                    Session Type
                  </option>
                  <option value="classic" className="bg-[#181410] text-[#F5EFE4]">
                    Classic Package
                  </option>
                  <option value="signature" className="bg-[#181410] text-[#F5EFE4]">
                    Signature Package
                  </option>
                  <option value="premium" className="bg-[#181410] text-[#F5EFE4]">
                    Premium Package
                  </option>
                  <option value="portrait" className="bg-[#181410] text-[#F5EFE4]">
                    Portrait
                  </option>
                  <option value="wedding" className="bg-[#181410] text-[#F5EFE4]">
                    Wedding
                  </option>
                  <option value="product" className="bg-[#181410] text-[#F5EFE4]">
                    Product
                  </option>
                  <option value="passport" className="bg-[#181410] text-[#F5EFE4]">
                    Passport
                  </option>
                  <option value="studio" className="bg-[#181410] text-[#F5EFE4]">
                    Studio Hire
                  </option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="relative">
                <label htmlFor="contact-date" className="sr-only">
                  Preferred Date and Time
                </label>
                <input
                  id="contact-date"
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="contact-datetime w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] focus:outline-none focus:border-[#C8A96E] transition-all"
                  aria-label="Preferred Date and Time"
                  title="Preferred Date and Time"
                  required
                />
              </div>

              {/* Special Requirements */}
              <div className="relative">
                <textarea
                  id="contact-requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-[#2E2A25] pb-3 text-[#F5EFE4] placeholder-[rgba(245,239,228,0.3)] focus:outline-none focus:border-[#C8A96E] resize-none transition-all"
                  placeholder="Special Requirements"
                />
                <label htmlFor="contact-requirements" className="sr-only">
                  Special Requirements
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[56px] rounded bg-[linear-gradient(135deg,#C8A96E,#F0E0A0,#C8A96E)] text-[#0E0E0E] font-body text-[13px] tracking-[0.08em] uppercase font-medium hover:shadow-[0_8px_30px_rgba(200,169,110,0.35)] transition-shadow duration-300"
              >
                Book My Session →
              </button>
            </form>
          </div>

          {/* Right - Contact Info - 45% */}
          <div className="lg:col-span-5 space-y-6">
            {/* Studio Photo */}
            <div className="h-[300px] rounded-xl overflow-hidden relative">
              <img
                src={studioImage}
                alt="Studio"
                className="absolute inset-0 w-full h-full object-cover contact-studio-photo"
              />
            </div>

            {/* Info Cards */}
            <div className="bg-[#1E1B17] rounded-xl p-6 space-y-5 border border-[#2E2A25]">
              {/* Address */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#2E2A25]">
                <MapPin className="w-5 h-5 text-[#C8A96E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[14px] text-[#F5EFE4] leading-relaxed">
                    Boring Road, Patna, Bihar
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#2E2A25]">
                <Phone className="w-5 h-5 text-[#C8A96E] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-body text-[14px] text-[#F5EFE4] mb-2">
                    +91 99999 99999
                  </p>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded bg-[#25D366] text-white text-[11px] font-medium hover:bg-[#20BA5A] transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#2E2A25]">
                <Clock className="w-5 h-5 text-[#C8A96E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[14px] text-[#F5EFE4]">Mon–Sat: 9AM–8PM</p>
                  <p className="font-body text-[14px] text-[#F5EFE4]">Sunday: 10AM–5PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#C8A96E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-[14px] text-[#F5EFE4]">
                    info@hzphotostudio.in
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[200px] rounded-xl border border-[#C8A96E] overflow-hidden bg-[#1E1B17]">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[13px] text-[#C8A96E] hover:text-[#E8D5A8] transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-studio-photo {
          filter: sepia(0.15);
        }

        /* Make the calendar icon visible on dark backgrounds (Chrome/Edge/Safari). */
        .contact-datetime::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.75;
          cursor: pointer;
        }
        .contact-datetime:hover::-webkit-calendar-picker-indicator {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
