import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
	return (
		<span className="inline-flex items-center rounded-full bg-[#eef7ed] px-3 py-1 text-xs font-semibold text-[#357c3d]">
			{children}
		</span>
	);
}
