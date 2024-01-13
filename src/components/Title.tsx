import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>;
};

export default Title;
