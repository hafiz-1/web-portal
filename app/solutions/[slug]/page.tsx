import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution = solutions.find(
    (item) => item.slug === slug
  );

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {solution.category}
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            {solution.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-600">
            {solution.description}
          </p>

          <div className="mt-8">
            <Button href="/contact">
              Talk to an Expert
            </Button>
          </div>
        </Container>
      </Section>

      <section className="bg-gray-50 py-20">
        <Container>
          <h2 className="text-3xl font-semibold">
            Key Benefits
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border bg-white p-6"
              >
                {benefit}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold">
            Who is it for?
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {solution.audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full bg-gray-100 px-5 py-2"
              >
                {audience}
              </span>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}