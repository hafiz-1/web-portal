import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import JobCard from "@/components/cards/JobCard";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-semibold">
          Open Positions
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </Section>
  );
}