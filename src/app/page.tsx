import HeroSection from '@/src/features/home/components/HeroSection';
import AboutSection from '@/src/features/home/components/AboutSection';
import HallsSection from '../features/home/components/HallsSection';
import BestsellersSection from '../features/home/components/BestsellersSection';
import TestimonialsSection from '../features/home/components/TestimonialsSection';
import DeliverySection from '../features/home/components/DeliverySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HallsSection />
      <BestsellersSection />
      <TestimonialsSection />
      <DeliverySection />
    </>
  );
}
