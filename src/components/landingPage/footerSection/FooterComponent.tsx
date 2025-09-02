import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const footerLinks = [
  {
    title: 'Company',
    subLinks: [
      'Linktree Blog',
      'Engineering Blog',
      'Marketplace',
      "What's New?",
      'About',
      'Press',
      'Careers',
      'Link in Bio',
      'Social Good',
      'Contact',
    ],
  },
  {
    title: 'Community',
    subLinks: [
      'Linktree for Enterprise',
      '2024 Creator Report',
      '2023 Creator Report',
      'Charities',
      "What's Trending?",
      'Creator Profile Directory',
      'Explore Templates',
    ],
  },
  {
    title: 'Support',
    subLinks: [
      'Help Topics',
      'Getting Started',
      'Linktree Pro',
      'Features and How-Tos',
      'FAQs',
      'Report a Violation',
    ],
  },
  {
    title: 'Trust & Legal',
    subLinks: [
      'Terms & Conditions',
      'Privacy Notice',
      'Cookie Notice',
      'Trust Center',
      'Cookie Preferences',
      'Transparency Report',
      'Law Enforcement Access Policy',
    ],
  },
];

const FooterComponent = () => {
  return (
    <section className="bg-[#502274] pb-4 lg:pb-8 relative overflow-hidden">
      <div className="z-10 relative py-[50px] lg:py-[250px] flex flex-col items-center space-y-2 lg:space-y-10">
        <h2 className="text-[8.5vw] lg:text-[56px] leading-[120%] font-bold text-[#E9C0E9] text-center max-w-[14ch] lg:max-w-[28ch]">
          Jumpstart your corner of the internet today
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-2 p-8 lg:p-0 justify-center items-center">
          <div className="relative w-full lg:w-[15%] h-14">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] font-medium text-[4vw] lg:text-[1.14vw]">
              linktr.ee/
            </span>
            <input className="w-full h-full rounded-[.57vw] bg-white ps-21 lg:ps-22 pr-4 text-[#757575] font-medium text-[4vw] lg:text-[1.14vw]" />
          </div>
          <Button variant="sectionBtn" size="sectionBtn" className="bg-[#CEE027] w-max">
            Claim your Linktree
          </Button>
        </div>
      </div>
      <footer className="z-10 w-[90vw] bg-white mx-auto rounded-2xl px-[5vw] py-[10vw] lg:p-16 relative">
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row mb-12">
          {footerLinks.map((fL, i) => (
            <div className="flex-1/4" key={i}>
              <p className="text-[5vw] lg:text-[1.72vw] font-medium mb-4 lg:mb-6">{fL.title}</p>
              <div className="space-y-2 lg:space-y-4">
                {fL.subLinks.map((sL, i) => (
                  <a href="#" className="text-[#676b5f] text-[4vw] lg:text-[.928vw] block" key={i}>
                    {sL}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-2">
            <Button variant="loginBtn" size="loginRegisterButton">
              Login
            </Button>
            <Button variant="registerBtn" size="loginRegisterButton">
              Get started for free
            </Button>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 space-y-2">
            <div className="flex gap-2 ">
              <Button variant="socialBtn" size="socialBtn">
                <img src="/footer/app-store.svg" className="w-[27vw] lg:w-[7.5vw]"></img>
              </Button>
              <Button variant="socialBtn" size="socialBtn">
                <img src="/footer/play-store.svg" className="w-[27vw] lg:w-[7.5vw]"></img>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="socialBtn" size="smallSocialBtn">
                <img src="/footer/linktree.svg"></img>
              </Button>
              <Button variant="socialBtn" size="smallSocialBtn">
                <img src="/footer/instagram.svg"></img>
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-[#e9c0e9] mt-4 lg:mt-8 text-[4vw] lg:text-[1.14vw]">
        &copy; Linktree {new Date().getFullYear()}
      </p>
      <Image
        src="/footer/woman.svg"
        alt="Woman SVG"
        width="536"
        height="829"
        className="absolute top-36 lg:top-4 -left-10 lg:left-18 rotate-[16.42deg] w-[200px] lg:w-[540px]"
      />
      <Image
        src="/footer/flower.svg"
        alt="Flower SVG"
        width="536"
        height="829"
        className="absolute top-60 lg:bottom-64 -right-14 lg:-right-40 w-[200px] lg:w-[540px]"
      />
    </section>
  );
};

export default FooterComponent;
