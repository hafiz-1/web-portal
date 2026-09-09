import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function LifeAtWateenPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Life at Wateen
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          A workplace where people learn, collaborate,
          grow and build meaningful technology.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            "Culture",
            "Learning & Development",
            "Employee Experience",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-8">
              <h2 className="text-xl font-semibold">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}