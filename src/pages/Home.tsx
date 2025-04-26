
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import QuoteSection from '@/components/home/QuoteSection';
import InfiniteCarousel from '@/components/home/InfiniteCarousel';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <InfiniteCarousel />
    </>
  );
};

export default Home;
