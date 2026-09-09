import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      <Container className="relative flex min-h-[75vh] items-center py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Wateen
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Powering the digital future.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            Connectivity, cloud, cybersecurity and digital
            infrastructure designed to help businesses connect,
            transform and grow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/solutions">
              Explore Solutions
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}