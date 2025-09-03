'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import NavigationLink from './NavigationLink';
import { Button } from '@/components/ui/button';
import {} from 'lucide-react';
import HeaderDrawer from './HeaderDrawer';
function Header({
  isBannerVisible,
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isBannerVisible: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY]);

  return (
    <div className="flex justify-center w-full">
      <div
        className={`fixed ${
          isBannerVisible ? 'lg:top-28 top-24' : 'lg:top-12 top-6'
        } flex mx-auto lg:w-[82%] w-[90%] items-center z-10 rounded-full bg-white 2xl:ps-13.5 ps-6 font-linksans transition-transform duration-700 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-150'
        }`}>
        <div className="2xl:ms-0 ms-2 hidden sm:block">
          <Image
            className="cursor-pointer"
            width={window.innerWidth > 1024 ? 118 : 80}
            height={window.innerWidth > 1024 ? 24 : 16}
            src={
              'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg'
            }
            alt="site logo"
          />
        </div>
        <div className="sm:hidden visible">
          <Image
            className="cursor-pointer"
            width={25}
            height={25}
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b48ad59add9f2777bb76f_download-2.svg"
            alt="site logo"></Image>
        </div>
        <div className="2xl:ps-13.5 ps-6 hidden lg:flex">
          <NavigationLink>Products</NavigationLink>
          <NavigationLink>Templates</NavigationLink>
          <NavigationLink>Marketplace</NavigationLink>
          <NavigationLink>Learn</NavigationLink>
          <NavigationLink>Pricing</NavigationLink>
        </div>
        <div className="ms-auto me-4.5 flex gap-2 md:my-4.5 my-1.5 items-center">
          <Button
            variant="secondary"
            className="bg-button-1 text-button-2 2xl:min-h-16 min-h-12 2xl:px-8 md:py-6 py-3 md:px-6 px-3 2xl:text-[1rem] md:text-[0.875rem] text-[0.75rem] tracking-[0.01em] font-bold cursor-pointer rounded-[6px]">
            Log In
          </Button>
          <Button
            variant="default"
            className="bg-button-2 text-button-1 2xl:min-h-16.5 min-h-12 2xl:px-8 2xl:pt-6 2xl:pb-6 md:px-4 px-3 pt-3 pb-3 rounded-full 2xl:text-[1.3rem] md:text-[1rem] text-[0.75rem] font-semibold tracking-[0.01em] cursor-pointer">
            Sign Up free
          </Button>
          <svg
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-text-align-justify-icon lucide-text-align-justify lg:hidden lg:me-7 cursor-pointer lg:ms-5 md:ms-4 ms-3 md:me-5 me-4">
            <path d="M3 5h18" />
            <path d="M3 12h18" />
            <path d="M3 19h18" />
          </svg>
        </div>
      </div>
      {isDrawerOpen && (
        <HeaderDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      )}
    </div>
  );
}

export default Header;
