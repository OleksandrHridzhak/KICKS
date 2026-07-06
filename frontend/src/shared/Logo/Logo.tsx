import styles from "./Logo.module.css";

type LogoProps = {
  size: "standard" | "big" | "full";
  color?: "light" | "dark";
};

function Logo({ size, color = "dark" }: LogoProps) {
  const logoPath = `/logo-${color}.png`;

  return (
    <div className={`${styles.container} ${styles[`logo-size-${size}`]}`}>
      <img src={logoPath} alt="Our logo" className={styles.img} />
    </div>
  );
}

export default Logo;
