import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PartnersGrid from "@/components/sections/PartnersGrid";

export default function PartnersPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Our Partners
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          We work with leading global technology companies
          to deliver reliable solutions.
        </p>

        <div className="mt-12">
          <PartnersGrid />
        </div>
      </Container>
    </Section>
  );
}