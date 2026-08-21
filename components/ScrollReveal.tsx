"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// ScrollReveal — lightweight IntersectionObserver that triggers CSS transitions
// for elements marked with data-reveal when they enter the viewport.
// Re-runs on route change so subpages also get entrance animations.
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll("[data-reveal]");
            reveals.forEach((el, index) => {
              setTimeout(() => el.setAttribute("data-visible", ""), index * 70);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all sections that should reveal their children
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    // Immediately reveal anything already in the viewport on load / route change
    const revealImmediately = () => {
      document.querySelectorAll("[data-section]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const reveals = section.querySelectorAll("[data-reveal]");
          reveals.forEach((el, index) => {
            setTimeout(() => el.setAttribute("data-visible", ""), index * 70);
          });
          observer.unobserve(section);
        }
      });
    };

    requestAnimationFrame(() => {
      revealImmediately();
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
