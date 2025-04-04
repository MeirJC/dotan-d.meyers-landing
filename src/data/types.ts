import type { ImageMetadata } from "astro";

export type CarouselItem = {
  img: ImageMetadata;
  title: string;
  description: string;
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
  projectPrice?: string;
  tags?: string[];
  featured?: boolean;
};

export interface HeroSectionData {
  brandName: string;
  brandDescription: string;
  title: string;
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

export type ArticleItem = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: ImageMetadata;
};
