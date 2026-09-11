import Link from "next/link";
import { Insight } from "@/types/insight";
import Card from "@/components/ui/Card";

export default function InsightCard({
  insight,
}: {
  insight: Insight;
}) {
  return (
    <Card>
      <p className="text-sm text-gray-500">
        {insight.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {insight.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {insight.excerpt}
      </p>

      <Link
        href={`/insights/${insight.slug}`}
        className="mt-6 inline-block text-sm font-medium"
      >
        Read More →
      </Link>
    </Card>
  );
}