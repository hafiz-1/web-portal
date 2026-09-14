import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="bg-[#f3f8f2] py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#102016] px-7 py-14 text-white sm:px-10 md:px-16 md:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#7BC96F]/20" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to build what&apos;s next?
            </h2>

            <p className="mt-5 text-lg text-gray-300">
              Let&apos;s find the right technology solution for
              your organization.
            </p>

            <div className="mt-8">
              <Button
                href="/contact"
                variant="accent"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
