import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-black text-white hover:bg-gray-800",
    secondary:
      "border border-white/80 bg-[#5DAD54]/15 text-white hover:bg-[#5DAD54]/25",
    ghost:
      "text-black hover:underline",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full px-6 py-3
    text-sm font-medium
    button-motion
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}