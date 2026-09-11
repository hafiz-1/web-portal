import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-20">
      <Container>
        <div className="rounded-3xl bg-black px-8 py-16 text-white md:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold md:text-5xl">
              Ready to build what&apos;s next?
            </h2>

            <p className="mt-5 text-lg text-gray-300">
              Let&apos;s find the right technology solution for
              your organization.
            </p>

            <div className="mt-8">
              <Button
                href="/contact"
                className="bg-[#7BC96F] text-black hover:bg-[#91D985] hover:text-black"
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