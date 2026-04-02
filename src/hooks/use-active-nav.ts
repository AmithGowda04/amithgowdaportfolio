import { useState, useEffect } from 'react';

export function useActiveNav(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: `-${64}px 0px 0px 0px`,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
