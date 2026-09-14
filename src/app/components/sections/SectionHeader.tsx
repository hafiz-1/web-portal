import Reveal from "@/components/ui/Reveal";

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
    <Reveal className="mb-10 max-w-3xl lg:mb-14">
      {eyebrow && (
        <p className="page-kicker mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="page-title text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#5c6a60] md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}
