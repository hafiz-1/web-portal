"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";

const slides = [
  {
    image: "/solutions/connectivity.png",
    alt: "Connectivity solutions",
  },
  {
    image: "/solutions/cybersecurity.png",
    alt: "Cybersecurity solutions",
  },
  {
    image: "/solutions/energy.png",
    alt: "Energy solutions",
  },
  {
    image: "/solutions/cloud-data-centre.png",
    alt: "Cloud and Data Centre solutions",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (previousSlide) => previousSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide !== slides.length) {
      return;
    }

    const resetTimer = setTimeout(() => {
      setIsTransitioning(false);
      setCurrentSlide(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }, 1000);

    return () => clearTimeout(resetTimer);
  }, [currentSlide]);

  return (
    <section className="relative isolate min-h-[60vh] overflow-hidden bg-[#102016] text-white lg:min-h-[36rem]">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`flex h-full ${isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
            }`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className="relative h-full min-w-full"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />

      {/* Hero Content */}
      <Container className="relative z-10 flex min-h-[60vh] -translate-x-6 items-end py-16 sm:py-20 lg:min-h-[36rem] lg:py-16">
        <div className="hero-content max-w-4xl">
          <h1 className="hero-item pb-3 text-4xl font-semibold leading-[1.16] tracking-tight text-white sm:text-5xl md:text-6xl">
            Powering the digital future.
          </h1>

          <p className="hero-item mt-6 max-w-2xl text-lg leading-8 text-white/95 md:text-xl">
            Connectivity, cloud, cybersecurity and digital
            infrastructure designed to help businesses connect,
            transform and grow.
          </p>

          <div className="hero-item mt-8 flex flex-wrap gap-4">
            <Button href="/solutions">
              Explore Solutions
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              className="border-white/40 bg-black/50 text-white backdrop-blur-md hover:border-[#7BC96F] hover:bg-black/65"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}