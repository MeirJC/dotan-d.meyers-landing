import type { ImageMetadata } from "astro";

/**
 * Image tag type for before/after badges
 * - "before": Shows "לפני" badge
 * - "after": Shows "אחרי" badge
 * - undefined/not set: No badge displayed
 */
export type ImageTagType = "before" | "after";

export type CarouselItem = {
  img: ImageMetadata;
  title: string;
  /** Optional tag to display on the image (before/after) */
  tag?: ImageTagType;
  /**
   * Development-only tag for displaying file path or custom text
   * Used for sorting images into before/after categories
   * Displays in bottom-left corner with subtle styling
   */
  tmpTag?: string;
};

export type FeatureCardItem = {
  id: number;
  title: string;
  description: string;
  list: string[];
  image: ImageMetadata;
  alt: string;
  reverse: boolean;
  message: string;
};

export type ProjectCardItem = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  images: CarouselItem[];
  items?: string[];
  location?: string;
  date?: string;
  tags?: string[];
};

export interface HeroSectionData {
  brandName: string;
  brandDescription: string;
  // title: string;
  description: string;
  button?: {
    text: string;
    href: string;
  };
  learnMore?: {
    text: string;
    href: string;
  };
  images: CarouselItem[];
}

export interface FeaturesSectionData {
  title: string;
  description: string;
  cards: FeatureCardItem[];
}

export interface ProjectSectionData {
  title: string;
  description: string;
  cards: ProjectCardItem[];
}
