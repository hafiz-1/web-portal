import { Partner } from "@/types/partner";

export default function PartnerCard({
  partner,
}: {
  partner: Partner;
}) {
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6">
      <span className="font-semibold text-gray-500">
        {partner.name}
      </span>
    </div>
  );
}