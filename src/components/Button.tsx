import React from "react";

const Button = ({
  children,
  className,
  type = "button",
  ...props
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type={type}
      className={`w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase tracking-wider ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
