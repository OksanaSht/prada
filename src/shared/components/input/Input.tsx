import { InputHTMLAttributes, KeyboardEvent, useRef } from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";
import { useResizeObserver } from "usehooks-ts";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  mode?: "light" | "dark";
  border?: boolean;
  onChange: (value: string) => void;
  onEnter?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  type?: "email" | "password" | "text" | "number";
  name?: string;
  id?: string;
  placeholder?: string;
}

const DEFAULT_X_PADDING = "1rem";

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
  border = true,
  ...props
}: InputProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const { width: leftIconWidth } = useResizeObserver({
    ref: leftRef,
    box: "border-box",
  });
  const rightRef = useRef<HTMLDivElement>(null);
  const { width: rightIconWidth } = useResizeObserver({
    ref: rightRef,
    box: "border-box",
  });
  console.log(leftIconWidth, rightIconWidth);
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
    <div className={styles.wrapper}>
      {left && (
        <div
          ref={leftRef}
          className={styles.left}
          style={{ left: DEFAULT_X_PADDING }}
        >
          {left}
        </div>
      )}
      <input
        className={clsx(styles.input, {
          [styles.light]: mode === "light",
          [styles.dark]: mode === "dark",
          [styles.borderNone]: !border,
        })}
        style={{
          paddingLeft: leftIconWidth
            ? `calc(${DEFAULT_X_PADDING} + 0.3rem + ${leftIconWidth}px)`
            : DEFAULT_X_PADDING,
          paddingRight: rightIconWidth
            ? `calc(${DEFAULT_X_PADDING} + 0.3rem + ${rightIconWidth}px)`
            : DEFAULT_X_PADDING,
        }}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        {...enterHandler}
        {...props}
      />
      {right && (
        <div
          ref={rightRef}
          className={styles.right}
          style={{ right: DEFAULT_X_PADDING }}
        >
          {right}
        </div>
      )}
    </div>
  );
}
