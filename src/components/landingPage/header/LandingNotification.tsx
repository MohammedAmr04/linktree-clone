'use client';
import Link from 'next/link';

function LandingNotification({
  isBannerVisible,
  setisBannerVisible,
}: {
  isBannerVisible: boolean;
  setisBannerVisible: (value: boolean) => void;
}) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      setisBannerVisible(false);
    }
  });

  return (
    <div
      className={`w-full bg-[#d2e823] text-[#254f1a
] text-center lg:px-4 px-2 relative justify-center items-center font-linksans lg:text-[1rem] text-[0.875rem] ${
        isBannerVisible ? 'flex' : 'hidden'
      }`}>
      <div className="flex flex-wrap justify-center items-center py-5">
        <p>Time to convert clicks into customers.</p>
        <span className="hidden md:visible">&nbsp;</span>
        <Link href="google.com" className="underline">
          Linktree’s new growth tools are here!
        </Link>
      </div>
      <div className="absolute end-2 cursor-pointer" onClick={() => setisBannerVisible(false)}>
        <span className="text-2xl font-thin">&times;</span>
      </div>
    </div>
  );
}

export default LandingNotification;
