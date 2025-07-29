'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  startValue?: number;
  easing?: 'linear' | 'easeOut' | 'easeInOut';
  className?: string;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
  preserveLayout?: boolean; // New prop for preventing CLS
  minDigits?: number; // Minimum number of digits to display
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000,
  startValue = 0,
  easing = 'easeOut',
  className = '',
  prefix = '',
  suffix = '',
  formatter,
  preserveLayout = true, // Default to true to prevent CLS
  minDigits,
}) => {
  const { count, ref } = useAnimatedCounter(
    endValue,
    duration,
    startValue,
    easing,
  );

  const formatValue = (value: number) => {
    if (formatter) return formatter(value);

    let formattedValue = value.toLocaleString();

    // Handle layout preservation
    if (preserveLayout) {
      const endValueStr = endValue.toString();
      const currentValueStr = value.toString();
      const targetDigits = minDigits || endValueStr.length;

      // Pad the current value to match the target digit count
      if (currentValueStr.length < targetDigits) {
        const zerosNeeded = targetDigits - currentValueStr.length;
        const paddedNumber = '0'.repeat(zerosNeeded) + currentValueStr;

        // Apply locale formatting (commas) to the padded number
        formattedValue = paddedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }

    return formattedValue;
  };

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {prefix}
      {formatValue(count)}
      {suffix}
    </span>
  );
};
