"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/487947090_122121287666783676_7044240575081239006_n.png",
    alt: "Asian College of Law promotional banner",
    label: "Official college image",
  },
  {
    src: "/images/official-image-placeholder.svg",
    alt: "Official college image placeholder",
    label: "College imagery to be provided",
  },
];

export default function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  function showSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <section className="home-slider section-wrap" aria-label="College highlights">
      <div className="home-slider__frame" aria-live="polite">
        {slides.map((slide, index) => (
          <div className={`home-slider__slide${index === activeSlide ? " home-slider__slide--active" : ""}`} key={slide.src}>
            <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 760px) 100vw, 1240px" priority={index === 0} />
            <span>{slide.label}</span>
          </div>
        ))}
        <button className="home-slider__control home-slider__control--previous" type="button" aria-label="Previous slide" onClick={() => showSlide(activeSlide - 1)}>‹</button>
        <button className="home-slider__control home-slider__control--next" type="button" aria-label="Next slide" onClick={() => showSlide(activeSlide + 1)}>›</button>
      </div>
      <div className="home-slider__dots" role="tablist" aria-label="Choose college highlight">
        {slides.map((slide, index) => (
          <button className={`home-slider__dot${index === activeSlide ? " home-slider__dot--active" : ""}`} key={slide.src} type="button" role="tab" aria-selected={index === activeSlide} aria-label={`Show slide ${index + 1}`} onClick={() => showSlide(index)} />
        ))}
      </div>
    </section>
  );
}
