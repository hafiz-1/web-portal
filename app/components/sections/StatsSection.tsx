import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 100,
    suffix: "+",
    label: "Cities Connected",
  },
  {
    value: 50,
    suffix: "K+",
    label: "Customers Served",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Operational Support",
  },
];

export default function StatsSection() {
  return (
    <Reveal className="motion-grid grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-semibold md:text-5xl">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </Reveal>
  );
}