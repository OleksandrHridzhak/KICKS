import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Link.module.scss";

type LinkVariant = "default" | "underline";
type FontWeight = "regular" | "semiBold";

export type LinkProps = {
  to: string;
  variant?: LinkVariant;
  children: React.ReactNode;
  className?: string;
  color?: "default" | "inverse";
  fontWeight?: FontWeight;
} & React.ComponentProps<typeof RouterLink>;

function Link({
  to,
  variant = "default",
  children,
  className,
  color = "default",
  fontWeight = "semiBold",
  ...props
}: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={clsx(
        styles.link,
        styles[variant],
        styles[`${color}Color`],
        styles[fontWeight],
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
