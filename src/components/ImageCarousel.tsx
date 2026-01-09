import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ImageBadge, { type ImageBadgeType } from "./ImageBadge";

interface CarouselImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Optional tag to display on the image (before/after) */
  tag?: ImageBadgeType;
  /** Development-only tag for displaying file path (bottom-left) */
  tmpTag?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}

export default function ImageCarousel({
  images,
  autoplay = true,
  autoplayDelay = 5000,
  showControls = true,
  showDots = true,
  className = ""
}: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = autoplay
    ? Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })
    : undefined;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "rtl"
    },
    autoplayPlugin ? [autoplayPlugin] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main carousel container */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-video h-auto w-full object-cover"
                loading={index < 2 ? "eager" : "lazy"}
                draggable={false}
              />
              {/* Before/After Badge */}
              {image.tag && (
                <div className="absolute top-3 right-3 z-10">
                  <ImageBadge type={image.tag} />
                </div>
              )}
              {/* Dev-only file path tag */}
              {image.tmpTag && (
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="bg-surface/90 text-text-primary rounded px-1.5 py-0.5 font-mono text-[10px] shadow-sm backdrop-blur-sm">
                    {image.tmpTag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - In RTL: left arrow = next (forward), right arrow = prev (back) */}
      {showControls && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollNext}
            className="group focus-visible:ring-ring absolute top-1/2 left-3 z-10 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="תמונה הבאה">
            <span className="bg-background/40 group-hover:bg-background/60 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all">
              <svg
                className="text-text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>

          <button
            type="button"
            onClick={scrollPrev}
            className="group focus-visible:ring-ring absolute top-1/2 right-3 z-10 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="תמונה קודמת">
            <span className="bg-background/40 group-hover:bg-background/60 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all">
              <svg
                className="text-text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="בחר תמונה">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`focus-visible:ring-ring h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 ${
                index === selectedIndex
                  ? "bg-text-primary scale-110"
                  : "bg-text-primary/40 hover:bg-text-primary/60"
              }`}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`תמונה ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
