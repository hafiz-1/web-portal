import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CompanyProfilePage() {
  return (
    <Section>
      <Container>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          About Wateen
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Company Profile
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
          Wateen is a technology and digital infrastructure
          company helping organizations connect, transform
          and grow.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              To enable a digitally connected future.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              To deliver reliable technology solutions that
              create meaningful value for customers.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}