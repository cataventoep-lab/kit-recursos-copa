"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
}

export default function Carousel({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (i: number) => setCurrent((i + images.length) % images.length);

  const resetTimer = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent((i + images.length) % images.length);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => setCurrent(i => (i + 1) % images.length), 3500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(calc(var(--slide-step, 100%) * -${current}))` }}
      >
        {images.map((img, i) => (
          <div className="carousel__slide" key={i}>
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
        onClick={() => resetTimer(current - 1)}
        aria-label="Foto anterior"
      >‹</button>
      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={() => resetTimer(current + 1)}
        aria-label="Próxima foto"
      >›</button>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${current === i ? " active" : ""}`}
            onClick={() => resetTimer(i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
