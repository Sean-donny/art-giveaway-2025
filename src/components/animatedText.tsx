'use client';

import { useAnimatedLetters } from '@/hooks/useAnimatedLetters';

interface AnimatedTextProps {
  text: string;
  duration?: number;
  easing?: 'linear' | 'easeOut' | 'easeInOut';
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  duration = 2000,
  easing = 'easeOut',
  className = '',
  prefix = '',
  suffix = '',
}) => {
  const { animatedText, ref } = useAnimatedLetters(text, duration, easing);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {animatedText}
      {suffix}
    </span>
  );
};
