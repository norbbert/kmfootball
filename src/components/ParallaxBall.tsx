"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBall() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY * 0.3;
      const r = window.scrollY * 0.06;
      ref.current.style.transform = `translateY(${y}px) rotate(${r}deg)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 will-change-transform"
      style={{ width: 680, height: 680, opacity: 0.07 }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="47" stroke="white" strokeWidth="0.6"/>
        {/* center pentagon */}
        <polygon points="50,35 61,43 57,56 43,56 39,43" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.15"/>
        {/* seam lines */}
        <line x1="50" y1="3" x2="50" y2="35" stroke="white" strokeWidth="0.6"/>
        <line x1="84" y1="22" x2="61" y2="43" stroke="white" strokeWidth="0.6"/>
        <line x1="79" y1="75" x2="57" y2="56" stroke="white" strokeWidth="0.6"/>
        <line x1="21" y1="75" x2="43" y2="56" stroke="white" strokeWidth="0.6"/>
        <line x1="16" y1="22" x2="39" y2="43" stroke="white" strokeWidth="0.6"/>
        {/* outer pentagons */}
        <polygon points="50,3 61,9 58,21 42,21 39,9" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.1"/>
        <polygon points="84,22 94,31 89,44 77,45 70,34" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.1"/>
        <polygon points="79,75 85,87 75,95 63,90 63,78" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.1"/>
        <polygon points="21,75 37,78 37,90 25,95 15,87" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.1"/>
        <polygon points="16,22 30,34 24,45 11,44 6,31" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.1"/>
      </svg>
    </div>
  );
}
