"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
}

export default function Carousel({ images }: Props) {
  const n = images.length;
  // Triple the array so we can loop infinitely in both directions
  const slides = [...images, ...images, ...images];

  const [idx, setIdx] = useState(n); // start in the middle copy
  const [animated, setAnimated] = useState(true);
  const [slideWidth, setSlideWidth] = useState(100); // 100% mobile, 50% desktop
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = () => setSlideWidth(mq.matches ? 50 : 100);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = (newIdx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setAnimated(true);
    setIdx(newIdx);
  };

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(() => setIdx(i => i + 1), 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [idx]);

  // After transition ends, silently jump to equivalent position in middle copy
  const onTransitionEnd = () => {
    if (idx >= n * 2) {
      setAnimated(false);
      setIdx(n);
    } else if (idx < n) {
      setAnimated(false);
      setIdx(n * 2 - 1);
    }
  };

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const realIdx = ((idx - n) % n + n) % n;

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${idx * slideWidth}%)`,
          transition: animated ? "transform 0.5s ease" : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((img, i) => (
          <div className="carousel__slide" key={i} style={{ flex: `0 0 ${slideWidth}%` }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <button
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => goTo(idx - 1)}
        aria-label="Foto anterior"
      >‹</button>
      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={() => goTo(idx + 1)}
        aria-label="Próxima foto"
      >›</button>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${realIdx === i ? " active" : ""}`}
            onClick={() => goTo(n + i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
