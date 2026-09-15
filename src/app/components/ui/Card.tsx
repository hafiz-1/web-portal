import { ReactNode } from "react";

export default function Card({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<article className={`surface-card flex h-full flex-col p-6 text-left transition duration-300 ease-out hover:-translate-y-1 hover:border-[#5DAD54]/55 hover:shadow-[0_18px_40px_rgb(31_84_37_/_0.10)] sm:p-7 ${className}`}>
			{children}
		</article>
	);
}
