import Image from "next/image";
import Link from "next/link";
import { Industry } from "@/types/industry";
import Card from "@/components/ui/Card";

export default function IndustryCard({
  industry,
}: {
  industry: Industry;
}) {
  return (
    <Card className="group relative isolate min-h-[12rem] overflow-hidden !border-0 !p-0">
      <Image
        src={industry.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="absolute inset-0 object-cover brightness-[0.65] transition duration-500 group-hover:scale-105 group-hover:brightness-[0.72]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061009]/95 via-[#102016]/60 to-[#102016]/15" />

      <div className="relative z-10 flex h-full min-h-[12rem] flex-col items-start p-5 text-left sm:p-6">
        <div className="w-full">
          <h3 className="!m-0 !text-left whitespace-nowrap text-lg font-semibold leading-tight tracking-tight !text-white sm:text-xl">
            {industry.title}
          </h3>

          <p className="mt-3 max-w-[90%] !text-left text-sm leading-6 text-white/90">
            {industry.description}
          </p>
        </div>

        <Link
          href={`/industries/${industry.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-left text-sm font-semibold text-[#7BC96F] transition-transform duration-300 group-hover:translate-x-1 hover:text-white"
        >
          Explore
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}