import { useEffect, useRef, useState } from 'react';
import { FilmGrain } from './FilmGrain';

interface Stat {
  value: string;
  label: string;
  number?: number;
}

const stats: Stat[] = [
  { value: '25+', label: 'Of Photographic Excellence', number: 25 },
  { value: '10,000+', label: 'Happy Clients Served', number: 10000 },
  { value: '500+', label: 'Weddings Captured', number: 500 },
  { value: '4.9 ★', label: 'Average Google Rating', number: 4.9 },
];

export function StatsBar() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#181410] py-12 overflow-hidden"
    >
      <FilmGrain />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[rgba(200,169,110,0.3)]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <div className="font-heading italic text-[clamp(36px,5vw,44px)] text-[#C8A96E] leading-none mb-2">
                {inView ? (
                  <CountUp end={stat.number || 0} suffix={stat.value.includes('+') ? '+' : stat.value.includes('★') ? ' ★' : ''} />
                ) : (
                  '0'
                )}
              </div>
              <p className="font-body text-[10px] tracking-[0.1em] uppercase text-[rgba(245,239,228,0.6)] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  // Format the count
  let displayValue = '';
  if (end >= 1000) {
    displayValue = count >= 1000 ? `${(count / 1000).toFixed(0)},${String(count % 1000).padStart(3, '0')}` : String(count);
  } else {
    displayValue = count === end && end === 4.9 ? '4.9' : String(Math.floor(count));
  }

  return <>{displayValue}{suffix}</>;
}
