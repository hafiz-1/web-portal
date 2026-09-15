import Image from "next/image";
import Link from "next/link";
import { Solution } from "@/types/solution";
import Card from "@/components/ui/Card";

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Card className="group relative isolate min-h-[12rem] overflow-hidden border-0 bg-[#132019] p-0">
      <Image src={solution.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover brightness-[.72] transition duration-500 group-hover:scale-105 group-hover:brightness-[.8]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061009]/95 via-[#102016]/64 to-[#102016]/20 transition group-hover:from-[#061009]/90" />
      <div className="w-full p-6 pb-7 text-left text-white sm:p-7 sm:pb-8">
        <h3 className="text-2xl font-semibold tracking-tight !text-white" style={{ WebkitTextFillColor: "white" }}>{solution.title}</h3>
        <p className="mt-3 leading-7 text-white/90">{solution.description}</p>
        <Link href={`/solutions/${solution.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#7BC96F] transition-transform group-hover:translate-x-1 hover:text-white">Explore <span aria-hidden="true">→</span></Link>
      </div>
    </Card>
  );
}
