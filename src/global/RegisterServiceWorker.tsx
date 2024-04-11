'use client';

import { useEffect } from 'react';

const RegisterServiceWorker = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.info('Service Worker registration successful:', registration);
        });
      }
    }
  }, []);

  return null;
};

export default RegisterServiceWorker;
