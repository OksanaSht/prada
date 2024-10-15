import { InputHTMLAttributes, KeyboardEvent, useRef, forwardRef } from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";
import { useResizeObserver } from "usehooks-ts";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  mode?: "light" | "dark";
  border?: boolean;
  onEnter?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  type?: "email" | "password" | "text" | "number";
  name?: string;
  id?: string;
  placeholder?: string;
  error?: FieldError;
}

const DEFAULT_X_PADDING = "1rem";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      onChange,
      onEnter,
      left,
      right,
      type = "text",
      name,
      mode = "dark",
      error,
      ...props
    },
    ref
  ) => {
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
          ref={ref}
          className={clsx(styles.input, {
            [styles.dark]: mode === "light",
            [styles.light]: mode === "dark",
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
          onChange={onChange}
          {...enterHandler}
          {...props}
        />
        {error && <p>{error.message}</p>}
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
);
