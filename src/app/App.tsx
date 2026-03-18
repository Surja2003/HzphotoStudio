import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { SignatureExperience } from './components/SignatureExperience';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  const [preselectedSessionType, setPreselectedSessionType] = useState<string>('');

  // Gallery images with categories
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1772945492325-2fc6528cb547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMHJvbWFudGljfGVufDF8fHx8MTc3Mzc3MDkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
      title: 'Eternal Moments',
    },
    {
      url: 'https://images.unsplash.com/photo-1648046016726-9260b555902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzM4NTI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
      title: 'Editorial Grace',
    },
    {
      url: 'https://images.unsplash.com/photo-1700342390961-51ae04f4de02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZmxhdCUyMGxheSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3Mzg1MjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Products',
      title: 'Product Excellence',
    },
    {
      url: 'https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGUlMjByb21hbnRpY3xlbnwxfHx8fDE3NzM3NTY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
      title: 'Sacred Union',
    },
    {
      url: 'https://images.unsplash.com/photo-1763739906688-5442c171b056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMHJvbWFudGljJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NDc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
      title: 'Love Captured',
    },
    {
      url: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
      title: 'Professional Edge',
    },
    {
      url: 'https://images.unsplash.com/photo-1665884304530-0788a0d5b7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGV0YWlscyUyMHJpbmdzJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzM3ODc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
      title: 'Details Matter',
    },
    {
      url: 'https://images.unsplash.com/photo-1627913759066-2f62eb9bbaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzM4NTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Weddings',
      title: 'Ceremonial Beauty',
    },
    {
      url: 'https://images.unsplash.com/photo-1772497902018-0840935568b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portraits',
      title: 'Family Bonds',
    },
  ];

  // Service images
  const serviceImages = {
    wedding: 'https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGUlMjByb21hbnRpY3xlbnwxfHx8fDE3NzM3NTY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    portrait: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    product: 'https://images.unsplash.com/photo-1689525665283-1937ca14f051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBsaWZlc3R5bGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzg1MjgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    passport: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    printing: 'https://images.unsplash.com/photo-1745848038063-bbb6fc8c8867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4NTI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    studio: 'https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzg1MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  // Testimonials
  const testimonials = [
    {
      quote:
        'HZ photo Studio captured our wedding beautifully. Every photo tells a story, and the team was so professional and warm. These memories will last forever.',
      name: 'Priya & Rahul Sharma',
      service: 'Wedding Photography',
      date: 'March 2024',
      avatar: 'https://images.unsplash.com/photo-1763739906688-5442c171b056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMHJvbWFudGljJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NDc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      backgroundImage:
        'https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGUlMjByb21hbnRpY3xlbnwxfHx8fDE3NzM3NTY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote:
        'Best portrait session ever! The photographer made me feel so comfortable, and the final photos exceeded my expectations. Highly recommend for professional headshots.',
      name: 'Amit Kumar',
      service: 'Portrait Photography',
      date: 'January 2024',
      avatar: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      backgroundImage:
        'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      quote:
        'HZ photo Studio has been our family photographer for years. Their quality is unmatched and they always deliver on time. Thank you for preserving our precious moments!',
      name: 'Sunita Devi',
      service: 'Family Portrait',
      date: 'December 2023',
      avatar: 'https://images.unsplash.com/photo-1772497902018-0840935568b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      backgroundImage:
        'https://images.unsplash.com/photo-1772497902018-0840935568b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navigation />
      
      <main>
        <Hero
          heroImage="https://images.unsplash.com/photo-1593428653882-387235717c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwb3J0cmFpdCUyMGdvbGRlbiUyMGhvdXIlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3Mzg1Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080"
        />
        
        <StatsBar />
        
        <Services serviceImages={serviceImages} />
        
        <Gallery galleryImages={galleryImages} />
        
        <SignatureExperience
          backgroundImage="https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3JraW5nJTIwYmVoaW5kJTIwc2NlbmVzJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczODUyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        />
        
        <About
          studioImage="https://images.unsplash.com/photo-1765248149704-35abb1272430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZWxlZ2FudCUyMHN0dWRpb3xlbnwxfHx8fDE3NzM3NjE4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          interiorImage="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzg1MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          teamImages={[
            'https://images.unsplash.com/photo-1759503406984-4f6695352a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjB0ZWFtfGVufDF8fHx8MTc3Mzg1MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzQwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODUyODAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
          ]}
        />
        
        <Pricing onChoosePackage={setPreselectedSessionType} />
        
        <Testimonials testimonials={testimonials} />
        
        <Contact
          studioImage="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzg1MjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          preselectedSessionType={preselectedSessionType}
        />
      </main>
      
      <Footer />
      
      <FloatingElements />
    </div>
  );
}
