'use client';
import { useEffect, useState } from 'react';
import { profileColors } from '@/app/lib/constants/profileColours';
import { AnimatedText } from '../animatedText';
import { comment, comments } from './data';

export const SocialCommentsCard: React.FC = () => {
  const data: comment[] = comments;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % data.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [data.length]); // Only needs to run once, or if data length changes

  return (
    <div className="w-[80%] md:w-[612px] h-[400px] m-auto bg-slate-100 rounded-4xl font-outfit flex flex-col overflow-hidden shadow-xl">
      <div className="flex flex-row items-center justify-start space-x-2 md:space-x-4 p-3 border-b border-b-slate-300">
        <div
          className="w-[50px] h-[50px] rounded-full"
          style={{
            backgroundColor: profileColors[currentIndex % profileColors.length],
            filter: 'saturate(1.5)',
          }}
        ></div>
        <div className="md:text-xl">
          <p>
            {data[currentIndex].username
              ? '@' + data[currentIndex].username
              : data[currentIndex].user}
          </p>
        </div>
      </div>
      <div className="font-medium flex-center text-center text-2xl md:text-5xl p-5 h-full">
        <p className="-translate-y-6">
          <AnimatedText text={data[currentIndex].comment} duration={600} />
        </p>
      </div>
    </div>
  );
};
