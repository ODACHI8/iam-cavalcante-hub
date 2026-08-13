"use client";

import { useEffect } from "react";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealAll = () => {
      document
        .querySelectorAll(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    };

    if (prefersReducedMotion) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    // Marca como visível (ou passa a observar) qualquer .reveal pendente.
    // Roda no mount e sempre que a aba volta a ficar visível, porque
    // callbacks do IntersectionObserver ficam presos em requestAnimationFrame
    // e podem nunca disparar enquanto a aba está em segundo plano — sem esse
    // fallback, o elemento fica opacity:0 para sempre até um refresh.
    const syncTargets = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        } else {
          observer.observe(el);
        }
      });
    };

    syncTargets();

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        syncTargets();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", syncTargets);
    window.addEventListener("focus", syncTargets);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", syncTargets);
      window.removeEventListener("focus", syncTargets);
    };
  }, []);

  return null;
}
