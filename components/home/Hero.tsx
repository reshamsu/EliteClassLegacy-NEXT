"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import Link from "next/link";
// import { supabase } from "@/lib/supabaseClient";

const FALLBACK_IMAGES = ["/assets/hero/hero_image1.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES);
  const [pageType, setPageType] = useState("Homepage");

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      10000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="bg-gray-200 text-gray-900 relative">
      <div className="relative h-screen w-full overflow-hidden flex justify-center text-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={pageType}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/64 transition-all duration-1000" />
          </div>
        ))}

        {/* CONTROLS */}
        <button
          onClick={prevSlide}
          className="hidden xl:flex absolute top-1/2 left-6 -translate-y-1/2 text-white z-20"
        >
          <TbChevronLeft size={44} />
        </button>

        <button
          onClick={nextSlide}
          className="hidden xl:flex absolute top-1/2 right-6 -translate-y-1/2 text-white z-20"
        >
          <TbChevronRight size={44} />
        </button>

        {/* TEXT */}
        <div className="max-w-6xl mx-auto absolute inset-0 flex flex-col justify-center items-center text-center gap-8 text-white z-10 pt-22 px-6 md:px-14 2xl:px-0">
          <h1 className="playfair text-3xl md:text-5xl font-semibold">
            Professional Short-Term Rental Management for Downtown Dubai
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-3xl">
            We manage your apartment end-to-end, delivering flexible income
            without the hassle of long-term leasing.
          </p>
          <Link href="*" className="select-none btn-light-base">
            Partner with Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
