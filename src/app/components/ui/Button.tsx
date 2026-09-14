import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost";
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
      "bg-[#7BC96F] text-black hover:bg-[#91D985] hover:text-black",
    secondary:
      "bg-[#7BC96F] text-black hover:bg-[#91D985] hover:text-black",
    accent:
      "bg-[#7BC96F] text-black hover:bg-[#91D985] hover:text-black",
    ghost:
      "bg-[#7BC96F] text-black hover:bg-[#91D985] hover:text-black",
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
