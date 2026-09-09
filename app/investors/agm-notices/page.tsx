import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function AGMNoticesPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          AGM Notices
        </h1>

        <div className="mt-10 space-y-4">
          {["AGM Notice 2026", "AGM Notice 2025"].map(
            (notice) => (
              <div
                key={notice}
                className="rounded-xl border p-5"
              >
                {notice}
              </div>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}