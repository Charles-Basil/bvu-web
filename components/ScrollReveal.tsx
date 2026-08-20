"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

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
