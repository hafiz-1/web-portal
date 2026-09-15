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
      <p className="page-kicker">
        {insight.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#132019]">
        {insight.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#5c6a60]">
        {insight.excerpt}
      </p>

      <Link
        href={`/insights/${insight.slug}`}
        className="text-link mt-7 inline-flex items-center gap-2 text-sm"
      >
        Read More →
      </Link>
    </Card>
  );
}
