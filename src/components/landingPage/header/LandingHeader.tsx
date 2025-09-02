'use client';
import { useState } from 'react';
import Header from './Header';
import LandingNotification from './LandingNotification';

function LandingHeader({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) {
  const [isBannerVisible, setisBannerVisible] = useState(true);

  return (
    <div>
      <LandingNotification
        isBannerVisible={isBannerVisible}
        setisBannerVisible={setisBannerVisible}
      />
      <Header
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isBannerVisible={isBannerVisible}
      />
    </div>
  );
}

export default LandingHeader;
