import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function InvestorsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Investors
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/investors/contacts"
            className="rounded-2xl border p-8"
          >
            <h2 className="text-2xl font-semibold">
              Investor Contacts
            </h2>
          </Link>

          <Link
            href="/investors/agm-notices"
            className="rounded-2xl border p-8"
          >
            <h2 className="text-2xl font-semibold">
              AGM Notices
            </h2>
          </Link>
        </div>
      </Container>
    </Section>
  );
}