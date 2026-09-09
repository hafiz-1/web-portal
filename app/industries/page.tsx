import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/sections/SectionHeader";
import IndustriesGrid from "@/components/sections/IndustriesGrid";

export default function IndustriesPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Technology built for the way your industry works."
        />

        <IndustriesGrid />
      </Container>
    </Section>
  );
}