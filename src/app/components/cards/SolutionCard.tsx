import Link from "next/link";
import { Solution } from "@/types/solution";
import Card from "@/components/ui/Card";

export default function SolutionCard({
  solution,
}: {
  solution: Solution;
}) {
  return (
    <Card className="group">
      <p className="text-sm text-gray-500">
        {solution.category}
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        {solution.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {solution.description}
      </p>

      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-6 inline-block font-medium"
      >
        Explore →
      </Link>
    </Card>
  );
}