import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#102016] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(93,173,84,0.28),transparent_30%),linear-gradient(120deg,#0b1710_0%,#122a1a_55%,#0a1610_100%)]" />
      <div className="absolute -right-20 top-16 h-72 w-72 rounded-full border border-[#7BC96F]/20" />

      <Container className="relative flex min-h-[62vh] items-center py-16 sm:py-20 lg:min-h-[38rem] lg:py-24">
        <div className="hero-content max-w-4xl">
          <p className="hero-item mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Wateen
          </p>

          <h1 className="hero-item hero-title pb-3 text-4xl font-semibold leading-[1.16] tracking-tight sm:text-5xl md:text-6xl">
            Powering the digital future.
          </h1>

          <p className="hero-item mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            Connectivity, cloud, cybersecurity and digital
            infrastructure designed to help businesses connect,
            transform and grow.
          </p>

          <div className="hero-item mt-10 flex flex-wrap gap-4">
            <Button href="/solutions">
              Explore Solutions
            </Button>

            <Button href="/contact" variant="secondary">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
