import React from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
}

export default Card;
