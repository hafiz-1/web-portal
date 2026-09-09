import { solutions } from "@/data/solutions";
import SolutionCard from "@/components/cards/SolutionCard";

export default function SolutionsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <SolutionCard
          key={solution.id}
          solution={solution}
        />
      ))}
    </div>
  );
}