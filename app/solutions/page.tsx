import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/sections/SectionHeader";
import SolutionsGrid from "@/components/sections/SolutionsGrid";

export default function SolutionsPage() {
	return (
		<Section>
			<Container>
				<SectionHeader
					eyebrow="Solutions"
					title="Technology built for the way your organization works."
					description="Explore connectivity, cloud, cybersecurity, software and infrastructure solutions from Wateen."
				/>
				<SolutionsGrid />
			</Container>
		</Section>
	);
}
