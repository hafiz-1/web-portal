import Link from "next/link";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";
import { navigation } from "@/data/navigation";
import { solutions } from "@/data/solutions";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const pages = [
  ...navigation.map((item) => ({
    title: item.title,
    description: `Explore Wateen ${item.title.toLowerCase()}.`,
    href: item.href,
    type: "Page",
  })),
  ...solutions.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/solutions/${item.slug}`,
    type: "Solution",
  })),
  ...industries.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/industries/${item.slug}`,
    type: "Industry",
  })),
  ...insights.map((item) => ({
    title: item.title,
    description: item.excerpt,
    href: `/insights/${item.slug}`,
    type: "Insight",
  })),
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalizedQuery = query.toLowerCase();
  const results = normalizedQuery
    ? pages.filter((page) =>
        `${page.title} ${page.description} ${page.type}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : [];

  return (
    <section className="mx-auto max-w-[76rem] px-5 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5DAD54]">
        Search
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#18321d]">
        Find something on Wateen
      </h1>
      <form action="/search" method="get" className="mt-8 flex max-w-2xl gap-3">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Search Wateen</span>
          <input
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search solutions, industries and insights"
            className="h-12 w-full rounded-full border border-[#d5dfd7] bg-[#f8fbf7] px-5 outline-none focus:border-[#5DAD54]"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#7BC96F] px-6 text-sm font-semibold text-[#132019] hover:bg-[#91D985]"
        >
          Search
        </button>
      </form>

      {query ? (
        <p className="mt-10 text-sm text-[#5c6a60]">
          {results.length} {results.length === 1 ? "result" : "results"} for &quot;{query}&quot;
        </p>
      ) : (
        <p className="mt-10 text-sm text-[#5c6a60]">Enter a search term to get started.</p>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {results.map((result) => (
          <Link
            key={`${result.type}-${result.href}`}
            href={result.href}
            className="rounded-2xl border border-[#dce6dd] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#7BC96F] hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5DAD54]">
              {result.type}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#18321d]">{result.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5c6a60]">{result.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}