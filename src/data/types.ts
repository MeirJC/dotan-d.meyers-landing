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
};
