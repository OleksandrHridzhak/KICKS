import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Link.module.scss";

type LinkVariant = "default" | "underline";

export type LinkProps = {
  to: string;
  variant?: LinkVariant;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof RouterLink>;

function Link({
  to,
  variant = "default",
  children,
  className,
  ...props
}: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={clsx(styles.link, styles[variant], className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
