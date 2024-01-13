import { ReactNode } from "react";

type Props = {
  path: string;
  w?: string;
  h?: string;
  size?: string | number | null;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export default function Icon({
  path,
  w = "",
  h = "",
  size = null,
  className = "",
  children,
  onClick,
}: Props) {
  const iconSize = size ?? 16;

  return (
    <span
      onClick={onClick}
      className={`inline-flex justify-center items-center ${w} ${h} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width={iconSize}
        height={iconSize}
        className="inline-block"
      >
        <path fill="currentColor" d={path} />
      </svg>
      {children}
    </span>
  );
}
