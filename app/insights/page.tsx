import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/sections/SectionHeader";
import InsightsGrid from "@/components/sections/InsightsGrid";

export default function InsightsPage() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="News, ideas and perspectives from Wateen."
        />

        <InsightsGrid />
      </Container>
    </Section>
  );
}