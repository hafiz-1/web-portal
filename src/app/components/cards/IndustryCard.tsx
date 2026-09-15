import Image from "next/image";
import Link from "next/link";
import { Industry } from "@/types/industry";
import Card from "@/components/ui/Card";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Card className="group relative isolate min-h-[12rem] overflow-hidden border-0 bg-[#132019] p-0">
      <Image
        src={industry.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="-z-20 object-cover brightness-[.72] transition duration-500 group-hover:scale-105 group-hover:brightness-[.8]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061009]/95 via-[#102016]/64 to-[#102016]/20 transition group-hover:from-[#061009]/90" />
      <div className="relative z-10 flex h-full w-full flex-col items-start justify-start p-4 pb-5 text-left text-white sm:p-5 sm:pb-6">
        <h3
          className="text-xl font-semibold tracking-tight !text-white"
          style={{ WebkitTextFillColor: "white" }}
        >
          {industry.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/90">
          {industry.description}
        </p>
        <Link
          href={`/industries/${industry.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7BC96F] transition-transform group-hover:translate-x-1 hover:text-white"
        >
          Explore <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}
