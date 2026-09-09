export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}