import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function CustomCard({
  children,
  className = "",
  hover = false,
}: CustomCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${
        hover ? "hover:shadow-lg transition-shadow" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
