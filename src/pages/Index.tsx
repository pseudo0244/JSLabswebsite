import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FreeBPSection from '@/components/home/FreeBPSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Gallery from '@/components/home/Gallery';
import WorkingHours from '@/components/home/WorkingHours';
import Testimonials from '@/components/home/Testimonials';
import LocationSection from '@/components/home/LocationSection';

const Index = () => {
  return (
    <Layout 
      title="Home" 
      description="JS Labs Diagnostic Center Bengaluru - Accurate diagnostics, fast reports, free home collection. Blood tests, health packages starting at ₹50. Book now!"
    >
      <HeroSection />
      <FreeBPSection />
      <WhyChooseUs />
      <Gallery />
      <WorkingHours />
      <Testimonials />
      <LocationSection />
    </Layout>
  );
};

export default Index;