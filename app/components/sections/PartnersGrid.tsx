import { partners } from "@/data/partners";
import PartnerCard from "@/components/cards/PartnerCard";

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {partners.map((partner) => (
        <PartnerCard
          key={partner.id}
          partner={partner}
        />
      ))}
    </div>
  );
}