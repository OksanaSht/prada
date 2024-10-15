import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "dark" | "light";
}

export const Button = ({
  children,
  color = "dark",
  className = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, styles.button, {
        [styles.light]: color === "light",
        [styles.dark]: color === "dark",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
