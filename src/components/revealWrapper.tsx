'use client';

import { REVEAL_ANIMATIONS, useReveal } from '@/hooks/useReveal';
import React, { JSX } from 'react';

interface RevealWrapperProps {
  children: React.ReactNode;
  animation?: keyof typeof REVEAL_ANIMATIONS;
  duration?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  enableExit?: boolean;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  animation = 'fadeInUp',
  duration = 600,
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  enableExit = false,
  delay = 0,
  className = '',
  as: Component = 'div',
}) => {
  const { isVisible, ref } = useReveal({
    threshold,
    rootMargin,
    triggerOnce,
    enableExit,
    delay,
  });

  const animationConfig = REVEAL_ANIMATIONS[animation];
  const currentStyle = isVisible
    ? animationConfig.animate
    : animationConfig.initial;

  const style: React.CSSProperties = {
    transition: `all ${duration}ms ${easing}`,
    ...currentStyle,
  };

  return React.createElement(Component, { ref, className, style }, children);
};
