import React from "react";

interface ButtonProps {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  transparent?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  primary,
  variant,
  transparent,
  className,
  size,
  onClick,
}) => {
  return (
    <>
      {transparent ? (
        <button
          onClick={onClick}
          className={`
        font-semibold transition-colors duration-300 bg-transparent border
        ${
          size === "small"
            ? "text-sm px-3 py-1.5 rounded-full"
            : size === "large"
            ? "text-lg px-6 py-4 rounded-full"
            : "text-base px-4 py-2 rounded-full"
        }
        ${
          variant === "primary"
            ? "text-primary hover:border-secondary"
            : variant === "secondary"
            ? "text-secondary hover:border-primary"
            : "text-accent hover:border-accent"
        } ${className || ""}`}
        >
          {label}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`
        font-semibold transition-colors duration-300 text-white
        ${
          size === "small"
            ? "text-sm px-3 py-1.5 rounded-full"
            : size === "large"
            ? "text-lg px-6 py-4 rounded-full"
            : "text-base px-4 py-2 rounded-full"
        }
        ${
          primary
            ? "bg-primary hover:bg-secondary"
            : "bg-secondary hover:bg-primary"
        } ${className || ""}`}
        >
          {label}
        </button>
      )}
    </>
  );
};
