import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const links = [
  ["Company Profile", "/about/company-profile"],
  ["Leadership", "/about/leadership"],
  ["Partners", "/about/partners"],
  ["CSR", "/about/csr"],
];

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          About Wateen
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          About Wateen
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          Discover who we are, what we believe and how we
          help build a digitally connected future.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {links.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border p-8 transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold">
                {title}
              </h2>

              <p className="mt-4 text-gray-500">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}