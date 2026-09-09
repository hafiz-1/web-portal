import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import StatsSection from "@/components/sections/StatsSection";
import PartnersGrid from "@/components/sections/PartnersGrid";
import InsightsGrid from "@/components/sections/InsightsGrid";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Technology built around your business."
            description="From connectivity and cloud to cybersecurity and infrastructure, we help organizations build, operate and scale their digital environments."
          />

          <SolutionsGrid />
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            eyebrow="Who We Serve"
            title="Solutions for every stage of business."
          />

          <IndustriesGrid />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why Wateen"
            title="Built on experience, infrastructure and expertise."
          />

          <StatsSection />
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <SectionHeader
            eyebrow="Partners"
            title="Powered by leading technology partners."
          />

          <PartnersGrid />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Insights"
            title="What's happening in technology."
          />

          <InsightsGrid />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}