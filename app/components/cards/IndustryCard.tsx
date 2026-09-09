import Link from "next/link";
import { Industry } from "@/types/industry";
import Card from "@/components/ui/Card";

export default function IndustryCard({
  industry,
}: {
  industry: Industry;
}) {
  return (
    <Card>
      <h3 className="text-xl font-semibold">
        {industry.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {industry.description}
      </p>

      <Link
        href={`/industries/${industry.slug}`}
        className="mt-6 inline-block text-sm font-medium"
      >
        Explore →
      </Link>
    </Card>
  );
}