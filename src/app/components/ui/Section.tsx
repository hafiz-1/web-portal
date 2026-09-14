import { ReactNode } from "react";

export default function Section({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return <section className={`py-16 sm:py-20 lg:py-28 ${className}`}>{children}</section>;
}
