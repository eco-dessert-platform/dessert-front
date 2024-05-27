import { useState, useEffect } from 'react';

interface DebounceProps<T> {
  value: T;
  delay: number; // 단위: ms
}

export const useDebounce = <T>({ value, delay }: DebounceProps<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
