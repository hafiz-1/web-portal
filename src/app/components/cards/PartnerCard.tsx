import { Partner } from "@/types/partner";

export default function PartnerCard({
  partner,
}: {
  partner: Partner;
}) {
  return (
    <div className="surface-card flex h-28 items-center justify-center p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#5DAD54]/50 hover:shadow-lg">
      <span className="text-center text-sm font-semibold tracking-wide text-[#5c6a60]">
        {partner.name}
      </span>
    </div>
  );
}
