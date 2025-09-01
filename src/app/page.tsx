import Analytics from '@/components/landingPage/analyticsSection/Analytics';
import Header from '@/components/landingPage/header/Header';
import TrustedBy from '@/components/landingPage/trustedBySection/TrustedBy';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Analytics />
      <TrustedBy />
    </div>
  );
}
