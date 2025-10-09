import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function CustomButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: CustomButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-[#5624d0] text-white hover:bg-[#4a1fb8] focus:ring-[#5624d0]",
    secondary:
      "bg-[#1c1d1f] text-white hover:bg-[#2d2f31] focus:ring-[#1c1d1f]",
    outline:
      "border-2 border-[#1c1d1f] text-[#1c1d1f] hover:bg-gray-50 focus:ring-[#1c1d1f]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
}
