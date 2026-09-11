import { notFound } from "next/navigation";
import { jobs } from "@/data/jobs";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <p className="text-sm text-gray-500">
          {job.department}
        </p>

        <h1 className="mt-3 text-5xl font-semibold">
          {job.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
          <span>{job.location}</span>
          <span>{job.experience}</span>
          <span>{job.type}</span>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold">
            About the Role
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            {job.description}
          </p>

          <h2 className="mt-12 text-2xl font-semibold">
            Requirements
          </h2>

          <ul className="mt-4 space-y-3">
            {job.requirements.map((requirement) => (
              <li key={requirement}>
                • {requirement}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/contact">
              Apply Now
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}