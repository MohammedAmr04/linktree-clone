'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const testimonials = [
  {
    img: '/feedbacks/Patti-Chimkire-New.webp',
    quote: "Linktree helps my customers get where they need to go. It's fast and easy.",
    name: 'Patti Chimkire',
    title: 'Founder and Pastry Chef, Mali Bakes',
  },
  {
    img: '/feedbacks/Luke-Kidgell2.webp',
    quote: 'It’s simple to use and makes my work much easier.',
    name: 'John Doe',
    title: 'Designer at Creative Studio',
  },
  {
    img: '/feedbacks/Risa-Utama.webp',
    quote: 'A must-have tool for building online presence!',
    name: 'Jane Smith',
    title: 'Content Creator',
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full  mx-auto py-30 text-center">
      <Carousel loop={true} className="relative">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="flex flex-col items-center ">
              <div className="w-full h-[170px] max-w-[90vw]  md:w-3xl md:h-[350px] overflow-hidden rounded-full relative">
                <Image src={t.img} alt={t.name} fill className="object-cover max-w-full " />
              </div>

              <blockquote className="text-2xl md:text-4xl px-2 md:px-0 font-extrabold mt-15 max-w-2xl">
                “{t.quote}”
              </blockquote>

              <p className="text-[#676b5f] text-center font-semibold text-lg  mt-11">
                <span>{t.name}</span>, <br />
                <span>{t.title}</span>
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious size="lg" className="static translate-y-0" />
          <CarouselNext size="lg" className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
