import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function InvestorContactsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Investor Contacts
        </h1>

        <div className="mt-10 max-w-xl space-y-4 text-gray-600">
          <p>Investor Relations Department</p>
          <p>investors@example.com</p>
          <p>+92 00 0000000</p>
        </div>
      </Container>
    </Section>
  );
}