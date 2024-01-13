import React from "react";
import Icon from "./Icon";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  name?: string;
  type?: string;
  className?: string;
  icon?: string;
  iconSize?: number;
  requiredMsg?: string;
  required?: boolean;
}

const Input = ({
  text,
  name,
  type = "text",
  className,
  icon,
  iconSize = 16,
  requiredMsg,
  required = false,
  ...props
}: Props) => {
  return (
    <>
      {text && (
        <label htmlFor={name} className="block font-bold mb-2 cursor-pointer">
          {text}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={text}
        className={`px-3 py-2 max-w-full border-gray-500 rounded w-full outline-none h-12 border bg-white ${
          icon ? "pl-10" : ""
        } ${className}`}
        required={required}
        {...props}
      />
      {icon && (
        <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500">
          <Icon path={icon} size={iconSize} />
        </span>
      )}
      {requiredMsg && (
        <div className="text-xs text-gray-500 mt-1">{requiredMsg}</div>
      )}
    </>
  );
};

export default Input;
