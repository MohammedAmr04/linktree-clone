import Image from 'next/image';
import NavigationLink from './NavigationLink';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className="fixed top-12 start-43 flex mx-auto w-[82%] items-center z-10 rounded-full bg-white ps-13.5 font-linksans">
      <Image
        className="cursor-pointer"
        width={118}
        height={24}
        src={
          'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg'
        }
        alt="site logo"
      />
      <div className="flex ps-13.5">
        <NavigationLink>Products</NavigationLink>
        <NavigationLink>Templates</NavigationLink>
        <NavigationLink>Marketplace</NavigationLink>
        <NavigationLink>Learn</NavigationLink>
        <NavigationLink>Pricing</NavigationLink>
      </div>
      <div className="ms-auto me-4.5 flex gap-2 my-4.5 items-center">
        <Button
          variant="secondary"
          className="bg-button-1 text-button-2 min-h-16 px-8 py-6 text-[1rem] tracking-[0.01em] font-bold cursor-pointer">
          Log In
        </Button>
        <Button
          variant="default"
          className="bg-button-2 text-button-1 min-h-16.5 px-8 pt-6 pb-6 rounded-full text-[1.3rem] font-semibold tracking-[0.01em] cursor-pointer">
          Sign Up free
        </Button>
      </div>
    </div>
  );
}

export default Header;
