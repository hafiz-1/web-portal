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
      <h3 className="text-2xl font-semibold tracking-tight text-[#132019]">
        {solution.title}
      </h3>

      <p className="mt-3 leading-7 text-[#5c6a60]">
        {solution.description}
      </p>

      <Link
        href={`/solutions/${solution.slug}`}
        className="text-link mt-7 inline-flex items-center gap-2 text-sm"
      >
        Explore →
      </Link>
    </Card>
  );
}
