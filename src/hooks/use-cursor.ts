import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove);

    const interactiveEls = document.querySelectorAll<HTMLElement>('a, button, [data-hover]');
    const addHover = () => ring.classList.add('hover');
    const removeHover = () => ring.classList.remove('hover');

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);
}
