import { useEffect, useMemo, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  once = true,
}) {
  const ref = useRef(null);

  const hasIntersectionObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [inView, setInView] = useState(prefersReducedMotion || !hasIntersectionObserver);

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    }),
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion || !hasIntersectionObserver) return;

    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      if (entry.isIntersecting) {
        setInView(true);
        if (once) obs.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, observerOptions);

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, observerOptions, prefersReducedMotion, hasIntersectionObserver]);

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform",
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

