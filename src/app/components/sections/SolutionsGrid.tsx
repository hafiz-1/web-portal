import { solutions } from "@/data/solutions";
import SolutionCard from "@/components/cards/SolutionCard";
import Reveal from "@/components/ui/Reveal";

export default function SolutionsGrid() {
  return (
    <Reveal className="motion-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((solution) => (
        <SolutionCard
          key={solution.id}
          solution={solution}
        />
      ))}
    </Reveal>
  );
}