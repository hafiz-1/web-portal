import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-8">

        <div>
          <h2 className="text-2xl font-bold">WATEEN</h2>
          <p className="mt-4 text-sm text-gray-400">
            Powering the digital future through connectivity,
            technology and infrastructure.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">What We Do</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/solutions" className="block">Solutions</Link>
            <Link href="/services" className="block">Services</Link>
            <Link href="/industries" className="block">Industries</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Company</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/about/company-profile" className="block">About</Link>
            <Link href="/about/leadership" className="block">Leadership</Link>
            <Link href="/about/partners" className="block">Partners</Link>
            <Link href="/careers" className="block">Careers</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Insights</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/insights" className="block">News</Link>
            <Link href="/insights" className="block">Articles</Link>
            <Link href="/insights" className="block">Case Studies</Link>
            <Link href="/insights" className="block">Downloads</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <Link href="/contact" className="block">Contact Us</Link>
            <Link href="/investors" className="block">Investors</Link>
            <Link href="/governance" className="block">Governance</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Wateen. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/governance">Privacy</Link>
            <Link href="/governance">Terms</Link>
            <Link href="/governance">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}