"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image"; // 👈 استيراد Image
import { Button } from "@/components/ui/button";
import "./swipper.css";
const cards = [
  { id: 1, img: "/comedy-central.webp" },
  { id: 2, img: "/funkynutmeg.webp" },
  { id: 3, img: "/hbo.webp" },
  { id: 4, img: "/pharrell.webp" },
  { id: 5, img: "/tonyhawk.webp" },
  { id: 6, img: "/hbo.webp" },
  { id: 7, img: "/comedy-central.webp" },
  { id: 8, img: "/funkynutmeg.webp" },
  { id: 9, img: "/hbo.webp" },
];
const SwiperImgs = () => {
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <div className="w-full   py-10">
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        direction="horizontal"
        dir="ltr"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
        effect="slide"
        onSwiper={(s) => setSwiper(s)}
        speed={800}
        className={`!overflow-visible  sliderImage`}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="group max-w-sm h-[300px] cursor-pointer perspective-distant"
              onMouseEnter={() => swiper?.autoplay.stop()}
              onMouseLeave={() => swiper?.autoplay.start()}
            >
              <div className="relative w-full h-[330px] transition-transform duration-700 transform-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <Image
                    src={`/trustedby${card.img}`}
                    alt="card"
                    fill
                    className="object-cover rounded-[24px]"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[24px] flex items-center justify-center rotate-y-180 backface-hidden">
                  <Button
                    variant={"outline"}
                    className="font-semibold cursor-pointer"
                  >
                    <Image
                      width={17}
                      height={17}
                      alt="logo linktree"
                      unoptimized
                      src={"/Logo_SVG.svg"}
                    />{" "}
                    Click Me
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImgs;
