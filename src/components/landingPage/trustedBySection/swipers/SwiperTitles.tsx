'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const titles: string[] = [
  'health educators',
  'vloggers',
  'bands',
  'streamers',
  'fitness coaches',
  'ecommerce sellers',
  'retailers',
  'products',
  'wellness leaders',
  'musicians',
];
const SwiperTitles = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        direction="vertical"
        loop={true}
        className="h-15">
        {titles.map((title) => (
          <SwiperSlide key={title} className="h-fit">
            <div
              className="text-[#2665d6] tracking-tight
 text-center spa leading-[120%] font-bold text-3xl md:text-5xl">
              {title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTitles;
