import { ReactNode } from "react";

export default function Section({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return <section className={`py-8 sm:py-10 lg:py-12 ${className}`}>{children}</section>;
}
