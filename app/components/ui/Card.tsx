import { ReactNode } from "react";

export default function Card({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<article className={`rounded-2xl border border-gray-200 bg-white p-8 ${className}`}>
			{children}
		</article>
	);
}
