import Link from "next/link";
import { Job } from "@/types/job";
import Card from "@/components/ui/Card";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <p className="page-kicker">
        {job.department}
      </p>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#132019]">
        {job.title}
      </h3>

      <div className="mt-4 space-y-1 text-sm leading-6 text-[#5c6a60]">
        <p>{job.location}</p>
        <p>{job.experience}</p>
        <p>{job.type}</p>
      </div>

      <Link
        href={`/careers/jobs/${job.slug}`}
        className="text-link mt-7 inline-flex items-center gap-2 text-sm"
      >
        View Position →
      </Link>
    </Card>
  );
}
