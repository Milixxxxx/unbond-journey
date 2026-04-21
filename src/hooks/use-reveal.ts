import { useEffect, useRef, useState } from "react";

/**
 * useReveal — sanfter Fade-in beim Scrollen (Apple-like Calm Luxury).
 * Setzt `data-reveal="true"` sobald das Element im Viewport erscheint.
 * Returns: { ref, revealed }
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [revealed, options]);

  return { ref, revealed };
}
