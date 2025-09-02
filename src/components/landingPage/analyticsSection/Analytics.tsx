import { Button } from '@/components/ui/button';
import CustomButton from '@/components/ui/custom/CustomButton';
import Image from 'next/image';
import React from 'react';

const Analytics = () => {
  return (
    <div className="w-full bg-[#E8EFD6]">
      <div className="w-[90%] mx-auto py-[9.14vw] grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div>
          <Image src="/analytics.avif" width={1392} height={1408} alt="Analytics"></Image>
        </div>
        <div className="space-y-12 flex flex-col justify-center">
          <div className="space-y-6">
            <h2 className="h2">Analyze your audience and keep your followers engaged</h2>
            <p>
              Track your engagement over time, monitor revenue and learn what’s converting your
              audience. Make informed updates on the fly to keep them coming back.
            </p>
          </div>
          <Button
            variant="sectionBtn"
            size="sectionBtn"
            className="w-max rounded-full bg-[#E9C0E9] hover:bg-[#de9fde]">
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
