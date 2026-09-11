import { ReactNode } from "react";

export default function Card({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<article className={`rounded-2xl border border-gray-200 bg-white p-8 transition duration-500 ease-out hover:-translate-y-1 hover:border-[#5DAD54]/50 hover:shadow-xl hover:shadow-[#5DAD54]/10 ${className}`}>
			{children}
		</article>
	);
}
