const stats = [
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "100+",
    label: "Cities Connected",
  },
  {
    value: "50K+",
    label: "Customers Served",
  },
  {
    value: "24/7",
    label: "Operational Support",
  },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-semibold md:text-5xl">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}