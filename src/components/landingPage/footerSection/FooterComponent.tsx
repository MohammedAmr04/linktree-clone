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
    <section className="bg-[#502274] pb-8 relative">
      <div className="relative z-10 py-[250px] flex flex-col items-center space-y-10">
        <h2 className="text-[56px] font-bold text-[#E9C0E9] text-center ">
          Jumpstart your corner of the<br></br>internet today
        </h2>
        <div className="w-full flex gap-2 justify-center">
          <input
            className="w-[15%] h-14 rounded-[.57vw] bg-white p-4"
            placeholder="linktr.ee/"></input>
          <Button variant="sectionBtn" size="sectionBtn" className="bg-[#CEE027]">
            Claim your Linktree
          </Button>
        </div>
      </div>
      <footer className="w-[90vw] bg-white mx-auto rounded-2xl p-16 relative z-10">
        <div className="flex mb-12">
          {footerLinks.map((fL) => (
            <div className="flex-1/4">
              <p className="text-[1.72vw] font-medium mb-6">{fL.title}</p>
              <div className="space-y-4">
                {fL.subLinks.map((sL) => (
                  <a href="#" className="text-[#676b5f] text-[.928vw] block">
                    {sL}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="loginBtn" size="loginRegisterButton">
              Login
            </Button>
            <Button variant="registerBtn" size="loginRegisterButton">
              Get started for free
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="socialBtn" size="socialBtn">
              <span className="text-white">...</span>
            </Button>
          </div>
        </div>
      </footer>
      <Image
        src="/woman.svg"
        alt="woman"
        width="536"
        height="829"
        className="absolute top-4 left-18 rotate-[16.42deg]"
      />
    </section>
  );
};

export default FooterComponent;
