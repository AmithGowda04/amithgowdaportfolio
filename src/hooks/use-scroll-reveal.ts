import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.rv').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
