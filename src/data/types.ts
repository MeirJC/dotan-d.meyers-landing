export type CarouselItem = {
  img: string;
  title: string;
  description: string;
};

export type FeatureCardItem = {
  id: number;
  title: string;
  description: string;
  list: string[];
  image: string;
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
