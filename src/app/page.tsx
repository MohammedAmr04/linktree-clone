'use client';
import { useState } from 'react';

import Analytics from '@/components/landingPage/analyticsSection/Analytics';
import LandingHeader from '@/components/landingPage/header/LandingHeader';
import FooterComponent from '@/components/landingPage/footerSection/FooterComponent';
import TrustedBy from '@/components/landingPage/trustedBySection/TrustedBy';
import HeroSection from '@/components/landingPage/heroSection/HeroSection';
import Hero3DProfile from '@/components/landingPage/heroSection/3dProfile/hero3DProfile';
import { ShareSection } from '@/components/landingPage';
import PlansSection from '@/components/landingPage/plansSection/PlansSection';
export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const styleIfDrawerOpen = isDrawerOpen ? 'hidden' : 'block';

  return (
    <div>
      <LandingHeader isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <div className={styleIfDrawerOpen}>
        <HeroSection />
        <Analytics />
        <TrustedBy />
        <PlansSection />
        <ShareSection />
        <FooterComponent />
        <Hero3DProfile />
      </div>
    </div>
  );
}
