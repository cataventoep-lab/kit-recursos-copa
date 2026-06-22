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

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(current + 1), 3000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <div className="carousel">
      <div className="carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div className="carousel__slide" key={i}>
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="340px" />
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${current === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
