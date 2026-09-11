import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const leaders = [
  { name: "Ahmed Khan", role: "Chief Executive Officer" },
  { name: "Sara Ali", role: "Chief Financial Officer" },
  { name: "Usman Malik", role: "Chief Technology Officer" },
];

export default function LeadershipPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Leadership
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border p-6"
            >
              <div className="mb-6 h-48 rounded-xl bg-gray-100" />

              <h2 className="text-xl font-semibold">
                {leader.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}