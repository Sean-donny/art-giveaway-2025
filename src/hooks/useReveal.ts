'use client';

import { useEffect, useRef, useState } from 'react';

// Animation presets
export const REVEAL_ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: {
      opacity: 0,
      transform: 'translateY(50px)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'translateY(0px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'translateY(50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  fadeInDown: {
    initial: {
      opacity: 0,
      transform: 'translateY(-50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'translateY(0px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'translateY(-50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  fadeInLeft: {
    initial: {
      opacity: 0,
      transform: 'translateX(-50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'translateX(-50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  fadeInRight: {
    initial: {
      opacity: 0,
      transform: 'translateX(50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'translateX(0px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'translateX(50px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  scaleIn: {
    initial: {
      opacity: 0,
      transform: 'scale(0.8)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'scale(0.8)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  slideInUp: {
    initial: {
      opacity: 0,
      transform: 'translateY(100px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'translateY(0px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'translateY(100px) translateZ(1000px)',
      zIndex: 3000,
      position: 'relative',
    },
  },
  rotateIn: {
    initial: {
      opacity: 0,
      transform: 'rotate(-10deg) scale(0.9)',
      zIndex: 3000,
      position: 'relative',
    },
    animate: {
      opacity: 1,
      transform: 'rotate(0deg) scale(1)',
      zIndex: 3000,
      position: 'relative',
    },
    exit: {
      opacity: 0,
      transform: 'rotate(-10deg) scale(0.9)',
      zIndex: 3000,
      position: 'relative',
    },
  },
} as const;

export type AnimationName = keyof typeof REVEAL_ANIMATIONS;

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  enableExit?: boolean;
  delay?: number;
}

export const useReveal = (options: UseRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    enableExit = false,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            if (delay > 0) {
              timeoutRef.current = setTimeout(() => {
                setIsVisible(true);
                setHasTriggered(true);
              }, delay);
            } else {
              setIsVisible(true);
              setHasTriggered(true);
            }
          }
        } else if (enableExit && hasTriggered && !triggerOnce) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, enableExit, delay, hasTriggered]);

  return { isVisible, ref };
};
