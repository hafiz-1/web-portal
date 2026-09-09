import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CSRPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Corporate Social Responsibility
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Our commitment to creating positive social,
          environmental and community impact.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            "Community",
            "Environment",
            "Education",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}