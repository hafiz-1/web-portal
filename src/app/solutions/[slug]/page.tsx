import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import Container from "@/components/ui/Container";
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
    <main>
      {/* Hero */}
      <section className="py-6 sm:py-8">
        <Container>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {solution.category}
          </p>

          <h1 className="gradient-text mt-3 text-4xl font-semibold sm:text-5xl">
            {solution.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            {solution.description}
          </p>

          <div className="mt-6">
            <Button href="/contact">
              Talk to an Expert
            </Button>
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-6 sm:py-8">
        <Container>
          <h2 className="gradient-text text-3xl font-semibold">
            Key Benefits
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
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

      {/* Audience */}
      <section className="py-6 sm:py-8">
        <Container>
          <h2 className="gradient-text text-3xl font-semibold">
            Who is it for?
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
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
      </section>
    </main>
  );
}