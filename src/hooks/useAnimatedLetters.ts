'use client';

import { useEffect, useRef, useState } from 'react';

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOut: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

// Clamp printable ASCII range
const clampCharCode = (code: number) => {
  const min = 32; // space
  const max = 126; // tilde
  return Math.max(min, Math.min(max, code));
};

// Emoji detection using Unicode property escapes
const isEmoji = (char: string) => /\p{Extended_Pictographic}/u.test(char);

export const useAnimatedLetters = (
  endString: string,
  duration: number = 2000,
  easing: keyof typeof easingFunctions = 'easeOut',
  shiftRange: number = 20,
) => {
  const [animatedText, setAnimatedText] = useState(endString);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();

    const targetChars = Array.from(endString); // ✅ Correctly handles emoji

    const startCodes = targetChars.map(char => {
      if (isEmoji(char)) return null; // Emoji: don't animate
      const code = char.charCodeAt(0);
      const offset = Math.floor(Math.random() * shiftRange * 2 - shiftRange);
      return clampCharCode(code + offset);
    });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easingFunctions[easing](progress);

      const result = targetChars.map((char, i) => {
        if (isEmoji(char)) {
          return char;
        }

        const start = startCodes[i]!;
        const end = char.charCodeAt(0);
        const interpolated = Math.round(start + (end - start) * eased);
        return String.fromCharCode(clampCharCode(interpolated));
      });

      setAnimatedText(result.join(''));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setAnimatedText(endString); // Final fix
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isVisible, endString, duration, easing, shiftRange]);

  return { animatedText, ref };
};
