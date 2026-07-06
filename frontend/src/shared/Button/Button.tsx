import styles from "./Button.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

// TODO Should I use generic to avoid h32-h32??
type height = "h32" | "h36" | "h40" | "h48" | "h56" | "h64";
type borderRadius = "br8" | "br12" | "br16" | "br20" | "br24";
type fontSize = "fs12" | "fs14" | "fs16" | "fs18" | "fs20" | "fs24";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;


  isFullWidth?: boolean;

  fontSize: fontSize | `${fontSize}-${fontSize}`;
  height: height | `${height}-${height}`;
  width?: "full" | "fit" | "square";
  borderRadius?: borderRadius | `${borderRadius}-${borderRadius}`;
  variant?: "primary" | "secondary" | "outline" | "ghost";

  className?: string;
};

function Button({

  children,
  isFullWidth = true,
  height,
  width = "full",
  borderRadius = "br8",
  variant = "secondary",
  href,
  className = "",
}: ButtonProps) {
  if (href) {
    return (
      <Link
        to={href}
        className={clsx(
          styles.button,
          isFullWidth && styles.widthFull,
          styles[variant],
          styles[height],
          styles[borderRadius],
          styles[`${width}Width`],
          className,
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={clsx(
        styles.button,
        styles[height],
        isFullWidth && styles.widthFull,
        styles[variant],
        styles[borderRadius],
        styles[`${width}Width`],
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
