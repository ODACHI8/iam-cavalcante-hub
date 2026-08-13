"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

export default function ScrollReveal() {
  // Componente único, montado no layout raiz: navegações entre páginas via
  // <Link> não remontam o layout, só trocam o conteúdo da rota. O pathname
  // como dependência força o efeito a rodar de novo a cada navegação, para
  // observar os elementos .reveal recém-montados da nova página — sem isso,
  // eles ficam presos em opacity:0 até um refresh.
  const pathname = usePathname();

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
    // Também cobre o caso da aba voltar a ficar visível em segundo plano:
    // callbacks do IntersectionObserver ficam presos em requestAnimationFrame
    // e podem nunca disparar enquanto a aba está oculta.
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
  }, [pathname]);

  return null;
}
