"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";

type MobileMenuProps = {
	open: boolean;
	onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-[60] bg-white p-6 lg:hidden">
			<div className="flex items-center justify-between">
				<Link href="/" onClick={onClose} className="text-2xl font-bold">
					WATEEN
				</Link>
				<button type="button" onClick={onClose} aria-label="Close menu">
					Close
				</button>
			</div>

			<nav className="mt-12 space-y-6">
				{navigation.map((item) => (
					<Link
						key={item.title}
						href={item.href}
						onClick={onClose}
						className="block text-xl font-medium"
					>
						{item.title}
					</Link>
				))}
				<Link href="/careers" onClick={onClose} className="block text-xl font-medium">
					Careers
				</Link>
				<Link href="/investors" onClick={onClose} className="block text-xl font-medium">
					Investors
				</Link>
				<Link href="/contact" onClick={onClose} className="block text-xl font-medium">
					Contact Us
				</Link>
			</nav>
		</div>
	);
}
