'use client';

import { useState, useEffect, useRef } from 'react';

// Profile data - using the music artist profile as the main one
const profile = {
  avatar:
    'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66918ab0cb2cafecf967e408_avatar.webp',
  background:
    'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66917b1fff58a30cb42e6f0d_bg.webp',
  backgroundPlaceholder:
    'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/6691a78938ec5512f11e20ff_6690ad3b0f5a04cb6cc2b7f1_bg%202.webp',
  backgroundItem:
    'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66917b378e8ba98d79979aca_item-1.webp',
  links: [
    { text: 'Latest Single', color: 'bg-purple-200 text-purple-900' },
    { text: 'Bubble Gum Music Video', color: 'bg-purple-200 text-purple-900' },
    { text: 'Listen on Spotify', color: 'bg-purple-200 text-purple-900' },
  ],
  widget:
    'https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66917b2efcee62e71815f46f_widget.webp',
};

const Hero3DProfile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const normalizedX = Math.max(-1, Math.min(1, deltaX / (rect.width / 2)));
      const normalizedY = Math.max(-1, Math.min(1, deltaY / (rect.height / 2)));

      setMousePosition({
        x: normalizedX * 25,
        y: normalizedY * 32,
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[700px] p-8">
      <div
        ref={cardRef}
        className="relative transition-transform duration-1200 ease-out"
        style={{
          width: '330px',
          height: '630px',
          transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${
            mousePosition.x
          }deg)`,
          transformStyle: 'preserve-3d',
        }}>
        {/* Main Card Container */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          style={{
            transform: 'translateZ(0px)',
            transformStyle: 'preserve-3d',
          }}>
          {/* Background Placeholder */}
          <img
            src={profile.backgroundPlaceholder}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Main Background */}
          <img
            src={profile.background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Top Left Element */}
          <div
            className="absolute top-6 left-6"
            style={{
              transform: 'translateZ(15px)',
              transformStyle: 'preserve-3d',
            }}>
            <div className="w-8 h-8 bg-purple-300/30 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Profile Layout */}
          <div
            className="relative h-full p-6 flex flex-col items-center text-white"
            style={{
              transform: 'translateZ(10px)',
              transformStyle: 'preserve-3d',
            }}>
            {/* Avatar - At the top */}
            <div
              className="mt-8 mb-18 -top-2 relative"
              style={{
                transform: 'translateZ(30px)',
                transformStyle: 'preserve-3d',
              }}>
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND ITEM (Record/Vinyl) - Behind the card on top-right */}
        {/* SIZE: Change w-28 h-28 to adjust size | POSITION: Change -top-6 -right-8 to adjust position */}
        <div
          className="absolute top-10 -right-40"
          style={{
            transform: 'translateZ(-80px)', // Behind the main card
            transformStyle: 'preserve-3d',
          }}>
          <img
            src={profile.backgroundItem}
            alt=""
            className="w-65 h-65 object-cover rounded-full shadow-xl"
          />
        </div>

        {/* WIDGET - Outside card on bottom-left */}
        {/* SIZE: Change w-28 h-28 to adjust size | POSITION: Change -bottom-6 -left-8 to adjust position */}
        <div
          className="absolute bottom-14 -left-30"
          style={{
            transform: 'translateZ(80px)',
            transformStyle: 'preserve-3d',
          }}>
          <img
            src={profile.widget}
            alt="widget"
            className="w-65 h-65 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* LINKS - Hovering outside card bounds in center area */}
        {/* POSITION: Change top-40 -left-8 to adjust position */}
        <div
          className="absolute top-60 left-8 space-y-3 w-64"
          style={{
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d',
          }}>
          {profile.links.map((link, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium text-center ${link.color} shadow-xl cursor-pointer hover:shadow-2xl transition-shadow`}
              style={{
                transform: `translateZ(5px)`,
                transformStyle: 'preserve-3d',
              }}>
              {link.text}
            </div>
          ))}
        </div>

        {/* SOCIAL ICONS - Outside card bounds on bottom-right */}
        {/* POSITION: Change bottom-16 -right-12 to adjust position */}
        <div
          className="absolute bottom-16 -right-12 flex space-x-3"
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d',
          }}>
          {/* Spotify Icon */}
          <div
            className="w-12 h-12 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            style={{
              transform: 'translateZ(5px)',
              transformStyle: 'preserve-3d',
            }}>
            <svg height="24" viewBox="0 0 22 22" fill="currentColor">
              <path d="M11.3 2C6.2 2 2 6.2 2 11.3C2 16.5 6.2 20.6 11.3 20.6C16.5 20.6 20.6 16.4 20.6 11.3C20.6 6.2 16.5 2 11.3 2ZM15.6 15.5C15.4 15.8 15.1 15.9 14.8 15.7C12.6 14.4 9.9 14.1 6.6 14.8C6.3 14.9 6 14.7 5.9 14.4C5.8 14.1 6 13.8 6.3 13.7C9.9 12.9 12.9 13.2 15.4 14.7C15.7 14.8 15.8 15.2 15.6 15.5ZM16.7 12.9C16.5 13.2 16 13.3 15.7 13.1C13.2 11.6 9.4 11.1 6.4 12C6 12.2 5.6 12 5.5 11.6C5.4 11.2 5.6 10.8 6 10.7C9.4 9.7 13.6 10.2 16.5 11.9C16.8 12.1 16.9 12.6 16.7 12.9ZM16.8 10.3C13.8 8.5 8.8 8.4 6 9.2C5.5 9.3 5 9.1 4.9 8.6C4.8 8.1 5 7.7 5.5 7.5C8.8 6.5 14.3 6.7 17.7 8.7C18.1 9 18.3 9.5 18 10C17.8 10.4 17.2 10.5 16.8 10.3Z"></path>
            </svg>
          </div>

          {/* YouTube Icon */}
          <div
            className="w-12 h-12 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            style={{
              transform: 'translateZ(5px)',
              transformStyle: 'preserve-3d',
            }}>
            <svg height="24" viewBox="0 0 22 22" fill="currentColor">
              <path d="M19.2475 4.42693C20.1307 4.66485 20.8248 5.35902 21.0595 6.23897C21.4864 7.8359 21.4864 11.1699 21.4864 11.1699C21.4864 11.1699 21.4864 14.5039 21.0595 16.1008C20.8216 16.984 20.1274 17.6782 19.2475 17.9129C17.6505 18.3398 11.2432 18.3398 11.2432 18.3398C11.2432 18.3398 4.83917 18.3398 3.23897 17.9129C2.35577 17.675 1.66159 16.9808 1.42694 16.1008C1 14.5039 1 11.1699 1 11.1699C1 11.1699 1 7.8359 1.42694 6.23897C1.66485 5.35576 2.35903 4.66159 3.23897 4.42693C4.83917 4 11.2432 4 11.2432 4C11.2432 4 17.6505 4 19.2475 4.42693ZM14.5171 11.1701L9.19497 14.2433V8.09679L14.5171 11.1701Z"></path>
            </svg>
          </div>

          {/* Music Icon */}
          <div
            className="w-12 h-12 rounded-full bg-purple-200 text-purple-900 flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            style={{
              transform: 'translateZ(5px)',
              transformStyle: 'preserve-3d',
            }}>
            <svg height="24" viewBox="0 0 22 22" fill="currentColor">
              <path d="M18.7552 3H15.7285V11.0906H18.7552V3Z"></path>
              <path d="M14.7098 7.24902H11.6831V11.0906H14.7098V7.24902Z"></path>
              <path d="M10.8685 7.24902H7.8418V11.0906H10.8685V7.24902Z"></path>
              <path d="M4 3V18.7738H18.7843V12.1674H7.92891V15.0486H15.7285V15.8926H7.05582V3H4Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3DProfile;
