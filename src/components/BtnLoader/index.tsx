import { CSSProperties } from "react";
import styles from "./style.module.css";

const ButtonLoader = ({
  text,
  className,
  style = {},
}: {
  text?: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <button
      style={style}
      className={
        "flex gap-5 items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow whitespace-nowrap w-max " +
        className
      }
    >
      <span>{text || "Yuklanmoqda"}</span>
      <span className={styles.button_loader}></span>
    </button>
  );
};

export default ButtonLoader;
