import { useEffect, useState, useCallback } from 'react';

export default function useScrollToTop( ) {
  const [shown, setShown] = useState(false);
  const threshold = 300;

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > threshold);
    };

    window.addEventListener('scroll', scrollCallback);

    scrollCallback();

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { shown, scrollToTop };
}