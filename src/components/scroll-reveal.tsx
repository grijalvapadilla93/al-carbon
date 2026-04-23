"use client";
import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  className = "",
  stagger,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || doneRef.current) return;

    const reveal = () => {
      if (!doneRef.current) {
        doneRef.current = true;
        setRevealed(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(el);

    // Check immediate visibility (element already in viewport on mount)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      reveal();
      observer.unobserve(el);
    }

    return () => observer.disconnect();
  }, []);

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
