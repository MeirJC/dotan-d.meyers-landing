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
