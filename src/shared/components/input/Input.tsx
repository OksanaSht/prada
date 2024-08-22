import { InputHTMLAttributes, KeyboardEvent } from "react";
import styles from "./styles.module.scss";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  mode?: "light" | "dark";
  onChange: (value: string) => void;
  onEnter?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export function Input({
  value,
  onChange,
  onEnter,
  left,
  right,
  mode = "dark",
  ...props
}: InputProps) {
  const enterHandler = onEnter
    ? {
        onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            onEnter();
          }
        },
      }
    : {};

  return (
    <div className={styles.wrapper}>
      {left && <div className={styles.left}>{left}</div>}
      <input
        className={styles.input}
        type="email"
        name="mail"
        id="mail"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...enterHandler}
        {...props}
        placeholder="Enter your email"
      />
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
}
