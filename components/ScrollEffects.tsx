"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    // ── Scroll progress bar ──────────────────────────
    const bar = document.getElementById("scroll-bar");
    const heroImgWrap = () => document.getElementById("hero-img-wrap");
    const blob1 = () => document.getElementById("hero-blob-1");
    const blob2 = () => document.getElementById("hero-blob-2");

    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = pct + "%";

      // Parallax — hero image
      const img = heroImgWrap();
      if (img) img.style.transform = `translateY(${window.scrollY * 0.18}px)`;

      // Parallax — blobs
      const b1 = blob1();
      const b2 = blob2();
      if (b1) b1.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      if (b2) b2.style.transform = `translateY(${window.scrollY * -0.08}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Reveal on scroll (bidirectional) ────────────
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          } else if (e.boundingClientRect.top < 0) {
            // element has scrolled above viewport — hide again
            e.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // ── Animated counters (bidirectional) ───────────
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const runCounter = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count!);
      const suffix = el.dataset.suffix ?? "";
      if (el._raf) cancelAnimationFrame(el._raf as number);
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1200, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (p < 1) el._raf = requestAnimationFrame(step);
      };
      el._raf = requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target as HTMLElement);
          } else if (e.boundingClientRect.top < 0) {
            (e.target as HTMLElement).textContent =
              "0" + ((e.target as HTMLElement).dataset.suffix ?? "");
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}

// Extend HTMLElement to allow _raf property
declare global {
  interface HTMLElement {
    _raf?: number;
  }
}
