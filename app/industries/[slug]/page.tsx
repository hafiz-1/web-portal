import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Industry
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          {industry.title}
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          {industry.description}
        </p>

        <h2 className="mt-16 text-3xl font-semibold">
          Relevant Solutions
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {industry.solutions.map((solution) => (
            <div
              key={solution}
              className="rounded-xl border p-6"
            >
              {solution}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}