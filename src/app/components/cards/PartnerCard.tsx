import { Partner } from "@/types/partner";
import Image from "next/image";

export default function PartnerCard({
  partner,
}: {
  partner: Partner;
}) {
  return (
    <div className="surface-card flex h-28 items-center justify-center p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#5DAD54]/50 hover:shadow-lg">
      <Image src={partner.logo} alt={partner.name} width={180} height={80} className="max-h-16 w-auto max-w-full object-contain" />
    </div>
  );
}
