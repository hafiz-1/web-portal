import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          {service.category}
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          {service.title}
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          {service.description}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border p-5"
            >
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact">
            Discuss Your Requirements
          </Button>
        </div>
      </Container>
    </Section>
  );
}