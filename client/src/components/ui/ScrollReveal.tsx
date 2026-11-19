"use client";

import { useEffect, useRef, type ReactNode } from "react";

const TARGETS = "h2, h3, p, ul, ol, figure, img, a";

// Text fades up 40px and media wipes in from the top, once per element, as it enters the viewport.
export default function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets: HTMLElement[] = [];
    root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
      if (el.parentElement?.closest("[data-reveal]")) return;
      if (!el.getClientRects().length) return;
      el.setAttribute("data-reveal", /^(IMG|FIGURE)$/.test(el.tagName) ? "media" : "text");
      targets.push(el);
    });
    if (!targets.length) return;

    const html = document.documentElement;
    html.setAttribute("data-reveal-on", "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${i * 0.09}s`;
            el.setAttribute("data-revealed", "");
            observer.unobserve(el);
            window.setTimeout(() => {
              el.style.transitionDelay = "";
            }, 1300 + i * 90);
          });
      },
      { threshold: 0.1 },
    );
    targets.forEach((el) => observer.observe(el));

    const revealOnFocus = (event: FocusEvent) => {
      const el = (event.target as HTMLElement | null)?.closest?.("[data-reveal]");
      el?.setAttribute("data-revealed", "");
    };
    document.addEventListener("focusin", revealOnFocus);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", revealOnFocus);
      html.removeAttribute("data-reveal-on");
    };
  }, []);

  return (
    <div ref={ref} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
