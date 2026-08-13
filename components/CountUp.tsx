"use client";

import { useEffect, useRef, useState } from "react";

const NUMBER_PATTERN = /^(\D*)(\d[\d.,]*)(.*)$/;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const match = value.match(NUMBER_PATTERN);

  useEffect(() => {
    if (!match) return;
    const node = ref.current;
    if (!node) return;

    const prefix = match[1];
    const digits = match[2];
    const suffix = match[3];
    const target = parseInt(digits.replace(/\D/g, ""), 10);

    if (Number.isNaN(target)) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);

    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      observer.unobserve(node);
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.round(target * easeOutCubic(progress));
        setDisplay(`${prefix}${current}${suffix}`);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) run();
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    // Mesma proteção do ScrollReveal: se a aba estava em segundo plano
    // quando o elemento entrou na viewport, o callback do
    // IntersectionObserver pode nunca disparar. Revalida ao focar/voltar.
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && isInViewport(node)) {
        run();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", handleVisibility);
    window.addEventListener("focus", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", handleVisibility);
      window.removeEventListener("focus", handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
