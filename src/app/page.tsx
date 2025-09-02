'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

import Analytics from '@/components/landingPage/analyticsSection/Analytics';
import LandingHeader from '@/components/landingPage/header/LandingHeader';
import TiltedPreview from '@/components/landingPage/heroSection/TiltedPreview';
import FooterComponent from '@/components/landingPage/footerSection/FooterComponent';
import TrustedBy from '@/components/landingPage/trustedBySection/TrustedBy';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const styleIfDrawerOpen = isDrawerOpen ? 'hidden' : 'block';

  return (
    <div>
      <LandingHeader isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <div className={styleIfDrawerOpen}>
        <Analytics />
        <TrustedBy />
        <TiltedPreview />
        <FooterComponent />
      </div>
    </div>
  );
}
