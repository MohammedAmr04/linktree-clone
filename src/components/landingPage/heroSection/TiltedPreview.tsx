'use client';
import React, { useRef, useState, useEffect } from 'react';

interface CardProps {
  className: string;
  style: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const TiltedPreview: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTransform = (baseRotateX = 0, baseRotateY = 0, baseRotateZ = 0, translateZ = 0) => {
    const rotateX = baseRotateX + mousePosition.y * -5;
    const rotateY = baseRotateY + mousePosition.x * 5;
    const rotateZ = baseRotateZ + mousePosition.x * 1;

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px)`;
  };

  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div
        className="relative w-[400px] h-[450px] cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}>
        {/* Main front card - white/light */}
        <Card
          className="absolute w-[280px] h-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-200 ease-out"
          style={{
            transform: getTransform(0, 0, 0, 50),
            left: '50%',
            top: '50%',
            marginLeft: '-140px',
            marginTop: '-190px',
          }}>
          <div className="p-6 h-full flex flex-col">
            <div className="w-full h-48 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl mb-4"></div>
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="text-center text-gray-800 text-sm leading-relaxed">
              Explore online classes, merch,
              <br />
              accessories and more from the
              <br />
              Shape Shifters collection curated
              <br />
              by our founder Nikole.
            </div>
          </div>
        </Card>

        {/* Second card - brown/orange */}
        <Card
          className="absolute w-[260px] h-[360px] bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl shadow-xl transition-transform duration-200 ease-out"
          style={{
            transform: getTransform(0, 0, -8, 20),
            left: '50%',
            top: '50%',
            marginLeft: '-120px',
            marginTop: '-170px',
          }}>
          <div className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 bg-orange-200 rounded-full mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-800 rounded-full"></div>
            </div>
            <div className="text-white font-semibold mb-2">Nikole Brake</div>
            <div className="text-orange-200 text-sm mb-6">Founder of Shape Shifters</div>

            <div className="space-y-3 mb-6">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                Slow flow
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                Online courses
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                Wellness retreats
              </div>
            </div>

            <div className="flex space-x-3 mt-auto">
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
            </div>
          </div>
        </Card>

        {/* Third card - dark green */}
        <Card
          className="absolute w-[240px] h-[340px] bg-gradient-to-br from-emerald-800 to-green-900 rounded-2xl shadow-lg transition-transform duration-200 ease-out"
          style={{
            transform: getTransform(0, 0, 12, -10),
            left: '50%',
            top: '50%',
            marginLeft: '-100px',
            marginTop: '-150px',
          }}
        />

        {/* Fourth card - purple */}
        <Card
          className="absolute w-[220px] h-[320px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-lg transition-transform duration-200 ease-out"
          style={{
            transform: getTransform(0, 0, -15, -30),
            left: '50%',
            top: '50%',
            marginLeft: '-80px',
            marginTop: '-130px',
          }}
        />

        {/* Fifth card - blue */}
        <Card
          className="absolute w-[200px] h-[300px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg transition-transform duration-200 ease-out"
          style={{
            transform: getTransform(0, 0, 18, -50),
            left: '50%',
            top: '50%',
            marginLeft: '-60px',
            marginTop: '-110px',
          }}
        />
      </div>
    </div>
  );
};

export default TiltedPreview;
