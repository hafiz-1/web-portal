import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/sections/SectionHeader";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import { services } from "@/data/services";
import Link from "next/link";

export default function WhatWeDoPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Technology solutions and services designed around your needs."
            description="Explore our solutions and the professional and managed services that help organizations implement and operate them."
          />

          <h2 className="mb-8 text-3xl font-semibold">
            Solutions
          </h2>

          <SolutionsGrid />

          <h2 className="mb-8 mt-24 text-3xl font-semibold">
            Services
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <p key={feature} className="text-sm">
                      • {feature}
                    </p>
                  ))}
                </div>

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
    </>
  );
}