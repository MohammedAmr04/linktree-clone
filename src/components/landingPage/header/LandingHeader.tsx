'use client';
import { useState } from 'react';
import Header from './Header';
import LandingNotification from './LandingNotification';

function LandingHeader() {
  const [isBannerVisible, setisBannerVisible] = useState(true);

  return (
    <div>
      <LandingNotification
        isBannerVisible={isBannerVisible}
        setisBannerVisible={setisBannerVisible}
      />
      <Header isBannerVisible={isBannerVisible} />
    </div>
  );
}

export default LandingHeader;
