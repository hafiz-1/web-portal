import Image from "next/image";
import Link from "next/link";
import { Solution } from "@/types/solution";
import Card from "@/components/ui/Card";

export default function SolutionCard({
  solution,
}: {
  solution: Solution;
}) {
  return (
    <Card className="group relative isolate min-h-[12rem] overflow-hidden !border-0 !p-0">
      <Image
        src={solution.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="absolute inset-0 object-cover brightness-[0.65] transition duration-500 group-hover:scale-105 group-hover:brightness-[0.72]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061009]/95 via-[#102016]/60 to-[#102016]/15" />

      <div className="relative z-10 flex h-full min-h-[12rem] flex-col items-start p-6 text-left sm:p-7">
        <div className="w-full">
          <h3 className="!m-0 !text-left text-xl font-semibold leading-tight tracking-tight !text-white sm:text-2xl">
            {solution.title}
          </h3>

          <p className="mt-3 max-w-[90%] !text-left text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
            {solution.description}
          </p>
        </div>

        <Link
          href={`/solutions/${solution.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-left text-sm font-semibold text-[#7BC96F] transition-transform duration-300 group-hover:translate-x-1 hover:text-white"
        >
          Explore
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}