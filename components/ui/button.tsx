import { cn } from "@/lib/utils";
import React from "react";

// Define available button variants and sizes
type Variant = "default" | "icon" | "secondary" | "destructive";
type Size = "default" | "sm" | "md" | "lg" | "xl" | "icon";

// Extend ButtonProps with custom variant and size
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

// Centralized button styles
const buttonStyles = {
  base: "inline-flex items-center justify-center whitespace-nowrap duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default:
      "bg-gradient-to-b from-light-primary to-primary text-white hover:to-light-primary",
    icon: "text-black hover:scale-105",
    secondary:
      "border border-secondary-border text-light-primary p-2 inline-block w-fit hover:bg-light-primary hover:text-white",
    destructive: "bg-gray-300 text-black hover:bg-gray-400 w-full my-4",
  },
  sizes: {
    default: "w-44 h-[51px] font-bold text-lg",
    sm: "h-9 px-2",
    md: "h-10 px-4",
    lg: "h-11 px-8",
    xl: "h-16 px-10",
    icon: "h-10 w-10",
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        buttonStyles.base,
        buttonStyles.variants[variant], // Apply the chosen variant styles
        buttonStyles.sizes[size], // Apply the chosen size styles
        className, // Allow additional custom classes
      )}
    >
      {children}
    </button>
  );
};

export default Button;
