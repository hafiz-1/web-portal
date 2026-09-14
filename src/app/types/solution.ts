export type Solution = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  audiences: string[];
  benefits: string[];
  featured?: boolean;
};
