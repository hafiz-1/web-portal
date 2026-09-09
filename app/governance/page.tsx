import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function GovernancePage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Corporate Governance
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/governance/anti-bribery"
            className="rounded-2xl border p-8"
          >
            Anti-Bribery Policy
          </Link>

          <Link
            href="/governance/whistleblowing"
            className="rounded-2xl border p-8"
          >
            Whistleblowing Policy
          </Link>
        </div>
      </Container>
    </Section>
  );
}