import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { jobs } from "@/data/jobs";
import JobCard from "@/components/cards/JobCard";

export default function CareersPage() {
  return (
    <>
      <Section className="bg-gray-950 text-white">
        <Container>
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Careers
          </p>

          <h1 className="mt-4 text-5xl font-semibold md:text-7xl">
            Build your future with us.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Join a team working on technology that connects
            businesses and communities.
          </p>

          <Link
            href="/careers/jobs"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black"
          >
            Explore Jobs
          </Link>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold">
            Featured Opportunities
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}