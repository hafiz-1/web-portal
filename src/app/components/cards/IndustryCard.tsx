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
      <h3 className="text-xl font-semibold tracking-tight text-[#132019]">
        {industry.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#5c6a60]">
        {industry.description}
      </p>

      <Link
        href={`/industries/${industry.slug}`}
        className="text-link mt-auto pt-7 inline-flex items-center gap-2 text-sm"
      >
        Explore →
      </Link>
    </Card>
  );
}
