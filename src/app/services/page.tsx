import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/sections/SectionHeader";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Expertise that helps you implement and operate technology."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border p-8"
            >
              <p className="text-sm text-gray-500">
                {service.category}
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-block font-medium"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}