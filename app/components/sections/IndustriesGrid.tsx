import { industries } from "@/data/industries";
import IndustryCard from "@/components/cards/IndustryCard";

export default function IndustriesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {industries.map((industry) => (
        <IndustryCard
          key={industry.id}
          industry={industry}
        />
      ))}
    </div>
  );
}