export type Insight = {
  id: string;
  title: string;
  slug: string;
  category: "news" | "articles" | "case-studies" | "events" | "downloads";
  excerpt: string;
  content: string;
  date: string;
};