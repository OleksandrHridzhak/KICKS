import React from "react";
import clsx from "clsx";
import styles from "./Heading.module.scss";

type fontSize = "fs12" | "fs14" | "fs16" | "fs18" | "fs20" | "fs24" | "fs36";

export type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize: fontSize | `${fontSize}-${fontSize}`;
  children: React.ReactNode;
  uppercase?: boolean;
  className?: string;
  color?: "default" | "light" | "footer";
  srOnly?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Heading({
  tag: Tag,
  fontSize,
  children,
  uppercase = false,
  color = "default",
  srOnly = false,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={clsx(
        styles.heading,
        styles[fontSize],
        styles[`${color}Color`],
        uppercase && styles.uppercase,
        srOnly && styles.srOnly,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
