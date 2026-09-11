import { notFound } from "next/navigation";
import { insights } from "@/data/insights";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const insight = insights.find(
    (item) => item.slug === slug
  );

  if (!insight) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          {insight.category}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold">
          {insight.title}
        </h1>

        <p className="mt-5 text-gray-500">
          {insight.date}
        </p>

        <div className="mt-12 max-w-3xl text-lg leading-8 text-gray-700">
          {insight.content}
        </div>
      </Container>
    </Section>
  );
}