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
    primary: "bg-[#7BC96F] text-[#132019] hover:bg-[#91D985]",
    secondary: "border border-white/35 bg-white/10 text-white hover:border-white/60 hover:bg-white/18",
    accent: "bg-[#7BC96F] text-[#132019] hover:bg-[#91D985]",
    ghost: "border border-[#b9cfba] bg-white text-[#245f2e] hover:border-[#5DAD54] hover:bg-[#f3faf1]",
  };

  const classes = `
    inline-flex items-center justify-center
    rounded-full px-5 py-3 sm:px-6
    text-sm font-semibold tracking-[0.01em]
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
