'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Hero3DProfile from './3dProfile/hero3DProfile';
function HeroSection() {
  const [defaultValue, setDefaultValue] = useState('linktr.ee/');
  return (
    <section className="bg-[#254f1a] min-h-screen flex items-center justify-center md:py-0">
      <div className="w-[80vw] mx-auto grid md:grid-cols-2">
        <div className="lg:w-[55.7143vw] lg:max-w-[718px] col-span-1 mt-35">
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[5rem] font-extrabold font-linksans text-[#d2e823] leading-[1.1] mb-6">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-xl text-white mb-16.5">
            Join 70M+ people using Linktree for their link in bio. One link to help you share
            everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and
            other social media profiles.
          </p>
          <div className="flex gap-2 flex-wrap w-full">
            <Input
              type="text"
              className="rounded-lg  bg-white min-h-[4rem] px-4 outline-2 focus:outline-white font-linksans focus:border-1 min-w-16 focus:border-black text-lg outline-offset-2 text-[#757575] font-medium leading-1.5 w-[70vw] md:w-[50vw] lg:w-[20.736vw] max-w-[300px]"
              placeholder="linktr.ee/"
              value={defaultValue}
              onChange={(e) => {
                if (!e.target.value.startsWith('linktr.ee/')) {
                  console.log(e.target.value);
                  setDefaultValue('linktr.ee/');
                } else {
                  setDefaultValue(e.target.value);
                }
              }}
            />

            <Button className="bg-[#e9c0e9] text-[#1e2330] font-linksans rounded-full font-semibold text-lg px-8 py-4 transition min-h-[4rem] hover:bg-[#e9c0e9] hover:text-[#1e2330] cursor-pointer w-[70vw] md:w-[50vw] lg:w-[20.736vw] lg:max-w-[215px]">
              Claim Your Linktree
            </Button>
          </div>
        </div>
        <div className="col-span-1 relative mt-10">
          <Hero3DProfile />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
