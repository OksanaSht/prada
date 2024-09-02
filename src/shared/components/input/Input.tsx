import { InputHTMLAttributes, KeyboardEvent } from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  mode?: "light" | "dark";
  border?: "none";
  onChange: (value: string) => void;
  onEnter?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  type?: "email" | "password" | "text" | "number" | "search";
  name?: string;
  id?: string;
  placeholder?: string;
}

export function Input({
  value,
  placeholder,
  onChange,
  onEnter,
  left,
  right,
  type = "text",
  name,
  mode = "dark",
  ...props
}: InputProps) {
  const enterHandler = onEnter
    ? {
        onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission on Enter !!!
            onEnter();
          }
        },
      }
    : {};

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.borderNone]: props.border === "none",
      })}
    >
      {left && <div className={styles.left}>{left}</div>}
      <input
        className={clsx(styles.input, {
          [styles.light]: mode === "light",
          [styles.dark]: mode === "dark",
        })}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        {...enterHandler}
        {...props}
      />
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
}
