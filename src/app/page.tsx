import Analytics from '@/components/landingPage/analyticsSection/Analytics';
import LandingHeader from '@/components/landingPage/header/LandingHeader';
import TiltedPreview from '@/components/landingPage/heroSection/TiltedPreview';
import TrustedBy from '@/components/landingPage/trustedBySection/TrustedBy';

export default function Home() {
  return (
    <div className="">
      <LandingHeader />
      <Analytics />
      <TrustedBy />
      <TiltedPreview />
    </div>
  );
}
