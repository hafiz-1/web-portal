import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function InvestorsPage() {
  return (
    <Section>
      <Container className="p-8">
        <h1 className="gradient-text page-title">
          Investors
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/investors/contacts"
            className="rounded-2xl border p-8"
          >
            <h2 className="text-link text-lg font-medium text-[#5DAD54] transition hover:underline">
              Investor Contacts →
            </h2>
          </Link>

          <Link
            href="/investors/agm-notices"
            className="rounded-2xl border p-8"
          >
            <h2 className="text-link text-lg font-medium text-[#5DAD54] transition hover:underline">
              AGM Notices →
            </h2>
          </Link>
        </div>
      </Container>
    </Section>
  );
}