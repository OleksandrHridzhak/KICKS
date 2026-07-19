import React from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

type fontSize =
  | "fs10"
  | "fs12"
  | "fs14"
  | "fs16"
  | "fs20"
  | "fs24"
  | "fs32"
  | "fs36"
  | "fs40";

type FontWeight = "regular" | "semiBold";

export type TextProps = {
  tag?: "p" | "span" | "div" | "label";
  fontSize: fontSize | `${fontSize}-${fontSize}`;
  fontWeight?: FontWeight;
  opacity?: "100" | "80" | "75";
  children: React.ReactNode;
  className?: string;
  color?: "default" | "inverse";
} & React.HTMLAttributes<HTMLElement>;

function Text({
  tag: Tag = "p",
  fontSize,
  fontWeight = "regular",
  children,
  opacity = "100",
  color = "default",
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={clsx(
        styles.text,
        styles[fontSize],
        styles[fontWeight],
        styles[`opacity-${opacity}`],
        styles[`${color}Color`],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Text;
