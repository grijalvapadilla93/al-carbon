"use client";
import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  className = "",
  stagger,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const staggerClass = stagger ? `stagger-${stagger}` : "";
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? "revealed" : ""} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}
