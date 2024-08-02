import styles from "./styles.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

export function Input({ value, onChange, onEnter }: InputProps) {
  const enterHandler = onEnter
    ? {
        onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            onEnter();
          }
        },
      }
    : {};

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="email"
        name="mail"
        id="mail"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...enterHandler}
        placeholder="Enter your email"
      />
    </div>
  );
}
