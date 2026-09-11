export type Service = {
  id: string;
  title: string;
  slug: string;
  category: "Professional Services" | "Managed Services";
  description: string;
  features: string[];
};