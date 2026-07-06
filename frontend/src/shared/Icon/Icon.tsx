import styles from "./Icon.module.css";
import clsx from "clsx";

type IconProps = {
  name: string;
  size?: 16 | 24 | 32 | "16-24" | "16-32";
  className?: string;
};

function Icon({ name, size = "16-24", className }: IconProps) {
  return (
    <svg className={clsx(styles.icon, className, styles[`size-${size}`])}>
      <use xlinkHref={`/icons.svg#${name}`} />
    </svg>
  );
}

export default Icon;
