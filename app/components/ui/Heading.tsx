import { ReactNode } from "react";

export default function Heading({
	children,
	level = 2,
	className = "",
}: {
	children: ReactNode;
	level?: 1 | 2 | 3;
	className?: string;
}) {
	const classes = `font-semibold tracking-tight ${className}`;

	if (level === 1) return <h1 className={classes}>{children}</h1>;
	if (level === 3) return <h3 className={classes}>{children}</h3>;
	return <h2 className={classes}>{children}</h2>;
}
