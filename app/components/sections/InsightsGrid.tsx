import { insights } from "@/data/insights";
import InsightCard from "@/components/cards/InsightCard";

export default function InsightsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {insights.slice(0, 3).map((insight) => (
        <InsightCard
          key={insight.id}
          insight={insight}
        />
      ))}
    </div>
  );
}