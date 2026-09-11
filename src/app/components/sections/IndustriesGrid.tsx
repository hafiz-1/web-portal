import { industries } from "@/data/industries";
import IndustryCard from "@/components/cards/IndustryCard";
import Reveal from "@/components/ui/Reveal";

export default function IndustriesGrid() {
  return (
    <Reveal className="motion-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => (
        <IndustryCard
          key={industry.id}
          industry={industry}
        />
      ))}
    </Reveal>
  );
}