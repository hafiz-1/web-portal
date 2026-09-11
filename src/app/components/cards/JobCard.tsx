import Link from "next/link";
import { Job } from "@/types/job";
import Card from "@/components/ui/Card";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">
        {job.department}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {job.title}
      </h3>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>{job.location}</p>
        <p>{job.experience}</p>
        <p>{job.type}</p>
      </div>

      <Link
        href={`/careers/jobs/${job.slug}`}
        className="mt-6 inline-block font-medium"
      >
        View Position →
      </Link>
    </Card>
  );
}