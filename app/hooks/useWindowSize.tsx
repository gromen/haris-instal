import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState(0);

  const isMobile = width < 769;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [isMobile, width];
}
