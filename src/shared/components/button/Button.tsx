import "./styles.module.scss";
import { clsx } from "clsx";


interface ButtonProps {
  children: React.ReactNode;
  className?:  React.ReactNode;
}

export const Button = ({ children }: ButtonProps, { className } : ButtonProps) => {
  return <button className = {clsx("button", className)}>{children}</button>;
};
