import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "coral";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const buttonVariants = {
  primary: "bg-gradient-coral text-white hover:opacity-90 focus:ring-4 focus:ring-qventis-coral/20",
  secondary: "bg-qventis-mint text-white hover:bg-qventis-mint-dark focus:ring-4 focus:ring-qventis-mint/20",
  outline: "border-2 border-qventis-coral text-qventis-coral hover:bg-qventis-coral hover:text-white focus:ring-4 focus:ring-qventis-coral/20",
  ghost: "text-qventis-coral hover:bg-qventis-coral/10 focus:ring-4 focus:ring-qventis-coral/20",
  coral: "bg-qventis-coral text-white hover:bg-qventis-coral-dark focus:ring-4 focus:ring-qventis-coral/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    isLoading = false, 
    disabled,
    children,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
