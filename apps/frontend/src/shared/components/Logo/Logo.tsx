import styles from "./Logo.module.css";
import clsx from "clsx";

type LogoProps = {
  size: "standard" | "big" | "full";
  color?: "light" | "dark";
  className?: string;
};

function Logo({ size, color = "dark", className }: LogoProps) {
  const logoPath = `/logo-${color}.png`;

  return (
    <div className={clsx(styles.container, styles[`logo-size-${size}`], className)}>
      <img src={logoPath} alt="Our logo" className={styles.img} />
    </div>
  );
}

export default Logo;
