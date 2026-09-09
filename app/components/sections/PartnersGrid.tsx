import { partners } from "@/data/partners";
import PartnerCard from "@/components/cards/PartnerCard";
import Reveal from "@/components/ui/Reveal";

export default function PartnersGrid() {
  return (
    <Reveal className="motion-grid grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {partners.map((partner) => (
        <PartnerCard
          key={partner.id}
          partner={partner}
        />
      ))}
    </Reveal>
  );
}