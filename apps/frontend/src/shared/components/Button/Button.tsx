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
  type?: "button" | "submit" | "reset";


  isFullWidth?: boolean;

  fontSize: fontSize | `${fontSize}-${fontSize}`;
  height: height | `${height}-${height}`;
  width?: "full" | "fit" | "square";
  justify?: "center" | "between"
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
  justify,
  href,
  type = "button",
  className = "",
}: ButtonProps) {

  const commonClasses = clsx(
    styles.button,
    isFullWidth && styles.widthFull,
    styles[variant],
    styles[height],
    styles[borderRadius],
    styles[`justify-${justify}`],
    styles[`${width}Width`],
    className,
  );

  if (href) {
    return (
      <Link
        to={href}
        className={commonClasses}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={commonClasses}
    >
      {children}
    </button>
  );
}

export default Button;
